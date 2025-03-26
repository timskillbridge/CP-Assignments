
from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask('app')
app.config['SQLALCHEMY_DATABASE_URI'] ='postgresql+psycopg://wtadam2:]@localhost/students'
db = SQLAlchemy(app)

# students = [
#     {'id': '1', 'first_name': 'John', 'last_name': 'Doe', 'age': 18, 'grade': 'A'},
#     {'id': '2', 'first_name': 'Jane', 'last_name': 'Smith', 'age': 19, 'grade': 'B'},
#     {'id': '3', 'first_name': 'Bob', 'last_name': 'Johnson', 'age': 20, 'grade': 'C'},
#     {'id': '4', 'first_name': 'Emily', 'last_name': 'Williams', 'age': 18, 'grade': 'A'},
#     {'id': '5', 'first_name': 'Michael', 'last_name': 'Brown', 'age': 19, 'grade': 'B'},
#     {'id': '6', 'first_name': 'Samantha', 'last_name': 'Davis', 'age': 22, 'grade': 'A'},
#     {'id': '7', 'first_name': 'Oliver', 'last_name': 'Jones', 'age': 20, 'grade': 'B'},
#     {'id': '8', 'first_name': 'Sophia', 'last_name': 'Miller', 'age': 21, 'grade': 'A'},
#     {'id': '9', 'first_name': 'Ethan', 'last_name': 'Wilson', 'age': 19, 'grade': 'C'},
#     {'id': '10', 'first_name': 'Isabella', 'last_name': 'Moore', 'age': 22, 'grade': 'B'}

# ]

class Students(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(20))
    last_name = db.Column(db.String(20))
    age = db.Column(db.Integer)
    grade = db.Column(db.String(2))

@app.route('/old_students', methods = ['GET'])
def get_old_students():
    studs_from_db = Students.query.all()
    students = []
    for stud in studs_from_db:
        if int(stud.age) >20:
            students.append(
                {
                    "id": stud.id,
                    "first_name": stud.first_name,
                    "last_name": stud.last_name,
                    "age": stud.age,
                    "grade": stud.grade,
                }
               )
    return students

@app.route('/young_students', methods = ['GET'])
def get_young_students():
    studs_from_db = Students.query.all()
    students = []
    for stud in studs_from_db:
        if int(stud.age) < 21:
            students.append(
                {
                    "id": stud.id,
                    "first_name": stud.first_name,
                    "last_name": stud.last_name,
                    "age": stud.age,
                    "grade": stud.grade,
                }
               )
    return students

@app.route('/student_names', methods = ['GET'])
def get_student_names():
    studs_from_db = Students.query.all()
    students = []
    for stud in studs_from_db:
        if int(stud.age) < 21:
            students.append(
                {
                    
                    "first_name": stud.first_name,
                    "last_name": stud.last_name,
                    
                }
               )
    return students

@app.route('/student_ages', methods = ['GET'])
def get_student_ages():
    studs_from_db = Students.query.all()
    students = []
    for stud in studs_from_db:
        if int(stud.age) < 21:
            students.append(
                {

                    "first_name": stud.first_name,
                    "last_name": stud.last_name,
                    "age": stud.age,

                }
               )
    return students

@app.route('/advance_students', methods = ['GET'])
def get_advance_students():
    studs_from_db = Students.query.all()
    students = []
    for stud in studs_from_db:
        if int(stud.age) <21 and stud.grade == 'A':
            students.append(
                {
                    "id": stud.id,
                    "first_name": stud.first_name,
                    "last_name": stud.last_name,
                    "age": stud.age,
                    "grade": stud.grade,
                }
               )
    return students


@app.route("/",methods = ['GET'])
def home():
    return("This is the future home of something more")

app.run(debug=True, port=8000)


