
# method 1/////////////
list1=[20,50,30,40]
def find_larg(list):
    vari=list1[3]
    for i in list:
       if i>vari:
        vari=i
    return vari
                
print(find_larg(list1),list1[3])       


# method 2///////////////
vari=list1[0]
for i in list1[1:]:
    if i>vari:
        vari=i
print(vari)

# method 3/////////////


