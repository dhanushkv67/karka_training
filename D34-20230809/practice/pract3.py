# # lst=[4,9,9,9]
# # ans=''
# # for i in range(len(lst)+1):
# #     if i<len(lst):
# #         ans+=str(lst[i])
# #         # print(ans)
# #     else:
# #         ans=int(ans)+1
# #         ans=str(ans)
# #         for i in range(len(ans)):
# #             lst[i]=int(ans[i])
# # print(lst)
password=list('179832')
# ans=True
# pas=[]

for i in password:
    for j in range(0,10):
        if i==str(j):
            ans=True
            password.remove(i)
    if ans==False:
        
print(password)
#     if i!=str(j):
#         pas.append(i)
#         #     break
#         # else:            
#         #     ans=False
#     if ans==True:
#         if i==i.lower():
#             ans=True
#             print(i)
#         else:
#             ans=False
#             print(67)
# print(pas)
# p=['D','1','2','3']
# for i in p:
#     if i==i.isupper():
#         print(1)
#     else:
#         print(2)