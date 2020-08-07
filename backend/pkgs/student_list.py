from flask import request
import os
import csv
import json
from operator import itemgetter

def get_class(grade, section, exam):
    os.chdir('data')
    class_details = []

    with open('students.csv', 'r') as students_read_handle:
        student_reader = csv.DictReader(students_read_handle)

        for student in student_reader:
            if(student['Grade'] == grade and student['Section'] == section):
                class_details.append(student)

    os.chdir('..')

    return json.dumps(class_details)

def getStudentMarks(id,grade,exam):
    primary = ['I', 'II', 'III', 'IV', 'V']
    secondary = ['VI','VII','VIII','IX','X']
    high = ['XI','XII']

    os.chdir('data')

    def getFile(name):
        file_content = []
        with open(name, 'r') as file_handle:
            file_reader = csv.DictReader(file_handle)

            for detail in file_reader:
                file_content.append(detail)

        return file_content


    students_list = getFile('students.csv')
    def grade_filter(obj):
        if(obj['Grade'] == grade):
            return True
        else:
            return False

    class_students = list(filter(grade_filter, students_list))
    name = None
    for students in class_students:
        if(students['ID'] == id):
            name = students['Name']
            break

    students_ids = list(map(itemgetter('ID'),class_students))

    exam_res = []
    if(exam == "Quarterly"):
        if(grade in primary):
            quart_content = getFile('quart-primary.csv')
            exam_res.extend(quart_content)
        elif(grade in high):
            quart_content = getFile('quart-high.csv')
            exam_res.extend(quart_content)
        else:
            quart_content = getFile('quart-secondary.csv')
            exam_res.extend(quart_content)
    
    elif(exam == "Half-yearly"):
        if(grade in primary):
            half_content = getFile('half-primary.csv')
            exam_res.extend(half_content)
        elif(grade in high):
            half_content = getFile('half-high.csv')
            exam_res.extend(half_content)
        else:
            half_content = getFile('half-secondary.csv')
            exam_res.extend(half_content)

    elif(exam == "Annual"):
        if(grade in primary):
            annual_content = getFile('annual-primary.csv')
            exam_res.extend(annual_content)
        elif(grade in high):
            annual_content = getFile('annual-high.csv')
            exam_res.extend(annual_content)
        else:
            annual_content = getFile('annual-secondary.csv')
            exam_res.extend(annual_content)

    os.chdir('..')
    def exam_res_filter(studobj):
        if(studobj['ID'] in students_ids):
            return True
        else:
            return False

    subjects = list(exam_res[0].keys())
    subjects.remove('ID')
    filtered_exam_res = list(filter(exam_res_filter, exam_res))
    class_total = []
    for student in filtered_exam_res:
        total = 0
        for key in student:
            if(key != 'ID'):
                total = total + int(student[key])

        temp_dict = {
            "ID":student['ID'],
            "total" :total
        }
        class_total.append(temp_dict)

    full_total = (len(list(filtered_exam_res[0].keys())) - 1) * 100
    class_rank = sorted(class_total, key = lambda i: i['total'], reverse = True)
    rank = 1
    for stud_rank in class_rank:
        if(stud_rank['ID'] == id):
            break
        rank = rank + 1

    
    def convert(obj):
        for keys in obj:
            obj[keys]:int(obj[keys])

        return obj

    filtered_type_conversion = list(map(convert, filtered_exam_res))
    

    final_result = []
    max_marks = {}
    for subject in subjects:
        newList = sorted(filtered_type_conversion, key = lambda i: int(i[subject]), reverse = True)
        max_marks[subject] = newList[0][subject]

    stud_details = {
        "name" : name,
        "rank" : rank,
        "full_total" : full_total,
    }   
    final_result.append(max_marks)
    for marks in exam_res:
        if(marks['ID'] == id):
            final_result.append(marks)
            final_result.append(stud_details)
            return json.dumps(final_result)
            

def editStudentMarks(id, grade, exam, data):
    primary = ['I', 'II', 'III', 'IV', 'V']
    secondary = ['VI','VII','VIII','IX','X']
    high = ['XI','XII']

    os.chdir('data')
    def readWrite(id,filename, new_marks):
        read_content = []
        with open(filename, 'r') as file_handle:
            file_reader = csv.DictReader(file_handle)

            for row in file_reader:
                read_content.append(row)

        for marks in read_content:
            if(marks['ID'] == id):
                for key in marks:
                    marks[key] = new_marks[key]
                break

        headers = read_content[0].keys()
        with open(filename, 'w') as file_write_handle:
            file_writer = csv.DictWriter(file_write_handle, fieldnames = headers)
            file_writer.writeheader()
            file_writer.writerows(read_content)

        os.chdir('..')
        return {"message":"Student details have been successfully modified"}

    if(exam == "Quarterly"):
        if(grade in primary):
            return readWrite(id, 'quart-primary.csv', data)
        elif(grade in high):
            return readWrite(id, 'quart-high.csv', data)            
        else:
            return readWrite(id, 'quart-secondary.csv', data)
    
    elif(exam == "Half-yearly"):
        if(grade in primary):
            return readWrite(id, 'half-primary.csv', data)
        elif(grade in high):
            return readWrite(id, 'half-high.csv', data)
        else:
            return readWrite(id, 'half-secondary.csv', data)

    elif(exam == "Annual"):
        if(grade in primary):
            return readWrite(id, 'annual-primary.csv', data)
        elif(grade in high):
            return readWrite(id, 'anuual-high.csv', data)
        else:
            return readWrite(id, 'annual-secondary.csv', data)

def deleteStudenDetails(id, grade):
    primary = ['I', 'II', 'III', 'IV', 'V']
    secondary = ['VI','VII','VIII','IX','X']
    high = ['XI','XII']

    os.chdir('data')
    def deleteEntity(id, filename):
        read_content = []
        with open(filename, 'r') as file_handle:
            file_reader = csv.DictReader(file_handle)

            for row in file_reader:
                read_content.append(row)

        index = 0

        for details in read_content:
            if(details['ID'] == id):
                read_content.pop(index)
                break
            index = index + 1

        headers = read_content[0].keys()

        with open(filename, 'w') as file_write_handle:
            file_writer = csv.DictWriter(file_write_handle, fieldnames = headers)
            file_writer.writeheader()
            file_writer.writerows(read_content)
        return 
    
    deleteEntity(id, 'students.csv')
     
    if(grade in primary):
        deleteEntity(id, 'quart-primary.csv')
        deleteEntity(id, 'half-primary.csv')
        deleteEntity(id, 'annual-primary.csv')
    elif(grade in secondary):
        deleteEntity(id, 'quart-secondary.csv')
        deleteEntity(id, 'half-secondary.csv')
        deleteEntity(id, 'annual-secondary.csv')

    elif(grade in high):
        deleteEntity(id, 'quart-high.csv')
        deleteEntity(id, 'half-high.csv')
        deleteEntity(id, 'annual-high.csv')
    os.chdir('..')
    return {"message":"Student record has been successfully removed"}




        
