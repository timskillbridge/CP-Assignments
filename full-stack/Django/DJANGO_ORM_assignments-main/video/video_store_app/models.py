from django.db import models

# Create your models here.
class Client (models.Model):
    account_type = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    active = models.BooleanField(default=False)

class Video(models.Model):
    title = models.CharField(max_length=255)
    in_stock = models.BooleanField(default=False)
    rating = models.CharField(max_length=4)

class Address(models.Model):
    street = models.CharField(max_length=255)
    zipcode = models.IntegerField(max_length=11)
    state = models.CharField(max_length=2)
    appt_num = models.IntegerField()

class Store(models.Model):
    name = models.CharField(max_length=255)
    number_of_employees = models.IntegerField()
    rating = models.FloatField()
    owner = models.IntegerField()

class Person(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    middle_init = models.CharField(max_length=1)
    age = models.PositiveBigIntegerField()
