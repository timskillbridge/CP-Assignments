
from rest_framework import serializers
from .models import Student

# excludes= id instead of doing using fields = [everything but id]

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model:Student
        fields = [
            'name',
            'student_email',
            'personal_email'
        ]

class StudentAllSerializer(serializers.ModelSerializer):
    class Meta:
        model: Student
        exclude='id'
        