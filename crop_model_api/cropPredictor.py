import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import accuracy_score, classification_report
import joblib

df = pd.read_csv(r"C:\Users\akshat goel\OneDrive\Desktop\CHODING\projects\farmerAssistanceSystem\Crop_recommendation.csv")

X = df.drop('label', axis=1)  # Features: N, P, K, temperature, humidity, ph, rainfall
y = df['label']               # Label: Crop name

# assigning crop names to an integer
le = LabelEncoder()
y_encoded = le.fit_transform(y)

label_mapping = dict(zip(le.transform(le.classes_), le.classes_))
print("=== Crop Label Mapping ===")
for k, v in label_mapping.items():
    print(f"{k} → {v}")

X_train, X_test, y_train, y_test = train_test_split(X, y_encoded, test_size=0.2, random_state=42)

# print(f"\nX_train shape: {X_train.shape}")
# print(f"X_test shape: {X_test.shape}")
# print(f"y_train shape: {y_train.shape}")
# print(f"y_test shape: {y_test.shape}")

rf = RandomForestClassifier(random_state=42)
rf.fit(X_train, y_train)

y_pred = rf.predict(X_test)

accuracy = accuracy_score(y_test, y_pred)
print("\n=== Model Accuracy ===")
print("Accuracy:", accuracy)

print("\n=== Classification Report ===")
print(classification_report(y_test, y_pred, target_names=le.classes_))

sample_input = [[90, 42, 43, 20.0, 80.0, 6.5, 200.0]]  # Sample values
predicted_class = rf.predict(sample_input)
predicted_crop = le.inverse_transform(predicted_class)

# Testing
y_pred_inverse = le.inverse_transform(y_pred)
y_test_inverse = le.inverse_transform(y_test)

df_true = pd.DataFrame(y_test_inverse, columns=['TrueValue'])
df_pred = pd.DataFrame(y_pred_inverse, columns=['PredictedValue'])
compared_df = pd.concat([df_true, df_pred], axis=1)

print("\n=== First 50 Predictions vs Actuals ===")
print(compared_df.head(50))

joblib.dump(rf,'crop_model.pkl')
joblib.dump(le,'label_encoder')

