lst=['flower','flowtt','flo','flowo','f']
ans=''
result=''
for i in range(len(lst)-1):
    for j in range(len(lst[i])):
        if j<len(lst[i]) and j<len(lst[i+1]):
            if lst[i][j]==lst[i+1][j]:
                ans+=lst[i][j]
    result=ans
    ans=''
print(result)
# lst='dhanu'
# lst1='dha'
# ans=''
# for i in range(len(lst)-1):
#     if len(lst[i])<len(lst[i+1]):
#         no=len(lst[i])
#     else:
#         no=len(lst[i+1])
#     for j in range(no):
#         lst[i][j]==lst[i+1][j]
#         ans+=lst[i][j]
#     result=ans 
#     ans=''
# print(result)