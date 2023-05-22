FROM python:3.9.5-slim-buster

WORKDIR /app

COPY . .

RUN pip install --upgrade pip &&\
    pip install -r requirements.txt

CMD ["python", "main.py"]