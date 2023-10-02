lst=[4,3,2,4,4,3,4,3,1,4]
count=0
ans=0
for i in lst:
    for j in lst:
        if i==j:
            count+=1
    if ans<count:
        ans=count
        res=i
    count=0
print(res)