import csv
from classes.person import Person

class Student:
    def __init__(self):
        container = []
        with open('./data/sstudent.csv','r') as infile:
            reader = csv.DictReader(infile)
            for row in reader:
                new_staff = Student(**row)
                container.append(cls(**row))
        return container