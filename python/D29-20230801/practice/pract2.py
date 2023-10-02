# lst1=[5,2,1,3,5,8]
# lst2=[2,3,0,6]
# if len(lst1)>len(lst2):
#     n=len(lst1)
# else:
#     n=len(lst2)
# # print(n)
# for i in range(n):
#     if i<len(lst2):
#         if lst1[i]>lst2[i]:
#             lst1[i]=lst1[i]
#         else:
#             lst1[i]=lst2[i]
# print(lst1)
lst=[2,3,1,4,2]
n=2
for i in range(3):
    if lst[i]==n:
        for j in range(i,1):
            lst[j]=lst[(j+1)]

print(lst)


