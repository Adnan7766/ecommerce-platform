from flask_sqlalchemy import SQLAlchemy
 
# Initialize the db object
db = SQLAlchemy()

class Product(db.Model):
    __tablename__ = 'product'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    price = db.Column(db.Float, nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "price": self.price
        }

def init_db(app):
    """Initialize the database with the Flask app."""
    app.config['SQLALCHEMY_DATABASE_URI'] = app.config.get("SQLALCHEMY_DATABASE_URI")
    db.init_app(app)
    with app.app_context():
        db.create_all()
from flask_sqlalchemy import SQLAlchemy

# Initialize the db object
db = SQLAlchemy()

class Product(db.Model):
    __tablename__ = 'product'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    price = db.Column(db.Float, nullable=False)

    def __init__(self, name, description, price):
        self.name = name
        self.description = description
        self.price = price

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "price": self.price
        }

    def __repr__(self):
        return f"Product('{self.name}', '{self.description}', '{self.price}')"

def init_db(app):
    """Initialize the database with the Flask app."""
    app.config['SQLALCHEMY_DATABASE_URI'] = app.config.get("SQLALCHEMY_DATABASE_URI")
    db.init_app(app)
    with app.app_context():
        db.create_all() 