# simple-ocr
## Installation:

- Install dependencies:
```
pip install -r requirements.txt
```
- If you encounter any error, try to install:
```
pip install tensorflow pillow fastapi uvicorn python-multipart opencv-python-headless imutils
```
- Run the FastAPI web server:
```
uvicorn app:app --reload
```
- Try it out:
```
http://127.0.0.1:8000
```
