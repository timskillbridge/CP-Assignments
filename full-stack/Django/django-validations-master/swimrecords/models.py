from django.db import models
from .validator import valid_stroke, valid_distance, no_future_records, no_break_record_before_set_record

class SwimRecord(models.Model):
    #pass # delete me when you start writing in validations
    first_name = models.CharField()
    last_name = models.CharField()
    team_name = models.CharField()
    relay = models.BooleanField()
    stroke = models.CharField(validators=[valid_stroke])
    distance = models.IntegerField(validators=[valid_distance])
    record_date = models.DateTimeField(validators=[no_future_records])
    record_broken_date = models.DateTimeField(validators=[no_break_record_before_set_record])
