print('I will add up the number give below.')
count=0

for i in range(2**64):    
    num=int(input('number'))
    if num!=0:
        count=count+num
        print('the total so far is',count)
    else:
        print('the total is',count)
        break
