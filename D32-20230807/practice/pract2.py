# lst=[6,3,1]
# lst.sort()
# print(lst)
# ans=0
# for i in range(len(lst)):
#     for j in range(len(lst)-1,-1,-1):
#         # print(lst[j])
#         if abs(lst[i]-lst[j])  in lst:
#             if ans<abs(lst[i]-lst[j]):
#                 ans=abs(lst[i]-lst[j])

# print(ans)
lst=[1,6,4,7,87]
diff=0
for i in range(len(lst)):
    for j in range(len(lst)):
        if diff<(lst[i]-lst[j]):
            diff=(lst[i]-lst[j])
            ans=(f'{diff}({lst[i]}-{lst[j]})')
print(ans)

# print((f'{}{}{}'.('name')))







        
        