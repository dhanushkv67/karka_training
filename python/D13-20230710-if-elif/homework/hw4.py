list=['january','feburary','march','aparil','may','june','july','august','september','october','november','december']
def month_name(a):
    a=a-1 
    return list[a]
print(month_name(int((input('enter the month number:')))))