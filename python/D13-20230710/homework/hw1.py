weight=float(input('Enter your weight:'))
height=float(input('Enter your height:'))
bmi=weight/(height**2)
print(bmi)
if bmi<18.5:
    print('you are underweight')
elif bmi>=18.5 and bmi<=24.9:
    print('you are normal weight')
elif bmi>=25 and bmi<=29.9:
    print('you are over weight')
elif bmi>=30:
    print('you are obese')

