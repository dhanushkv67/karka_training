week_days=['monday','tuesday','wednesday','thrusday','friday','saturday','sunday']
no=0
count=0
result=[]
dic={}
dy_lst=[]

for i in range(30):
    no+=1
    if no%7==0:
        no=0
    # print(no)
    # if week_days[no-1]=='monday':
    for j in range(7):
        dic['days']=week_days[no-1]
        dic['dys_list']=[]
        if week_days[no-1]==week_days[j]:
            dic['dys_list'].append(i)
    # result.append({'day':week_days[no-1],'day_list':dy_lst})
print(dic)

