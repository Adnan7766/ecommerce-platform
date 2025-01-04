from flask import Blueprint, request, jsonify
from models.user import User
from services.database import db

user_bp = Blueprint("user_bp", __name__, url_prefix="/api/users")

@user_bp.route("/", methods=["GET"])
def get_users():
    users = User.query.all()
    return jsonify([user.to_dict() for user in users])

@user_bp.route("/", methods=["POST"])
def add_user():
    data = request.json
    user = User(name=data["name"], email=data["email"])
    db.session.add(user)
    db.session.commit()
    return jsonify(user.to_dict()), 201
