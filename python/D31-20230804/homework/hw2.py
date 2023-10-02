def pairs(list):
    n=int(input('enter the sum:'))
    for i in range(len(list)):
        for j in range(i,len(list)):
            if list[i]+list[j]==n:
                print((list[i],list[j]),end=',')
    print()
num=[2,3,5,4,7,9,8,5]
pairs(num)
