from django.db import models
from django.core import validators as v
from .validators import validate_p_name

# Create your models here.
class Pokemon(models.Model):
    name = models.CharField(max_length=100, validators = [validate_p_name])
    level = models.PositiveBigIntegerField(validators=[v.MinValueValidator(1), v.MaxValueValidator(100)])
    captured = models.BooleanField(null = False, blank=False, default=False)