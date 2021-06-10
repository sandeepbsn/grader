from flask import Flask
from flask import request
import os
import csv
import json
from flask_cors import CORS
from pkgs.student_list import *
from pkgs.student_entry import *



app = Flask(__name__)
CORS(app)

@app.route('/addscores', methods=['GET'])
def get_class_details():
    grade = request.args.get('grade', type=str)
    section = request.args.get('section', type=str)
    exam = request.args.get('exam', type=str)

    return get_class(grade, section, exam)

@app.route('/addadmits', methods = ['GET', 'POST'])
def add_admits():
    if(request.method == 'GET'):
        return get_id()

    if(request.method == 'POST'):
        id = request.json['id']
        name = request.json['name']
        gender = request.json['gender']
        grade = request.json['grade']
        section = request.json['section']
        return create_student(id, name, gender, grade, section)


@app.route('/addscores/<id>', methods = ['GET', 'PATCH', 'DELETE'])
def enter_scores(id):
    if (request.method == 'GET'):
        grade = request.args.get('grade', type=str)
        exam = request.args.get('exam', type=str)

        return getStudentMarks(id, grade, exam)

    if (request.method == 'PATCH'):
        grade = request.args.get('grade', type=str)
        exam = request.args.get('exam', type=str)
        data = request.get_json()
        return editStudentMarks(id,grade,exam,data)

    if(request.method == 'DELETE'):
        grade = request.args.get('grade', type=str)
        return deleteStudenDetails(id,grade)







    

    





    