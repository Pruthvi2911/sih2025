from app.models import Project
from app import db
from flask import jsonify
import datetime

def get_all_projects():
    projects = Project.query.all()
    return jsonify([
        {
            'id': project.id,
            'name': project.name,
            'project_type': project.project_type,
            'terrain': project.terrain,
            'material_cost': project.material_cost,
            'labor_cost': project.labor_cost,
            'start_date': project.start_date.isoformat(),
            'end_date': project.end_date.isoformat(),
        } for project in projects
    ])

def create_project(data):
    project = Project(
        name=data['name'],
        project_type=data['project_type'],
        terrain=data['terrain'],
        material_cost=data['material_cost'],
        labor_cost=data['labor_cost'],
        start_date=datetime.datetime.strptime(data['start_date'], '%Y-%m-%d').date(),
        end_date=datetime.datetime.strptime(data['end_date'], '%Y-%m-%d').date()
    )
    db.session.add(project)
    db.session.commit()
    return jsonify({'message': 'Project created successfully'}), 201

def get_project_by_id(project_id):
    project = Project.query.get(project_id)
    if project:
        return jsonify({
            'id': project.id,
            'name': project.name,
            'project_type': project.project_type,
            'terrain': project.terrain,
            'material_cost': project.material_cost,
            'labor_cost': project.labor_cost,
            'start_date': project.start_date.isoformat(),
            'end_date': project.end_date.isoformat(),
        })
    return jsonify({'message': 'Project not found'}), 404