# Flask calculator

UWA project of building flask app fee calculator

## Setting up



## Set up virtual envrionment

Prerequisites: Install python3 on the machine

1. Set up a virtual environment:
    + create a virtual environment  
      ```python3 -m venv venv```
    + start the virtual environment  
        + On *nix  
          ```source venv/bin/activate```
        + On windows  
          ```venv\Scripts\activate```
    + install all dependecies  
      ```pip install -r requirements.txt```

Activate the virtual enviroment:    venv\Scripts\activate (windows)
Activate the virtual enviroment:    . venv/bin/activate (mac)
install packages:                   pip install flask           pip install flask_sqlalchemy
run server:                         python run.py
open website:                       go to browser & connect to `http://127.0.0.1:5000/`

## Set up migration

flask db init  
flask db migrate  
flask db upgrade  

## Install requirements

pip install -r requirements.txt

## Run unit test

python3 -m unittest unit_test.py

## Run system test

To run
