from django.db import models

# Create your models here.
class Student(models.Model):
    name = models.CharField(max_length=255, null = False, blank = False)
    student_email = models.EmailField(unique=True, null = False, blank = False)
    personal_email = models.EmailField(unique=True, null = False, blank = False)
    locker_number = models.IntegerField(unique=True, default=110, null = False, blank = False)
    locker_combination = models.CharField(max_length=255, default='12-12-12', null = False, blank = False)
    good_student = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.name} - {self.student_email} - {self.locker_number}"
    
    def locker_reassignment(self,new_locker:int):
        self.locker_number = new_locker
    
    def stduent_status(self,good_bad:bool):
        self.good_student = good_bad



class Teach(models.Model):
    name = models.CharField(max_length=255)
    teacher_email = models.EmailField(unique=True)
    personal_email = models.EmailField(unique=True)
    office_number = models.BigIntegerField(unique=True, default=1)
    office_key = models.CharField(max_length=11, default='123-234-354')
    about_to_be_fired = models.BooleanField(default = False)