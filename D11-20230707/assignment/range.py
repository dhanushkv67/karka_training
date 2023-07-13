# enumerate method :1//////////////////////
clas_list=['tamil','english','maths','science','social']
techr_list=['dhanu','anu','sonu','banu','manu']
print('+'+'-'*45+'+')
for i,nam in enumerate(clas_list):
    # print(nam,techr_list[i])
    print('|',1+i,'| {:>25}|{:>15}|'.format(nam,techr_list[i]))
print('+'+'-'*45+'+')  
print('/n')  

# range method :2//////////////////////
for i in range(5):
    print('|',1+i,'| {:>25}|{:>15}|'.format(clas_list[i],techr_list[i]))
#   explnation  range(5)
# 1st i=0
# 2nd i=1 etc...


