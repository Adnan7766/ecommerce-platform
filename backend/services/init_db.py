# services/init_db.py

from services.database import db

def init_db(app):
    """Initialize the database with the Flask app."""
    app.config['SQLALCHEMY_DATABASE_URI'] = app.config.get("SQLALCHEMY_DATABASE_URI")
    db.init_app(app)
    with app.app_context():
        db.create_all()
