class employee:
    def __init__(self,name):
        self.name=name
        self.salary=0
    # def display(self):
        # print(name,salary)

class manager(employee):
    def __init__(self,department,name):
        self.department=''
    def display(self):
        print(self.name,self.salary,self.department)
dhanu=manager('devop','dhanush')
dhanu.name='dhanush'
dhanu.salary=24,000
dhanu.department='devop'
dhanu.display()
# dhanush = employee()
# print(dhanush)