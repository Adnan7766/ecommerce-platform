from flask import Blueprint
from routes.user_routes import user_bp
from routes.product_routes import product_bp

def register_routes(app):
    app.register_blueprint(user_bp)
    app.register_blueprint(product_bp)
