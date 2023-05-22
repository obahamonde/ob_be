import asyncio
import os
from typing import Dict

from aiofauna import Api, FaunaModel, Field, Request, redirect, render_template
from aiofauna.client import HTTPClient  # pylint: disable=all
from aiohttp_sse import EventSourceResponse, sse_response
from dotenv import load_dotenv
from multidict import MultiDict
from pydantic import BaseModel

load_dotenv()
FAUNA_SECRET = os.getenv("FAUNA_SECRET")
SLACK_WEBHOOK_URL = os.getenv("SLACK_WEBHOOK_URL")
BREVO_API_KEY = os.getenv("BREVO_API_KEY")
assert isinstance(FAUNA_SECRET, str)
assert isinstance(SLACK_WEBHOOK_URL, str)
assert isinstance(BREVO_API_KEY, str)

class Contact(FaunaModel):
    message:str = Field(...)
    email:str = Field(..., index=True)
    name:str = Field(...)
    
class SlashCommand(BaseModel):
    usr:str = Field(...)
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
        await http.text(SLACK_WEBHOOK_URL, method="POST", data={"text": f"https://ob-be-fwuw7gz7oq-uc.a.run.app/?usr={contact.ref}"})
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


@app.get("/api/sse")
async def stream_handler(request:Request,usr:str):
    """Stream handler"""
    async with sse_response(request) as resp:
        state[usr] = resp
        await resp.send("Connected")
        await resp.wait()
    return resp

@app.post("/api/streams")
async def stream_post(cmd:SlashCommand):
    """Stream handler"""
    if cmd.usr not in state:
        return {
            "message": "User not found",
            "status": "error"
        }
    resp = state[cmd.usr]
    if resp.task:
        if resp.task.done():
            print("Task done")
            return {
                "message": "Task done",
                "status": "error"
            }
    await resp.send(cmd.message)
    state.pop(cmd.usr)
    return {
        "message": "Message sent",
        "status": "success"
    }

@app.get('/')
async def index():
    return render_template('index.html')

app.static()

#@app.on_event("startup")
async def startup(_):
    """Startup handler"""
    await Contact.provision()
    
    
if __name__ == "__main__":
    app.run()