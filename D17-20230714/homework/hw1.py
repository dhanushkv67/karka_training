students=[{
    'name':'Dhanush','age':24,'place':'peruvilai'},
{'name':'Abinesh','age':21,'place':'vattavilai'},
{'name':'sree ram','age':23,'place':'krishancoil'}]
for i in range(len(students)):
    print('i am '+students[i]['name']+'. I am ',students[i]['age'],',and i am from '+students[i]['place'])
for info in students:
# for i in range(len(students)):
    if info['age']>21:
        print('i am '+info['name']+', and i am from '+info['place'])
