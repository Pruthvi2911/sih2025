import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline

# Dummy data for training a placeholder model
data = {
    'project_type': ['substation', 'overhead line', 'underground cable', 'substation'],
    'terrain': ['hilly', 'plains', 'coastal', 'hilly'],
    'material_cost': [100, 200, 150, 120],
    'labor_cost': [50, 80, 60, 55],
    'weather_impact': [0.2, 0.1, 0.3, 0.25],
    'cost_overrun': [0.1, 0.05, 0.15, 0.12],
    'timeline_overrun': [0.05, 0.02, 0.1, 0.08]
}
df = pd.DataFrame(data)

X = df[['project_type', 'terrain', 'material_cost', 'labor_cost', 'weather_impact']]
y_cost = df['cost_overrun']
y_timeline = df['timeline_overrun']

# Preprocessing for categorical features
categorical_features = ['project_type', 'terrain']
one_hot = OneHotEncoder()
transformer = ColumnTransformer([("one_hot",
                                  one_hot,
                                  categorical_features)],
                                 remainder="passthrough")

# Model pipelines
cost_model = Pipeline(steps=[('preprocessor', transformer),
                             ('regressor', RandomForestRegressor(n_estimators=100, random_state=42))])

timeline_model = Pipeline(steps=[('preprocessor', transformer),
                                ('regressor', RandomForestRegressor(n_estimators=100, random_state=42))])

# Train the models
cost_model.fit(X, y_cost)
timeline_model.fit(X, y_timeline)

def predict_overrun(features):
    """
    Predicts cost and timeline overrun based on project features.
    """
    input_df = pd.DataFrame([features])
    cost_prediction = cost_model.predict(input_df)[0]
    timeline_prediction = timeline_model.predict(input_df)[0]
    return {
        'predicted_cost_overrun': cost_prediction,
        'predicted_timeline_overrun': timeline_prediction
    }