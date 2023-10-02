# # no_list=[1,2,3,2,4,3,5,6,4]
# # to_set=set(no_list)
# # to_list=list(to_set)
# # print(to_list)
# app_list=[1]
# # for nos in app_list:

# no_list=[1,2,1,2,3,2,4,3]
# for no in range(len(no_list)):
#     for nos in app_list:
#         numbers=nos
#     if no_list[no]!=numbers:
#         # print(numbers)
#         app_list.append(no_list[no])
#         print(app_list)

# # print(app_list)
import json
files=open('/home/dhanu/dhanu/eb_bill','r')
str_eb=files.read()
str_json=json.dumps(str_eb)
# print(str_json)
files=open('/home/dhanu/dhanu/eb_bill_1','w')
files.write(str_json)
files.close()
files=open('/home/dhanu/dhanu/eb_bill_1','r')
result=files.read()
print(result)

a=[1,2,3,4,3,3]
a1=a.count(3)

    