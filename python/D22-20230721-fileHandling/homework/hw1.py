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
eb_bill=cal_elect_bill(eb_reading)
s_eb_bill=str(eb_bill)
import json

ans=input('in which format u like to save your data\n\t1)json\t2)dict\nanswer:')
answer=ans.lower()
if answer=='json' :
    j_eb_bill=json.dumps(s_eb_bill)
    files=open('/home/dhanu/dhanu/eb_bills/'+name,'w')
    files.write(j_eb_bill)
    files.close()
elif answer=='dict':
    files=open('/home/dhanu/dhanu/eb_bills/'+name,'w')
    files.write(s_eb_bill)
    files.close()

