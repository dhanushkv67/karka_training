# word=input('enter the sentence:')
# word=word.split()
# ans=word[0]
# for i in word:
#     if len(ans)<len(i):
#         ans=i
# print(ans,'is longest word')
# word=input('enter the sentence:')
# str=''
# lst1=[]
# for i in word:
#     if i!=' ':
#         str+=i
#     else:
#         lst1.append(str)
#         str=''
# ans=lst1[0]
# for i in lst1:
#     if len(ans)<len(i):
#         ans=i
# print(ans,'is the longest word')


word=input('enter the sentence:')+' '
str=''
ans=''
for i in word:
    if i!=' ':
        str+=i
    elif len(ans)<len(str):
        ans=str
        str=''
    else:
        str=''        
print(ans)
    

    