print('think of an object, and I will try to guess it.\n')
print('Q1) Is it animal,vegetable,or mineral?')
ans=input('which one')
print('Q2) Is it bigger than a breadbox?')
ans2=input('answer')
animals=['squirrel','moose']
vegetables=['carrot','watermelon']
minerals=['paper clip','camaro']
if ans=='animal':
    if ans2=='yes':
        print('my guess is that you are thinking of a,',animals[0])
    else:
        print('my guess is that you are thinking of a,',animals[1])
if ans=='vegetable':
    if ans2=='yes':
        print('my guess is that you are thinking of a,',vegetables[1])
    else:
        print('my guess is that you are thinking of a,',vegetables[0])
if ans=='mineral':
    if ans2=='yes':
        print('my guess is that you are thinking of a,',minerals[1]) 
    else:
        print('my guess is that you are thinking of a,',minerals[0]) 





