a=2021
m=80
b=input("passed_out_yr")
d=input("marks")
# in variable b using the function input we can give the input from outside
# input from outside means in treminal

b=int(b)
d=int(d)
# in c the int function is used to convert string to integer
# because while giving input from outside it will be consider as string
# so we need to convert it into integer
# intergers can be comperable so we are converting into int

is_eligible=b>=a or d>m
print(is_eligible)

# it is condition operation ie,2023>2021 or 89>80

# if is_eligible:
#  print("the student is eligible")
# else:
#     print("the student is not eligible")
