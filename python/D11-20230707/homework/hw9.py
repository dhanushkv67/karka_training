print('Q1) what is the capital of India?\n\t 1)New delhi\n\t 2)chennai\n\t 3)tamil nadu')
answ1=int(input('answer:'))
if answ1==1:
    answ1=1
    print('that is right')
else:
    answ1=0
    print('sorry your answer is wrong!\n new delhi is correct answer')
print('Q2) can we use add operation between string and int? \n\t 1)yes\n\t 2)no')
answ2=int(input('answer:'))
if answ2==2:
    answ2=1
    print('that is right')
else:
    answ2=0
    print('sorry your answer is wrong!\n we can add string to string not to int')
print('Q3) what is the result of 10**2\n\t 1)100\n\t 2)1000\n\t 3)10000')
answ3=int(input('answer:'))
if answ3==1:
    answ3=1
    print('that is right\n')
else:
    answ3=0
    print('sorry your answer is wrong!\n 100 is correct answer\n')
print('overall you got',answ1+answ2+answ3,'out of 3 correct\nthanks for playing!')



