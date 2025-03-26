from django.core.exceptions import ValidationError
import re

def validate_name_format(name):
    error_msg = 'Name must be in the format "First Middle Initial. Last'
    regex = r'^[A-Z][a-z]+(?: [A-Z]\.)? [A-Z][a-z]+$'
    valid_name = re.match(regex,name)

    if valid_name:
        return name
    else:
        raise ValidaitonError(error_msg,params={'name': name})
    
def validate_school_email(email):
    error_msg = 'Invalid school email format. Please use an email ending with "@school.com".'
    regex = r'^[^@]+@school\.com$'
    valid_email = re.match(regex,email)

    if valid_email:
        return email
    else:
        raise ValidationError(error_msg,params={'name': email})
    
def validate_combination_format(combo):
    error_msg = 'Combination must be in the format "12-12-12"'
    regex = r'^\d{2}-\d{2}-\d{2}$'
    valid_combo = re.match(regex,combo)

    if valid_combo:
        return combo
    else:
        raise ValidationError(error_msg,params={'name': combo})