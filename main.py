import os
import asyncio
from typing import Dict
from aiofauna.client import HTTPClient # pylint: disable=all
from aiofauna import Api, FaunaModel, Field, Request
from pydantic import BaseModel
from aiohttp_sse import sse_response, EventSourceResponse
from dotenv import load_dotenv


load_dotenv()
FAUNA_SECRET = os.getenv("FAUNA_SECRET")
SLACK_WEBHOOK_URL = os.getenv("SLACK_WEBHOOK_URL")
BREVO_API_KEY = os.getenv("BREVO_API_KEY")

class Contact(FaunaModel):
    message:str = Field(...)
    email:str = Field(..., index=True)
    name:str = Field(...)
    
class SlashCommand(BaseModel):
    ref:str = Field(...)
    message:str = Field(...)


http = HTTPClient()

app = Api()

state:Dict[str,EventSourceResponse] = {}


@app.post("/api/contact")
async def contact_handler(body:Contact):
    """Contact handler"""
    contact = await body.save()
    if isinstance(contact, Contact):
        payload = {
            "sender": {
                "name": contact.name,
                "email": contact.email
            },
            "to": [
                {
                    "email": "oscar.bahamonde.dev@gmail.com",
                    "name": "Oscar Bahamonde"
                }
            ],
            "htmlContent": f"<p>{contact.message}</p>",
            "textContent": contact.message,
            "subject": f"New message from {contact.name} <{contact.email}>"
        }
        url = "https://api.sendinblue.com/v3/smtp/email"
        headers = {
            "api-key": BREVO_API_KEY,
            "content-type": "application/json",
            "accept": "application/json"
        }
        await http.fetch(url, method="POST", data=payload, headers=headers)
        await http.text(SLACK_WEBHOOK_URL, method="POST", data={"text": contact.json()})
        response = {
            "message": "Message sent successfully",
            "status": "success",  
        "reference": contact.ref
        }
        return response
    response = {
        "message": "Message not sent",
        "status": "error"
    }
    return response

async def stream_handler(request:Request):
    """Stream handler"""
    params = dict(request.query)
    if "ref" not in params:
        raise Exception("Ref is required") # pylint: disable=broad-exception-raised
    ref = params["ref"]
    async with sse_response(request) as resp:
        while True:
            state[ref] = resp
            await asyncio.sleep(60)
            if ref not in state:
                return resp
        
app.router.add_get("/api/stream", stream_handler)

@app.post("/api/stream")
async def stream_post(cmd:SlashCommand):
    """Stream handler"""
    if cmd.ref not in state:
        return {
            "message": "User not found",
            "status": "error"
        }
    resp = state[cmd.ref]
    if resp.task:
        if resp.task.done():
            print("Task done")
            return {
                "message": "Task done",
                "status": "error"
            }
    await resp.send(cmd.message)
    state.pop(cmd.ref)
    return {
        "message": "Message sent",
        "status": "success"
    }


#@app.on_event("startup")
async def startup(_):
    """Startup handler"""
    await Contact.provision()