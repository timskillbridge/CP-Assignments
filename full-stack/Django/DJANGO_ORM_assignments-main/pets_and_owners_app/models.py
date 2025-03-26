from django.db import models

# Create your models here.
class Owner(models.Model):
    name = models.CharField(max_length=255)
    age = models.IntegerField()
    number_of_pets = models.IntegerField()

class Cat(models.Model):
    breed = models.CharField(max_length=255)
    age = models.PositiveIntegerField()
    vaccinated = models.BooleanField(default = False)
    description = models.TextField()
    name = models.CharField(max_length=255)

class Bird(models.Model):
    name = models.CharField(max_length=255)
    age = models.PositiveBigIntegerField()
    vaccinated = models.BooleanField(default = False)
    description = models.TextField()
    spiecies = models.CharField(max_length=255)

class Dog(models.Model):
    age = models.PositiveBigIntegerField()
    name = models.CharField(max_length=255)
    vaccinated = models.BooleanField(default = False)
    breed = models.CharField(max_length=255)
    description = models.TextField()
    
class Exotic_Animal(models.Model):
    region_of_origin = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    age = models.PositiveBigIntegerField()
    type_of_animal = models.CharField(max_length=255)
    vaccinated = models.BooleanField(default = False)