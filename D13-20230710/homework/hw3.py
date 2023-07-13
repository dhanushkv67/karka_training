count=0
for i in range(1,100):
    if i%3==0 and i%5==0:
        print('FizzBuzz',i)
        count=1
    elif i%5==0:
        print('Buzz',i)
    elif i%3==0 :
        print('Fizz',i)
