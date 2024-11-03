from flask import Flask

def create_app():
    app = Flask(__name__)

    # Register blueprints or import routes
    with app.app_context():
        from .routes import main
        app.register_blueprint(main)

    return app