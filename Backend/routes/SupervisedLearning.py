import os
import sys
sys.path.append(os.path.abspath('ml_models'))
from flask import Blueprint, request, jsonify
from SupervisedLearning import LinearRegression
import torch
SupervisedLearning_bp = Blueprint('SupervisedLearning', __name__)

@SupervisedLearning_bp.route('/')
def index():
    return jsonify({
        "message": "Welcome to the Supervised Learning API!"
    })

@SupervisedLearning_bp.route('/lin_reg/step', methods=['GET'])
def linear_regression_step():
    weights = request.args.getlist('weights')
    weights = torch.tensor(list(map(float, weights)), dtype=torch.float32)
    bias = request.args.getlist('bias')
    bias = torch.tensor(list(map(float, bias)), dtype=torch.float32)
    x = request.args.getlist('x')
    x = torch.tensor(list(map(float, x)), dtype=torch.float32).view(-1, len(weights))
    y = request.args.getlist('y')
    y = torch.tensor(list(map(float, y)), dtype=torch.float32).view(-1, 1)
    print(f"weights: {weights}, bias: {bias}, x: {x}, y: {y}")
    new_weights, new_bias, loss = LinearRegression.optim_step(weights, bias, x, y)
    return jsonify({
        "new_weights": new_weights.tolist(),
        "new_bias": new_bias.tolist(),
        "loss": loss.tolist()
    })


@SupervisedLearning_bp.route('lin_reg/complete', methods=['GET'])
def linear_regression_complete():
    return jsonify({
        "message": "This is the linear regression complete endpoint."
    })