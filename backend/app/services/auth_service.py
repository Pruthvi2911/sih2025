from app.models import User
from app import db
from flask import jsonify
from flask_jwt_extended import create_access_token

def register_user(data):
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if User.query.filter_by(username=username).first():
        return jsonify({'message': 'Username already exists'}), 400
    if User.query.filter_by(email=email).first():
        return jsonify({'message': 'Email already exists'}), 400

    user = User(username=username, email=email)
    user.set_password(password)
    db.session.add(user)
    db.session.commit()

    return jsonify({'message': 'User registered successfully'}), 201

def login_user(data):
    username = data.get('username')
    password = data.get('password')

    user = User.query.filter_by(username=username).first()

    if user is None or not user.check_password(password):
        return jsonify({'message': 'Invalid username or password'}), 401

    access_token = create_access_token(identity=user.id)
    return jsonify(access_token=access_token)