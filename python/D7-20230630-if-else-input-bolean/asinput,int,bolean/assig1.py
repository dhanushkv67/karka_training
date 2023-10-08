year=int(input("enter the year"))
if year%4==0 and year%100!=0 or year%400==0:
    print(year, "is a leap year")
else:
    print(year,"is not a leap year")
# print(year%4==0,year%100!=0,year%400==0)