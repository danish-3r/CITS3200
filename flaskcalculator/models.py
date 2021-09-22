from flaskcalculator import db

class Course(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    course_code = db.Column(db.String(20), nullable=False)
    course_name = db.Column(db.String(30), nullable=False)
    level = db.Column(db.String(10), nullable=False)
    location = db.Column(db.String(20), nullable=False)
    credit_points = db.Column(db.Integer, nullable=False)
    select_major = db.Column(db.Boolean, nullable=False)
    course_fee = db.Column(db.Integer, nullable=False)

    def serialize(self):
        return { "id":self.id, "course_code":self.course_code, "course_name":self.course_name, 
                 "level":self.level, "location":self.location, "credit_points":self.credit_points,
                 "select_major":self.select_major, "course_fee":self.course_fee }

class Unit(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    unit_code = db.Column(db.String(20), nullable=False)
    unit_name = db.Column(db.String(30), nullable=False)
    credit_points = db.Column(db.Integer, nullable=False)
    credit_points = db.Column(db.Integer, nullable=False)
    eftsl = db.Column(db.Float, nullable=False)
    unit_fee = db.Column(db.Integer, nullable=False)

class UnitsJoinCourses(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    unit_code = db.Column(db.String(20), nullable=False)
    course_code = db.Column(db.String(20), nullable=False)
    unit_types = db.Column(db.String(30), nullable=False)

class UnitsJoinMajors(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    unit_code = db.Column(db.String(20), nullable=False)
    major_code = db.Column(db.String(20), nullable=False)
    unit_type = db.Column(db.String(30), nullable=False)

class MajorsJoinCourses(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    major_code = db.Column(db.String(20), nullable=False)
    course_code = db.Column(db.String(20), nullable=False)