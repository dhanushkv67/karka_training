weeks=['mon','tue','wed','thru','fri','sat','sun']
# lst=[]
no=0
# for i in range(30):
#     no+=1
#     if no>6:
#         no=0
#     lst.append(weeks[no-1])
# dic={}
# for i in weeks:
#     no=[]
#     for j in range(len(lst)):
#         if i==lst[j]:
#             no.append(j)
#     dic[i]=no
# print(dic)
dic={}
for j in weeks:
    lst=[]
    for i in range(30):
        no+=1
        if no>6:
            no=0
        print(j,no,i)    
        if j==weeks[no-1]:
            print(j,weeks[no-1],i)
            lst.append(i)
        # print(lst)
    dic[j]=lst        
print(dic)

        




