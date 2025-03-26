
from django.core.exceptions import ValidationError
import re

def validate_subject_format(value):
    if value.title() != value:
        raise ValidationError("Subject must be in title case format")
    
def validate_professor_name(value):
    valid_p_name = re.match(r'^[A-Za-z]+ [A-Za-z]$')
    if len(value.split()) ==2 and valid_p_name and value.split()[0] =="Professor":
        return value
    else:
        raise ValidationError('Professor name must be in the format "Professor Adam".')
    