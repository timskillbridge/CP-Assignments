from django.db import models
from .validator import validate_name_format, validate_school_email, validate_combination_format

# Create your models here.
class Student(models.Model):
    name = models.CharField(max_length=255, null = False, blank = False, validators=[validate_name_format])
    student_email = models.EmailField(null = False, blank = False, unique=True, validators = [validate_school_email])
    personal_email = models.EmailField(null = False, blank = False, unique=True)
    locker_number = models.IntegerField(default = 110, null = False, blank = False, unique=True)
    locker_combination = models.CharField( default="12-12-12",null = False, blank = False,max_length=255, validators = [validate_combination_format])
    good_student = models.BooleanField(default=True)


    