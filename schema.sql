CREATE TABLE Units (
    unit_code TEXT PRIMARY KEY,
    unit_name TEXT NOT NULL,
    credit_points INTEGER NOT NULL,
    unit_fee REAL NOT NULL,
);

CREATE TABLE UnitsJoinCourses (
    CONSTRAINT fk_unit_code
        FOREIGN KEY (unit_code)
        REFERENCES Units(unit_code)
    course_code TEXT NOT NULL,
    unit_type TEXT NOT NULL,
);

CREATE TABLE Courses (
    course_code TEXT PRIMARY KEY,
    course_name TEXT NOT NULL,
    study_level TEXT NOT NULL,
    onshore_offshore TEXT NOT NULL,
    credit_points INTEGER NOT NULL,
    select_major INTEGER NOT NULL,
    course_fee REAL NOT NULL,
);