from flask import request
import os
import csv
import json

primary = ['I', 'II', 'III', 'IV', 'V']
secondary = ['VI','VII','VIII','IX','X']
high = ['XI','XII']

def get_id():
    os.chdir('data')

    with open('students.csv', 'r') as file_handle:
        file_content = []
        file_reader = csv.DictReader(file_handle)
        for detail in file_reader:
            file_content.append(detail)

        id = int(file_content[len(file_content) - 1]['ID'])
    os.chdir('..')
    return str(id + 1)

def create_student(id, name, gender, grade, section):
    append_data = {
        "ID":id,
        "Name":name,
        "Gender":gender,
        "Grade":grade,
        "Section":section,
    }
    primary_append = {
        "ID":id,
        "Eng":"NA",
        "RL":"NA",
        "Math":"NA",
        "Science":"NA",
        "Social":"NA"
    }
    primary_headers = primary_append.keys()
    secondary_append = {
        "ID":id,
        "Eng":"NA",
        "RL":"NA",
        "Math":"NA",
        "Physics":"NA",
        "Chemistry":"NA",
        "Biology":"NA",
        "Computer":"NA",
        "History":"NA",
        "Geography":"NA"
    }
    secondary_headers = secondary_append.keys()

    high_append = {
        "ID":id,
        "Eng":"NA",
        "RL":"NA",
        "Math":"NA",
        "Physics":"NA",
        "Chemistry":"NA",
        "Core":"NA"
    }

    high_headers = high_append.keys()    

    headers = append_data.keys()
    os.chdir('data')

    with open('students.csv', 'a') as students_handle:
        students_writer = csv.DictWriter(students_handle, fieldnames = headers)
        students_writer.writerow(append_data)

    if(grade in primary):
        with open('quart-primary.csv', 'a') as quart_handle:            
            quart_writer = csv.DictWriter(quart_handle, fieldnames = primary_headers)
            quart_writer.writerow(primary_append)

        with open('half-primary.csv', 'a') as half_handle:            
            half_writer = csv.DictWriter(half_handle, fieldnames = primary_headers)
            half_writer.writerow(primary_append)

        with open('annual-primary.csv', 'a') as annual_handle:            
            annual_writer = csv.DictWriter(annual_handle, fieldnames = primary_headers)
            annual_writer.writerow(primary_append)

    elif(grade in secondary):
        with open('quart-secondary.csv', 'a') as quart_handle:            
            quart_writer = csv.DictWriter(quart_handle, fieldnames = secondary_headers)
            quart_writer.writerow(secondary_append)

        with open('half-secondary.csv', 'a') as half_handle:            
            half_writer = csv.DictWriter(half_handle, fieldnames = secondary_headers)
            half_writer.writerow(secondary_append)

        with open('annual-secondary.csv', 'a') as annual_handle:            
            annual_writer = csv.DictWriter(annual_handle, fieldnames = secondary_headers)
            annual_writer.writerow(secondary_append)

    elif(grade in high):
        with open('quart-high.csv', 'a') as quart_handle:            
            quart_writer = csv.DictWriter(quart_handle, fieldnames = high_headers)
            quart_writer.writerow(high_append)
        with open('half-high.csv', 'a') as half_handle:            
            half_writer = csv.DictWriter(half_handle, fieldnames = high_headers)
            half_writer.writerow(high_append)
        with open('annual-high.csv', 'a') as annual_handle:            
            annual_writer = csv.DictWriter(annual_handle, fieldnames = high_headers)
            annual_writer.writerow(high_append)

    os.chdir('..')

    return {
        "status":"success",
        "message":"Details of student successfully added"
    }

