size=int(input('enter the size:'))
amount=[]
while len(amount)<size:
    price=int(input('enter the price:'))
    amount.append(price)
print(amount)
min=amount[0]
index_min=0
for i in range(len(amount)):
    if min>amount[i]:
        min=amount[i]
        index_min=i
# n=amount.index(min)
max=0
for i in range(index_min+1,len(amount)):
    if max<amount[i]:
        max=amount[i]
        index_max=i
print('output:',index_min+1,',',index_max+1)




