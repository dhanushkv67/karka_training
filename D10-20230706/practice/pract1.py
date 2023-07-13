num=[2,5,7,9]
sum=0
for no in num:
    print('before:',no)
    sum=no+sum
    print('after:',sum)
averg=sum/len(num)
print(sum,averg)

