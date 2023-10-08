# num=10
# n=num//2
# for i in range(num):
#     if i>5:
#         n=n-1
#         print(n*'*')
#     else:
#         print(i*'*')
num=4
n=(num*2)//2
no=0

for i in range(num*2):
    if i<n:
        no+=1
        # print(no)
    else:
        no=no-1
        # print(no)
    for j in range(no):
        print('*',end=' ')
    print()

    
num=10
n=num//2
for i in range(10):
    if i<=5:
        for j in range(i):
            print('*',end=' ')
        print()
    else:
        n=n-1
        for j in range(n):
            print("*",end=' ')
        print()

n=5   
# for i in range(1,n*2):
#     if i<=n:
#         m=i
#     else:
#         m=(n*2)-i
#     for j in range(m):
#         print('*',end=' ')
#     print()

