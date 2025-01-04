import os

DEBUG = True
SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL", "sqlite:///ecommerce.db")
SQLALCHEMY_TRACK_MODIFICATIONS = False
SECRET_KEY = os.getenv("SECRET_KEY", "your-secret-key")
