from sqlalchemy.sql.expression import desc
from app import app, db
from flask import Flask, render_template, flash, redirect, url_for, request
#from app.forms import Form
#from app.models import User
from datetime import datetime
from sqlalchemy.exc import IntegrityError
from sqlalchemy import func



from app import app
from flask import Flask, render_template, url_for


@app.route('/')
def home():
    return render_template("home-page.html")


@app.route('/faq')
def faq():
    return render_template("faq.html")
