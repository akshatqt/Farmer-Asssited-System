from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import numpy as np

model = joblib.load("crop_model.pkl")
label_encoder = joblib.load("label_encoder.pkl")

app = FastAPI(title="Crop Recommendation API")

class CropInput(BaseModel):
    N: float
    P: float
    K: float
    temperature: float
    humidity: float
    ph: float
    rainfall: float

@app.get("/")
def read_root():
    return {"message": "Welcome to the Crop Recommendation API"}

# prediction endpoint
@app.post("/predict")
def predict_crop(data: CropInput):
    # converting input data into an 2D array
    input_array = np.array([[data.N, data.P, data.K, data.temperature, data.humidity, data.ph, data.rainfall]])
    
    prediction_encoded = model.predict(input_array)[0]

    predicted_crop = label_encoder.inverse_transform([prediction_encoded])[0]

    return {
        "predicted_crop": predicted_crop
    }
