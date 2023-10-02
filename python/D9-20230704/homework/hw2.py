statmnt=[1,2.0,"hai","@",5,6,"&",8,9]
count=0
for no in statmnt:
   if type(no)==type(1):
    count=count+1
    # print(no)
print("Number of mixed list:",count)
