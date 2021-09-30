from flaskcalculator import app
from flaskcalculator.models import Unit, Major, Course, UnitsJoinCourses, MajorsJoinCourses, UnitsJoinMajors
from flask import  request, make_response
from flask import render_template

@app.route('/')
def hello():
    
    return render_template('base.html')


@app.route('/dropdown', methods=["POST"])
def dropdown():
    req = request.get_json() #the request data(location, level) sent from user using dropdown.js

    filteredCourses = Course.query.filter_by(type=req["type"], level=req["level"], year=req["year"]).all() #returns list of courses that match location and level

    coursesList = [c.as_dict() for c in filteredCourses] #list comprehensoin to extract course name

    res = make_response( {"courseList":coursesList} ) #make a reponse and send it back to the dropdown.js
    
    return res #return a json containing list of courses

@app.route('/feeresults', methods=["POST"])
def feeresults():
    req = request.get_json() #the request data(location, level) sent from user using dropdown.js
    courseid = int(req["courseid"])
    course = Course.query.get(courseid)
    
    res = make_response( {"course_name":course.course_name, "course_year":course.year, "duration":course.duration, "course_fee":course.course_fee} )
    
    return res
