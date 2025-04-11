from flask import Flask
from routes.SupervisedLearning import SupervisedLearning_bp
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app) 
    app.register_blueprint(SupervisedLearning_bp, url_prefix='/api/supervised_learning')


    @app.route('/')
    def hello_world():
        return '<p>Hello, World!<p>'
    
    return app
