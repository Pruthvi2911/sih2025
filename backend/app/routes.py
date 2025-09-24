from flask import Blueprint, request, jsonify
# We NO LONGER need auth_service
from app.services import project_service 
from app.ml.model import predict_overrun
# We NO LONGER need flask_jwt_extended
# from flask_jwt_extended import jwt_required, get_jwt_identity

bp = Blueprint('api', __name__, url_prefix='/api')

# --- AUTHENTICATION ROUTES HAVE BEEN REMOVED ---
# The /auth/register and /auth/login routes are no longer needed.

# --- WELCOME ROUTE ---
@bp.route('/', methods=['GET'])
def index():
    return jsonify({
        'status': 'ok',
        'message': 'Welcome to the POWERGRID Project Prediction API!'
    })

# --- PROJECT ROUTES (Now Public) ---
@bp.route('/projects', methods=['GET'])
# @jwt_required() has been removed
def get_projects():
    return project_service.get_all_projects()

@bp.route('/projects', methods=['POST'])
# @jwt_required() has been removed
def create_project():
    data = request.get_json()
    return project_service.create_project(data)

@bp.route('/projects/<int:project_id>', methods=['GET'])
# @jwt_required() has been removed
def get_project(project_id):
    return project_service.get_project_by_id(project_id)

# --- AI FORECAST ROUTE (Now Public) ---
@bp.route('/forecast/predict', methods=['POST'])
# @jwt_required() has been removed
def predict():
    data = request.get_json()
    features = {
        'project_type': data.get('project_type'),
        'terrain': data.get('terrain'),
        'material_cost': data.get('material_cost'),
        'labor_cost': data.get('labor_cost'),
        'weather_impact': data.get('weather_impact')
    }
    prediction = predict_overrun(features)
    return jsonify(prediction)

# --- DASHBOARD ROUTE (Now Public) ---
@bp.route('/dashboard/stats', methods=['GET'])
# @jwt_required() has been removed
def get_dashboard_stats():
    stats = {
        'total_projects': 125,
        'ongoing_projects': 78,
        'completed_projects': 47,
        'budget_overrun': '12%'
    }
    return jsonify(stats)

# --- ANALYTICS ROUTE (Now Public) ---
@bp.route('/analytics/project_data', methods=['GET'])
# @jwt_required() has been removed
def get_project_analytics():
    data = {
        'labels': ['January', 'February', 'March', 'April', 'May', 'June'],
        'datasets': [
            { 'label': 'Cost Overrun %', 'data': [2, 3, 5, 4, 6, 8] },
            { 'label': 'Timeline Overrun %', 'data': [1, 2, 4, 3, 5, 7] },
        ],
    }
    return jsonify(data)