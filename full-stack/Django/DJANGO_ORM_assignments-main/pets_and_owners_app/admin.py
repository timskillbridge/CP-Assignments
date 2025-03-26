from django.contrib import admin
from .models import Owner, Cat, Dog, Exotic_Animal, Bird

# Register your models here.
admin.site.register([Owner,Dog,Bird,Cat,Exotic_Animal])