password=list(input('enter your password:'))
ans=True
pas=[]
for i in password:
    for j in range(0,10):
        if i==str(j):
            ans=True
        password.remove(i)
    if ans==True:
        if i==i.islower():
            ans=True
            print(i)
            break
        else:
            ans=False
    if ans==True:
        if i==i.isupper():
            ans=True
            print(i)
            break
        else:
            ans=False
    if ans==True:
        if len(password)<6:
            ans='weak'
        elif len(password)>=6 and len(password)<11:
            ans='moderate'
        elif len(password)>=11 and len(password)<15:
                ans='strong'
        elif len(password)>15:
                ans='very strong'
print(ans)




# print('a'.upper())





