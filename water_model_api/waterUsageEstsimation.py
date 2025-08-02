import pandas as pd
import numpy as np
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import r2_score, mean_absolute_error
import joblib

df = pd.read_csv(r"C:\Users\akshat goel\OneDrive\Desktop\CHODING\projects\farmerAssistanceSystem\DATASET - Sheet1.csv")

def extract_temperature(temp_str):
    try:
        if '-' in temp_str:
            low, high = map(float, temp_str.split('-'))
            return (low + high) / 2
        else:
            return float(temp_str)
    except:
        return None

df['TEMPERATURE'] = df['TEMPERATURE'].apply(extract_temperature)


# encoders for converting object to intefer types
le_crop = LabelEncoder()
le_soil = LabelEncoder()
le_region = LabelEncoder()
le_weather = LabelEncoder()

df['CROP TYPE'] = le_crop.fit_transform(df['CROP TYPE'])
df['SOIL TYPE'] = le_soil.fit_transform(df['SOIL TYPE'])
df['REGION'] = le_region.fit_transform(df['REGION'])
df['WEATHER CONDITION'] = le_weather.fit_transform(df['WEATHER CONDITION'])

X = df.drop("WATER REQUIREMENT", axis=1) #features
y = df["WATER REQUIREMENT"] #targets

y = np.log1p(df["WATER REQUIREMENT"])


X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

regressor = RandomForestRegressor(random_state=42)
regressor.fit(X_train, y_train)

y_pred = regressor.predict(X_test)

print("\n=== Model Evaluation ===")
print(f"R² Score: {r2_score(y_test, y_pred):.3f}")
print(f"Mean Absolute Error (MAE): {mean_absolute_error(y_test, y_pred):.2f}")

#sample prediction
sample_input = X_test.iloc[[0]]  # retains feature names
predicted_value = regressor.predict(sample_input)[0]
actual_value = y_test.iloc[0]

print(f"\nSample Prediction - Predicted: {predicted_value:.2f}, Actual: {actual_value:.2f}")
# Convert back to original scale for evaluation
y_pred_exp = np.expm1(y_pred)
y_test_exp = np.expm1(y_test)

print("\n=== Model Evaluation (after inverse transform) ===")
print(f"R² Score: {r2_score(y_test_exp, y_pred_exp):.3f}")
print(f"MAE: {mean_absolute_error(y_test_exp, y_pred_exp):.2f}")

joblib.dump(regressor, "water_model.pkl")
joblib.dump(le_crop, "le_crop.pkl")
joblib.dump(le_soil, "le_soil.pkl")
joblib.dump(le_region, "le_region.pkl")
joblib.dump(le_weather, "le_weather.pkl")
