import torch
import torch.nn as nn
import torch.optim as optim

# This function performs a single optimization step for a linear regression model using PyTorch.
def optim_step(weights, bias, x, y):
    model = nn.Linear(x.shape[1], 1)
    
    
    with torch.no_grad():
        model.weight.copy_(weights)
        model.bias.copy_(bias)
    criterion = nn.MSELoss()
    optimizer = optim.SGD(model.parameters(), lr=0.001)
    optimizer.zero_grad()
    outputs = model(x)
    loss = criterion(outputs, y)
    loss.backward()
    optimizer.step()
    with torch.no_grad():
        return model.weight, model.bias, loss

def complete_regression(weights, bias, x, y):
    model = nn.Linear(1, 1)
    with torch.no_grad():
        model.weight.fill(weights)
        model.bias.fill(bias)
    criterion = nn.MSELoss()
    optimizer = optim.SGD(model.parameters(), lr=0.01)
    
    for epoch in range(1000):
        optimizer.zero_grad()
        outputs = model(x)
        loss = criterion(outputs, y)
        loss.backward()
        optimizer.step()

    with torch.no_grad():
        return model.weight, model.bias, loss
