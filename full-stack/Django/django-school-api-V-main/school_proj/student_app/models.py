from django.db import models
from django.core import validators as v
from .validators import (
    validate_combination_format,
    validate_name_format,
    validate_school_email,
)


# Create your models here.
class Student(models.Model):
    name = models.CharField(
        max_length=255, null=False, blank=False, validators=[validate_name_format]
    )
    student_email = models.EmailField(
        null=False, blank=False, unique=True, validators=[validate_school_email]
    )
    personal_email = models.EmailField(null=False, blank=False, unique=True)
    locker_number = models.IntegerField(
        default=110,
        null=False,
        blank=False,
        unique=True,
        validators=[v.MinValueValidator(1), v.MaxValueValidator(200)],
    )
    locker_combination = models.CharField(
        default="12-12-12",
        null=False,
        blank=False,
        max_length=255,
        validators=[validate_combination_format],
    )
    good_student = models.BooleanField(default=True)

    subject = models.ManyToManyField('Subject',related_name = 'student')

    def add_subject(self,subject_id):
        subject_length = self.subjects.count()
        if subject_length <8:
            self.subjects.add(subject_id)
        else:
            raise Exception("Class schedule is full, remove a subject before adding one")
        
    def remove_subject(self,subject_id):
        subject_length = self.subjects.count()
        if subject_length >0:
            self.sujects.remove(subject_id)
        else:
            raise Exception("Class schedule is empty, add a subject")
        
    


