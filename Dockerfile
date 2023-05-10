FROM python:3.9.5-slim-buster

WORKDIR /app

COPY . .

RUN pip install --upgrade pip &&\
    pip install -r requirements.txt

CMD ["adev", "runserver", "--port", "8080", "--livereload", "--host", "0.0.0.0"]