from classes.staff import Staff
from classes.student import Student

class School:
    def __init__(self, name):
        self.name = name
        self.staff = Staff.objects()
        self.students = Student.objects()

    
    def list_students(self,id=None):
        roster = []

        for x,y in enumerate(self.students):
            
                if id == y.school_id:
                      return f"Name: {y.name} Student Id: {y.school_id}"
            
            
                roster.append(f"{x+1}. Name: {y.name} Student Id: {y.school_id}")
        if id != None:
             return "That student ID was not valid"
        return "\n".join(roster)

    
        
