eb_reading=[int(input('enter your previous reading:')),
            int(input('enter your reading which need to be calculated:'))]
ans=input('\ndo u want to calculate more reading?\n1)y  2)n\n\tanswer:')
ans='y'
while ans=='y':
    reading=int(input('enter your addition reading:'))
    eb_reading.append(reading)
    ans=input('\ndo u want to continue?\n1)y  2)n\n\tanswer:')
    if ans=='n':
        name=input('enter your name:')
# print(eb_reading)
def cal_elect_bill(eb_list):
    consumer_details=[]
    for i in range(len(eb_list)-1):
        consumer_data={}
        units=eb_list[i+1]-eb_list[i]
        if units<100:
            amount=0
            consumer_data['month']=i+1
            consumer_data['unit_consumed']=units
            consumer_data['amount_payable']=amount
        elif units>=100 and units<200:
            amount=units*2
            consumer_data['month']=i+1
            consumer_data['unit_consumed']=units
            consumer_data['amount_payable']=amount
        elif units>=200 and units<500:
            amount=units*5
            consumer_data['month']=i+1
            consumer_data['unit_consumed']=units
            consumer_data['amount_payable']=amount
        elif units>=500 and units<1000:
            amount=units*10
            consumer_data['month']=i+1
            consumer_data['unit_consumed']=units
            consumer_data['amount_payable']=amount
        elif units>=1000:
            amount=units*14
            consumer_data['month']=i+1
            consumer_data['unit_consumed']=units
            consumer_data['amount_payable']=amount
        consumer_details.append(consumer_data)
    return consumer_details
eb_result=cal_elect_bill(eb_reading)
# print(eb_result)
files=open('/home/dhanu/dhanu/eb_bills/'+name+'.txt','w+')
for info in eb_result:
    for key,value in info.items():
    # for value in info:
    #     # details=value+':',info[value]
    #     # str_details=details
    #     key_detail=str(value)
    #     value_detail=str(info[value])
        # print(str_details)
        # files=open('/home/dhanu/dhanu/eb_bills/'+name+'.txt','a')
        # files.write(key_detail+':' + value_detail+'\n')
        # files.close()
        files=open('/home/dhanu/dhanu/eb_bills/'+name+'.txt','a')
        files.write(key+':'+str(value)+'\n')
        files.close()
        # print(details)
    files=open('/home/dhanu/dhanu/eb_bills/'+name+'.txt','a')
    files.write('\n')
    files.close()
files=open('/home/dhanu/dhanu/eb_bills/'+name+'.txt','r')
print(files.read())
        


# name='dhanus'
# files=open('/home/dhanu/dhanu/'+name,'w+')
# files.write('ho')
# files.close()
# files=open('/home/dhanu/dhanu/'+name,'r')
# print(files.read())







