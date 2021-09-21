from flaskcalculator import app
from flaskcalculator.models import Course
from flask import  request, jsonify, make_response
from flask import render_template


@app.route('/')
def hello():
    return render_template('base.html')


@app.route('/dropdown', methods=["POST"])
def dropdown():
    req = request.get_json() #the request data(location, level) sent from user using dropdown.js
    print(req, "AEGGgguvugiuygiygiygiuygiuyguyg")
    filteredCourses = Course.query.filter_by(location=req["location"], level=req["level"]).all() #returns list of courses that match location and level
    
    coursesList = [c.course_name for c in filteredCourses] #list comprehensoin to extract course name

    res = make_response( jsonify({"courseList":coursesList}) ) #make a reponse and send it back to the dropdown.js
    print(res)
    return res #return a json containing list of courses
    
@app.route('/faq')
def faqs():
    return render_template('faq.html')
