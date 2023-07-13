# calculation of simple interest
def cal_int(p,n,r):
    int=(p*n*r)/100
    return int

p=int(input("enter the principle:")) 
n=int(input("enter the year:"))
r=int(input("enter the rate of interest"))
interest=cal_int(p,n,r)
print(interest)
