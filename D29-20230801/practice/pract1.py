details=[
    {'name':'dhanush','email':'123@gmail.com','password':'123d','hobbies':['cricket','football','kabbadi'],
     'friends_list':['abi','dhanu']},
     {'name':'subin','email':'234@gmail.com','password':'234s','hobbies':['mobile','cricket'],
     'friend_list':['selva','hari']},
     {'name':'abinesh','email':'567@gmail.com','password':'567a','hobbies':['cricket','mobile'],
     'friends_list':['subin','dhanush']}]
email=input('email:')
passw=input('password:')
def lst(a):
    for i in a:
        print(i)

# b=[1,2,3,4]
# lst(b)

def login(a,b):
    for dict in details:
        if dict['email']==email and dict['password']==passw:
            dict['logged_in']='true'
            print(dict['name'],'\nyour hobbies are:\n')
            lst(dict['hobbies'])
            print('\nyour friends list:\n')
            lst(dict['friends_list'])
            # for i in dict:
            #     if type(dict[i])==list:
            #         print('your',i,'are:\n')
            #         for j in dict[i]:
            #             print('\t',j,sep=',',end='')
            #     print()
        elif dict['email']!=email and dict['password']!=passw:
            dict['logged_in']='false'
login(email,passw)
# print(details)


