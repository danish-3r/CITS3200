from app import db
from datetime import datetime

# Cluster Fee model
class ClusterFee(db.Model):

    # cluster id
    id = db.Column(db.Integer, primary_key=True)

    # Year
    year = db.Column(db.String(64), index=True)

    # Cluster
    cluster = db.Column(db.Integer, index=True)

    # Fee
    fee = db.Column(db.Integer, index=True)

    def __repr__(self):
        return '<Cluster id: {}>'.format(self.id)

# Unit database model
class Unit(db.Model):

    # unit id
    id = db.Column(db.Integer, primary_key=True)

    # unit code 
    unit_cd = db.Column(db.String(64), index=True,
    unique=True)

    # unit name
    title = db.Column(db.String(128), index=True, unique=True)

    # version??
    version = db.Column(db.Integer)

    # Unit points
    points = db.Column(db.Integer)

    # FOE
    foe = db.Column(db.Integer)

    # # Domestic Cluster
    # dom_cl = db.Column(db.Integer, db.ForeignKey('clusterfee.id'))

    # # Non Award Cluster
    # no_award_cl = db.Column(db.Integer,db.ForeignKey('clusterfee.id'))

    # # Inter On Shore Cluster
    # inter_cl = db.Column(db.Integer,db.ForeignKey('clusterfee.id'))

    # New census date
    census_date = db.Column(db.Date)

    def __repr__(self):
        return '<Unit id: {}>'.format(self.id)

# Course Fee Types Model
class CourseFeeTypes(db.Model):
    
    # course code
    course_code = db.Column(db.Integer, index=True, primary_key=True)

    # fee type code
    fee_type_code = db.Column(db.Integer, index=True, primary_key=True)

    def __repr__(self):
        return '<Course fee types id: {}>'.format(self.id)


# Course Fee Model
class CourseFees(db.Model):

    # fee type code
    fee_type_code = db.Column(db.Integer, primary_key=True)

    # course code
    course_code = db.Column(db.Integer, primary_key=True)

    # year
    year = db.Column(db.Integer)

    # fee
    fee = db.Column(db.Integer)


# Course Model
class Courses(db.Model):
    
    # course code
    course_code = db.Column(db.Integer, index=True, primary_key=True)

    course_name = db.Column(db.String(128), unique=True)

    version = db.Column(db.Integer)

    # credit point
    credit = db.Column(db.Integer)

    # required credit point
    req_credit = db.Column(db.Integer)

    # course type code
    ctc = db.Column(db.Integer)

    # broad course type code
    broad_ctc = db.Column(db.String(32))

# Study Abroad Fees Model
class StudyAbroadFees(db.Model):

    id = db.Column(db.Integer, primary_key=True)

    # fee type code
    fee_type_code = db.Column(db.Integer, index=True)

    # course code
    course_code = db.Column(db.Integer, index=True)

    # course name
    course_name = db.Column(db.String(128))

    # year
    year = db.Column(db.Integer)

    fee = db.Column(db.Integer)