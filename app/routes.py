from sqlalchemy.sql.expression import desc
from app import app, db
from flask import Flask, render_template, flash, redirect, url_for, request
#from app.forms import Form
#from app.models import User
from datetime import datetime
from sqlalchemy.exc import IntegrityError
from sqlalchemy import func



from app import app
from flask import Flask, render_template

@app.route('/')
def hello_world():
    return 'Hello world!'

    
@app.route('/home')
def home():
    return render_template("home.html")