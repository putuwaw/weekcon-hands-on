FROM python:3.10

WORKDIR /app

RUN apt-get update && apt-get install ffmpeg libsm6 libxext6 libgl1 -y

COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

COPY . . 

# config file by default: ./gunicorn.conf.py
CMD [ "gunicorn", "app:app" ]