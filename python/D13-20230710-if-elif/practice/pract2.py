print('I am thinking of number between 1-100. You have 7 guess!\n')
no=35
for i in range(7):
    no=int(input('answer:'))
    if i<6:
        if no==35:
            print('your guess is correct')
            break
        elif no<35:
            print('that guess is too low')
        elif no>35:
            print('that is too high')
    else:
        print('your guess is over, you lose!')
    
    

