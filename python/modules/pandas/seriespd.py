import pandas

# SERIES
# it is single dimensional data structure, like column

# it will set default index 0,1,2 etc...
a = [1,7,2]
myvar = pandas.Series(a)
# print(myvar)

# with index arugment , we can name our own labels 
a = [1,7,2]
myvar = pandas.Series(a,index=["x","y","z"])
# print(myvar)
# print(myvar["y"])

# in dictionary
calories = {"day1":420,"day2":380,"day3":390}
myvar = pandas.Series(calories)
# print(myvar)

# to create series for particular data 
calories = {"day1":420,"day2":380,"day3":390}
myvar = pandas.Series(calories,index=["day1","day2"])
print(myvar)
