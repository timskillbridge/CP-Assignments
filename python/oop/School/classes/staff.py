
class Staff:
    def __init__(self, name, age, role, employeeid):
        self.name = name
        self.age = age
        self.role = role
        self.employeeid = employeeid
        
    @classmethod
    def all_staff(cls):
        container = []
        with open('./data/staff.csv','r') as infile:
            reader = csv.DictReader(infile)
            for row in reader:
                new_staff = Staff(**row)
                container.append(cls(**row))
        return container
