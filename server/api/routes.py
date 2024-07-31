from flask import Blueprint, jsonify, request
from .models import db, Task

api = Blueprint("api", __name__)

@api.route('/tasks', methods=['GET'])
def get_tasks():
    tasks = Task.query.all()
    return jsonify([task.to_dict() for task in tasks])

@api.route('/tasks/create', methods=['POST'])
def create_task():
    data = request.get_json()
    new_task = Task(
        taskName=data.get('taskName'),
        status=data.get('status'),
        date=data.get('date')
    )
    db.session.add(new_task)
    db.session.commit()
    return jsonify(new_task.to_dict()), 201

@api.route('/tasks/<id>/edit', methods=['PATCH'])
def edit_task(id):
    task = Task.query.get(id)
    data = request.get_json()
    task.taskName = data.get('taskName')
    task.status = data.get('status')
    task.date = data.get('date')
    db.session.commit()
    return jsonify(task.to_dict()), 200

@api.route('/tasks/<id>/delete', methods=['DELETE'])
def delete_task(id):
    task = Task.query.get(id)
    db.session.delete(task)
    db.session.commit()
    return jsonify(task.to_dict()), 200