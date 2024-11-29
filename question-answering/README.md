# question-answering
## Installation:

- Install dependencies:
```
pip install -r requirements.txt
```
- If you encounter any error, try to install:
```
pip install fastapi uvicorn transformers tensorflow tf_keras
```
- Run the FastAPI web server:
```
uvicorn app:app --reload
```
- Try it out:
```bash
curl --location 'http://127.0.0.1:8000/predict' \
--header 'Content-Type: application/json' \
--data '{
    "question": "How many parameters does BLOOM support?",
    "context": "BLOOM has 176 billion parameters and can generate text in 46 languages natural languages and 13 programming languages."
}'
```
You will received the response:
```json
{
    "status": "success",
    "code": 200,
    "data": {
        "answer": "176 billion"
    }
}
```
