a=int(input("Enter the amount of a:"))
b=int(input("Enter the amount of b:"))
c=int(input("Enter the amount of c:"))
d=int(input("Enter the amount of d:"))
total=a+b+c+d
if total>500 and total<1000:
    print("you have owned silver token")
if total>1000:
    print("you have owned golden token")