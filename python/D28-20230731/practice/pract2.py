# l=[1,0,3,0,9,13]
# l1=[]
# l2=[]
# for i in range(len(l)):
#     if l[i]!=0:
#         l1=l1+[l[i]]
#     else:
#         l2=[0]+l2
# print(l1+l2)
# for j in range(4):
#     ans='38'
#     lst=list(ans)
#     a=0
#     for i in lst:
#         a+=int(i)
# print(a)

ans=38
while ans>9:
    lst=list(str(ans))
    a=0
    for i in lst:
        a+=int(i)
    ans=a
print(ans)


