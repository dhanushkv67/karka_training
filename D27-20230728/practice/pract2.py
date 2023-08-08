# candi=[]
# votelist={}
# while len(candi)<10:
#     ans=input('enter your candidate:\n\t1)A\n\t2)B\n\t3)C\nanswer:')
#     print(ans)
#     # l_ans=ans.lower()
#     if ans=='a' or ans=='b' or ans=='c':
#         candi.append('candidate'+ans)
#     else:
#         print('sorry!, vote ur correct candidate:\n')
# print(candi)

# a=[1,3,5,7,9]
# b=(dict(name='dhanush',age=25,place='ngl'))
# c=b.setdefault('cgp',90)
# b.update(lang='tamil')
# # print(b.get('name'))
# # b=dict.fromkeys(a,'no')
# print(c,b)
# a='level'
# print(a.splitlines())
lst=[1,2,0,3,0,4]
lst1=[]
for i in range(len(lst)):
    lst1=lst1+[lst[i]]
    if len(lst1)==len(lst):
        break
    if lst[i]==0:
        lst1=lst1+[0]
print(lst1)

# lst=[1,3,5,2,3,2,3]
# for i in range(len(lst)):
#     if lst[i]==3:
#         lst.remove(3)
#         lst.append('*')
# print(lst)
# lst1=[]
# for i in range(len(lst)):
#     if lst[i]!=3:
#         lst1=lst1+[lst[i]]
#     if i>(len(lst)-1):
#         no=len(lst1)-len(lst)
#         for i in range(no):
#             lst1=lst1+['*']

# print(lst1)

