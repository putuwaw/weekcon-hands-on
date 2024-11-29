from typing import Optional
from fastapi import FastAPI
from pydantic import BaseModel
from transformers import pipeline

app = FastAPI()


class PredictRequest(BaseModel):
    question: str
    context: str


class ModelAnswer(BaseModel):
    score: float
    start: int
    end: int
    answer: str


class PredictResponse(BaseModel):
    status: Optional[str] = "success"
    code: Optional[int] = 200
    data: Optional[dict] = {}


@app.post("/predict", response_model=PredictResponse)
async def predict(request: PredictRequest):
    question = request.question
    context = request.context

    question_answerer = pipeline("question-answering", model="putuwaw/qa_model")
    response = ModelAnswer(**question_answerer(question=question, context=context))

    return PredictResponse(data=response.model_dump())
