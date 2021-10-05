import sqlite3


def viewCourses():
    con = sqlite3.connect('site.db')
    cur = con.cursor()

    cur.execute("SELECT * FROM Course")
    view = cur.fetchall()
    
    print("COURSES!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    for v in view:
        print(v)

def viewUnits():
    con = sqlite3.connect('site.db')
    cur = con.cursor()

    cur.execute("SELECT * FROM Unit")
    view = cur.fetchall()
    
    print("UNITS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    for v in view:
        print(v)

viewCourses()
viewUnits()

#To view data and update database I recommend using https://sqlitebrowser.org/