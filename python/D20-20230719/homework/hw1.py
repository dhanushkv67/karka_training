def cal_elect_bill(a):
   for i in a:
        if isinstance(a[i],list) is True:
            bill_1=a[i][0]
            # difference=[]
            # amount=[]
            # details={}
            total=0
            for no in a[i][1:]:
                print('month:',a[i].index(no))
                reading_diff=no-bill_1
                bill_1+=reading_diff
                # print(reading,bill_1)
                if reading_diff<100:
                    # amount+=[0]
                    # difference+=[reading_diff]
                    amount=0
                    difference=reading_diff
                    print('unit_consumed:',reading_diff,'\namount_payable:',amount)
                elif reading_diff>=100 and reading_diff<200:
                    # amount+=[reading_diff*2]
                    # difference+=[reading_diff]
                    amount=reading_diff*2
                    difference=reading_diff
                    total+=amount
                    print('unit_consumed:',reading_diff,'\namount_payable:',amount,'\n')
                elif reading_diff>=200 and reading_diff<500:
                    amount=reading_diff*5
                    difference=reading_diff
                    total+=amount
                    print('unit_consumed:',reading_diff,'\namount_payable:',amount,'\n')
                elif reading_diff>=500 and reading_diff<1000:
                    amount=reading_diff*10
                    difference=reading_diff
                    total+=amount
                    print('unit_consumed:',reading_diff,'\namount_payable:',amount,'\n')
                elif reading_diff>=1000:
                    amount=reading_diff*14
                    difference=reading_diff
                    total+=amount
                    print('unit_consumed:',reading_diff,'\namount_payable:',amount,'\n')
            print('total_amount:',total)        
            # return'total_amount:',total
            # details['amount']=amount
            # details['difference']=difference
            # return details
                      
# consumer_data={'consumer':'dhanu','eb_bills':[1100,1200,1350,1650,2050]}
# cal_elect_bill(consumer_data)

# def cal_elect_bills(a):
#     for i in a:
#         if isinstance(a[i],list) is True:
#             print(a[i])

# cal_elect_bills(consumer_data)
# print(isinstance(consumer_data,dict))
# method 2======================================================================================

def calculate_electric_bill(a):
    results_list=[]
    
    for i in range(len(a)-1):
        results={}
        difference=a[i+1]-a[i]
        # print(difference)
        if difference<100:
            amount=0
            results['month']=i+1
            results['units_consumed']=difference
            results['amount_payable']=amount
            # results_list.append(results)
        elif 100<=difference<200:
            amount=difference*2
            results['month']=i+1
            results['units_consumed']=difference
            results['amount_payable']=amount
            # results_list.append(results)
        elif 200<=difference<500:
            amount=difference*5
            results['month']=i+1
            results['units_consumed']=difference
            results['amount_payable']=amount
            # results_list.append(results)
        elif 500<=difference<1000:
            amount=difference*10
            results['month']=i+1
            results['units_consumed']=difference
            results['amount_payable']=amount
            # results_list.append(results)
        elif difference>=1000:
            amount=difference*14
            results['month']=i+1
            results['units_consumed']=difference
            results['amount_payable']=amount
        # print(results)
        results_list.append(results)
    return results_list
            
# calculate_electric_bill(consumer_data['eb_bills'])
# method 3================================================================================
# bills=input('eb_bills:')
# eb_bills=bills.split(',')
# name='/eb_bills'
# nos=[]
# for i in eb_bills:
#     nos+=[int(i)]
# print(type(nos[1]))
# final_value=calculate_electric_bill(nos)
# print(final_value)
# str_final=str(final_value)
# files=open('/home/dhanu/dhanu/'+name,'w+')
# files=open('/home/dhanu/dhanu/eb_bill','a')
# files.write(str_final)
# # files.close()
# files=open('/home/dhanu/dhanu/eb_bills','r')
# print(files.read())


