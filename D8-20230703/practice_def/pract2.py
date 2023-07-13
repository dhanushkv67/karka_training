def is_eli(passed_out_year):
    is_eligible=passed_out_year>2021
    return is_eligible

year=int(input("enter your year:"))
if is_eli(year):
    print(True)
else:
    print(False)
    


