
from django.core.exceptions import ValidationError
import re
def validate_p_name(name):
    error_msg = "Invalid name provided"
    regex = r'^[A-Z][a-z]*S'
    valid_name = re.match(regex, name)
    if valid_name:
        return name
    else:
        raise ValidationError(error_msg, params={'name':name})
    
    