gender=input('What is your gender:')
first_nam=input('Enter your 1st name:')
last_nam=input('Enter your Last name:')
age=int(input('Enter your age:'))
if gender=='female'or 'male':
    if gender=='female'and age>21:
        married=input('Are you married!:'+first_nam)
        if married=='yes':
         print('Then i shall call you Mrs.',last_nam)
        else:
         print('hey! Ms.',first_nam+last_nam)
    elif gender=='male' and age>21:
        print('Then i shall call you Mr.',first_nam)
    else:
        print('hey!',first_nam+last_nam)
