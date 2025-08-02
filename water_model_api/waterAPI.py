from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import numpy as np

# Load model and encoders
model = joblib.load("water_model.pkl")
le_crop = joblib.load("le_crop.pkl")
le_soil = joblib.load("le_soil.pkl")
le_region = joblib.load("le_region.pkl")
le_weather = joblib.load("le_weather.pkl")

app = FastAPI()

# Define the input format using Pydantic
class WaterInput(BaseModel):
    crop_type: str
    soil_type: str
    region: str
    temperature: float
    weather_condition: str

@app.get("/")
def home():
    return {"message": "Water Usage Estimation API is running."}

@app.post("/predict")
def predict_water_usage(data: WaterInput):
    try:
        # Encode input features
        crop_encoded = le_crop.transform([data.crop_type])[0]
        soil_encoded = le_soil.transform([data.soil_type])[0]
        region_encoded = le_region.transform([data.region])[0]
        weather_encoded = le_weather.transform([data.weather_condition])[0]

        # Prepare input array
        input_features = np.array([[crop_encoded, soil_encoded, region_encoded,
                                    data.temperature, weather_encoded]])

        # Predict (model was trained on log scale, so inverse it)
        prediction_log = model.predict(input_features)[0]
        prediction = np.expm1(prediction_log)

        return {
            "predicted_water_requirement": round(prediction, 2),
            "unit": "liters per square meter"
        }

    except Exception as e:
        return {"error": str(e)}
