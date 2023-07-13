def optr(a,b,c):
    if b=='+':
     return a+c
    if b=='-':
     return a-c
    if b=='/':
     return a/c
    if b=='%':
     return a%c 
    if b=='**':
     return a**c 
    if b=='*':
     return a*c 
a=int(input("Enter the value:"))
b=input("Enter the operator:")
c=int(input("Enter the value:"))
total=optr(a,b,c)
print(total)