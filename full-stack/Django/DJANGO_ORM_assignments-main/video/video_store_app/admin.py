from django.contrib import admin
from .models import (Person, Video,Store, Address,Client)
# Register your models here.
admin.site.register([Client,Address,Store,Video,Person])
