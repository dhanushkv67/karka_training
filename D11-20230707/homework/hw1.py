firstname=input('enter your first name:')
lastname=input('enter your last name:')
id=input('enter student id:')
login=input('enter login:')
gpa=input('GPA (0.0-4.0):')
name=firstname+lastname

print('login:',login,'''
ID:''' ,id,'''
name:''',firstname,lastname,'''
GPA:''',gpa)
print('your information: \n \t login: {:>5} \n \t ID: {:>8} \n \t name: {:>5} \n \t GPA: {:>5}'.format(login,id,name,gpa) )