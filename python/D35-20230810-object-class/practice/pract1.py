lst=[3,3,4,4,5,1]
count=0
for i in lst:
    for j in lst:
        if i==j:
            count+=1
    print(count)
    if count<2:
        print(i)
        break
    count=0

