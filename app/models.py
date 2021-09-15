from app import db
from datetime import datetime


### NEW SCHEMA

unit_course = db.Table('unit_course',
    db.Column('unit_code', db.Integer, db.ForeignKey('unit.unit_code')),
    db.Column('course_code', db.Integer, db.ForeignKey('course.course_code'))
    )

# Unit fee model for domestic student
class Unit(db.Model):
    __tablename__ = "unit"

    # Unit code is PK
    unit_code = db.Column(db.String(64), primary_key=True)

    unit_name = db.Column(db.String(64))

    unit_fee = db.Column(db.Integer, index=True)

    def __repr__(self):
        return '<unit code: {}>'.format(self.unit_code)

# Course name model stored the course code and associated coursename
class Course(db.Model):
    __tablename__ = "course"

    # combination id - PK
    id = db.Column(db.Integer, primary_key=True)
    
    # Course code is PK
    course_code = db.Column(db.String(64), primary_key=True)

    # Course name
    course_name = db.Column(db.String(64), index=True)

    # Course fee
    course_fee = db.Column(db.Integer, index=True)

    # Level of study - UG, PG, HDR
    level = db.Column(db.String(64))

    # location - domestic or international
    location = db.Column(db.String(64))

    # Start year of study
    year = db.Column(db.Integer, index=True)

    def __repr__(self):
        return '<course code: {}>'.format(self.course_code)

    def list_course(self, level, location):
        return Course.query.filter(level=level).filter(location=location)



# # Course fee used for both domestic and internation
# class CourseFee(db.Model):
#     __tablename__ = "course_fee"

#     # Course code is FK
#     code = db.Column(db.String(64), db.ForeignKey('course_name.course_code'))

#     fee = db.Column(db.Integer, index=True)

#     def __repr__(self):
#         return '<course code: {}>'.format(self.course_code)

# class StudentType(db.Model):
#     __tablename__ = "student_type"
    
#     # Level of study - UG, PG, HDR
#     level = db.Column(db.String(64), primary_key=True)

#     # location - domestic or international
#     location = db.Column(db.String(64), primary_key=True)

#     def __repr__(self):
#         return '<student type: {} - {}>'.format(self.level, self.location)

# class Dropdowns(db.Model):
#     __tablename__ = "dropdowns"

#     # combination id - PK
#     id = db.Column(db.Integer, primary_key=True)
    
#     level = db.Column(db.String(64), db.ForeignKey('student_type.level'))

#     location =  db.Column(db.String(64), db.ForeignKey('student_type.location'))

#     course_name =  db.Column(db.String(64), db.ForeignKey('course.course_name'))

#     # Year of study
#     years = db.Column(db.Integer, index=True)

#     def __repr__(self):
#         return '<id: {} - level: {} - location: {} - course_code: {} - years: {}>'.format(self.id, self.level, self.location, self.course_code, self.years)

    # Return course name based on level and location




### OLD SCHEMA

# # Cluster Fee model
# class ClusterFee(db.Model):

#     __tablename__ = 'cluster_fee'

#     # Year
#     year = db.Column(db.String(64), primary_key=True)

#     # Cluster
#     cluster = db.Column(db.Integer, primary_key = True)

#     # Fee
#     fee = db.Column(db.Integer, index=True)

#     def __repr__(self):
#         return '<Cluster id: {}>'.format(self.id)

# # Unit database model
# class Unit(db.Model):

#     # unit id
#     id = db.Column(db.Integer, primary_key=True)

#     # unit code 
#     unit_cd = db.Column(db.String(64), index=True,
#     unique=True)

#     # unit name
#     title = db.Column(db.String(128), index=True, unique=True)

#     # version??
#     version = db.Column(db.Integer)

#     # Unit points
#     points = db.Column(db.Integer)

#     # FOE
#     foe = db.Column(db.Integer)

#     # Domestic Cluster
#     dom_cl = db.Column(db.Integer, db.ForeignKey('cluster_fee.cluster'))

#     # Non Award Cluster
#     no_award_cl = db.Column(db.Integer,db.ForeignKey('cluster_fee.cluster'))

#     # Inter On Shore Cluster
#     inter_cl = db.Column(db.Integer,db.ForeignKey('cluster_fee.cluster'))

#     # New census date
#     census_date = db.Column(db.Date)

#     def __repr__(self):
#         return '<Unit id: {}>'.format(self.id)

# # Course Fee Types Model
# class CourseFeeTypes(db.Model):
    
#     # course code
#     course_code = db.Column(db.Integer, index=True, primary_key=True)

#     # fee type code
#     fee_type_code = db.Column(db.Integer, index=True, primary_key=True)

#     def __repr__(self):
#         return '<Course fee types id: {}>'.format(self.id)


# # Course Fee Model
# class CourseFees(db.Model):

#     # fee type code
#     fee_type_code = db.Column(db.Integer, primary_key=True)

#     # course code
#     course_code = db.Column(db.Integer, primary_key=True)

#     # year
#     year = db.Column(db.Integer)

#     # fee
#     fee = db.Column(db.Integer)


# # Course Model
# class Courses(db.Model):
    
#     # course code
#     course_code = db.Column(db.Integer, index=True, primary_key=True)

#     course_name = db.Column(db.String(128), unique=True)

#     version = db.Column(db.Integer)

#     # credit point
#     credit = db.Column(db.Integer)

#     # required credit point
#     req_credit = db.Column(db.Integer)

#     # course type code
#     ctc = db.Column(db.Integer)

#     # broad course type code
#     broad_ctc = db.Column(db.String(32))

# # Study Abroad Fees Model
# class StudyAbroadFees(db.Model):

#     id = db.Column(db.Integer, primary_key=True)

#     # fee type code
#     fee_type_code = db.Column(db.Integer, index=True)

#     # course code
#     course_code = db.Column(db.Integer, index=True)

#     # course name
#     course_name = db.Column(db.String(128))

#     # year
#     year = db.Column(db.Integer)

#     fee = db.Column(db.Integer)