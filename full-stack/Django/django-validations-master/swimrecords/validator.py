
from django.core.exceptions import ValidationError
import re
import datetime

def validate_first_name(first_name):
    error_msg = "This field cannot be blank."
    regex = r'^[A-Z][a-z]*$'
    valid_first_name = re.match(regex,first_name)

    if valid_first_name:
        return first_name
    else:
        raise ValidationError(error_msg,params={'name': first_name})
    
def validate_last_name(last_name):
    error_msg = "This field cannot be blank."
    regex = r'^[A-Z][a-z]*$'
    valid_first_name = re.match(regex,last_name)

    if valid_first_name:
        return last_name
    else:
        raise ValidationError(error_msg,params={'name': last_name})

def validate_first_name(team_name):
    error_msg = "This field cannot be blank."
    regex = r'^[A-Z][a-z]*$'
    valid_team_name = re.match(regex,team_name)

    if valid_team_name:
        return team_name
    else:
        raise ValidationError(error_msg,params={'name': team_name})

def validate_relay_presence(relay_presence):
    error_msg = "'None' value must be either True or False."
    valid_relay_presence = isinstance(relay_presence,bool)
    if valid_relay_presence:
        return relay_presence
    else:
        raise ValidationError(error_msg,params={'name': relay_presence})
    
def valid_stroke(stroke):
    error_msg = f'{stroke} is not a valid stroke.'
    stroke_list = ["front crawl", "butterfly", "breast", "back", "freestyle"]
    valid_stroke = (stroke in stroke_list)
    print(valid_stroke)
    if valid_stroke:
        return stroke
    else:
        raise ValidationError(error_msg,params={'name':stroke})
    
def valid_distance(distance):
    error_msg = "Ensure this value is greater than or equal to 50."
    valid_distance = distance>=50
    if valid_distance:
        return distance
    else:
        raise ValidationError(error_msg,params={'name':distance})
    
def no_future_records(record_date):
    # print(f' today: {datetime.date.today()} provided: {record_date}')
    error_msg = "Can't set record in the future."
    valid_record_date = record_date.date()<datetime.date.today()
    if valid_record_date:
        return record_date
    else:
        raise ValidationError(error_msg)

def no_break_record_before_set_record(record_broken_date,record_date):
    error_msg = f"Can't break record before record was set."
    valid_record_broken_date = record_broken_date > record_date
    if valid_record_broken_date:
        return record_broken_date
    else:
        raise ValidationError(error_msg,params={'name':record_broken_date})
    




