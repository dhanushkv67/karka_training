age=int(input('enter your age:'))
if age<16:
    print('you canot drive.')
# if age>=16 and age<=17:
if 16<=age<=17:
    print('you can drive but not vote.')
if 18<=age<=24:
# if age>=18 and age<=24:
    print('you can vote but not rent a car.')
if age>=25:
    print('you can do pretty much anything.')