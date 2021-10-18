from flaskcalculator import db

MajorsJoinCourses = db.Table("MajorsJoinCourses",
                            db.Column("major_id", db.Integer, db.ForeignKey("major.id")),
                            db.Column("course_id", db.Integer, db.ForeignKey("course.id")))

class Unit(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    unit_code = db.Column(db.String(20), nullable=False, unique=True)
    unit_name = db.Column(db.String(30), nullable=False)
    credit_points = db.Column(db.Integer, nullable=False)
    eftsl = db.Column(db.Float, nullable=False)
    availability = db.Column(db.String(10), nullable=False)
    unit_fee = db.Column(db.Integer, nullable=False)

    unitjoincourses = db.relationship("UnitsJoinCourses")
    unitjoinmajors = db.relationship("UnitsJoinMajors")


class Major(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    major_code = db.Column(db.String(20), nullable=False, unique=True)
    major_name = db.Column(db.String(30), nullable=False)

    childrenUnits = db.relationship("UnitsJoinMajors")

class Course(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    course_code = db.Column(db.String(20), nullable=False)
    course_name = db.Column(db.String(30), nullable=False)
    level = db.Column(db.String(10), nullable=False)
    type = db.Column(db.String(20), nullable=False)
    year = db.Column(db.Integer, nullable=False)
    duration = db.Column(db.Float, nullable=False)
    credit_points = db.Column(db.Integer, nullable=False)
    course_fee = db.Column(db.Integer, nullable=False)
    COLNew = db.Column(db.Float, nullable=False)

    childrenUnits = db.relationship("UnitsJoinCourses")
    childrenMajors = db.relationship("Major", secondary=MajorsJoinCourses)

    def as_dict(self):
        dict = {"id":self.id, "course_code":self.course_code, "course_name":self.course_name, 
           "level":self.level, "type":self.type, "year":self.year, "credit_points":self.credit_points, "course_fee":self.course_fee} 
        return dict

class UnitsJoinCourses(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    unit_id = db.Column(db.Integer, db.ForeignKey("unit.id"))
    course_id = db.Column(db.Integer, db.ForeignKey("course.id"))
    unit_types = db.Column(db.String(30), nullable=False)


class UnitsJoinMajors(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    unit_id = db.Column(db.Integer, db.ForeignKey("unit.id"))
    major_id = db.Column(db.Integer, db.ForeignKey("major.id"))
    unit_types = db.Column(db.String(30), nullable=False)