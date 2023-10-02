print('which game do u like, football or cricket?\n')
ans1=input('answer:')
if ans1=='football':
    ans2=input('what position do u play!,defence or forward?')
    if ans2=='defence'or 'forward':
        ans2==input('do u have played in club:')
        if ans2=='yes':
            print('you are selected and you will, get the college application')
        else:
            print('sorry! you are not qualified')
else:
    ans2=input('what position do play!,batsman or bowler?') 
    if ans2=='batsman':
        ans2=float(input('What is your strick rate?')) 
        if ans2>100 :
            print('you are selected and you will, get the college application')      
        else:
            print('sorry! you are not qualified') 
    else:
        ans3=float(input('what is your economy?'))
        if ans3<8.0:
            print('you are selected and you will, get the college application')
        else:
            print('sorry! you are not qualified')
    
