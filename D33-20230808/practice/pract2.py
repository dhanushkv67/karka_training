lst=[[1,2],[3,4]]
opt=int(input('choose the operation\n1)Add\t2)Sub\t3)Multi\t4)string\t5)dict\t6)list\nAnswer:'))
ans=0
lst1=[]
dict={}
for i in lst:
    for j in i:
        if opt==1:
            ans+=j
        if opt==2:
            ans=j-ans
        if opt==4:
            lst1.append(j)
            ans=(f'"{str(lst1)}"')
        if opt==5:
            # if len(dict)!=1:
            #     dict[j]=j+1
            #     lst1.append(dict)
            # else:
            #     dict={}
            dict[f'index{ans}']=j
            ans+=1
            if ans==len(lst)*2:
                ans=dict
        if opt==6:
            lst1.append(j)
            ans=lst1
        if opt==3:
            if ans==0:
                ans=1
            ans=ans*j
            

print(dict)


# print('[1]'+'[2]')

