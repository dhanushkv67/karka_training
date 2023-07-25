montly_gold_rate=[{'month':'jan','gold_rate':1200,'jwel_list':[{'name':'chain','making_cost':14},
                                                               {'name':'ring','making_cost':12}]},
                  {'month':'feb','gold_rate':900,'jwel_list':[{'name':'chain','making_cost':12},
                                                                {'name':'ring','making_cost':10}]},
                  {'month':'mar','gold_rate':1300,'jwel_list':[{'name':'chain','making_cost':15},
                                                               {'name':'ring','making_cost':13}]},
                  {'month':'apr','gold_rate':990,'jwel_list':[{'name':'chain','making_cost':12},
                                                               {'name':'ring','making_cost':13}]}]
# result=[]
# for i in montly_gold_rate:
#     dic_res={}
#     gold_rate=i['gold_rate']
#     chain_per=i['jwel_list'][0]['making_cost']
#     ring_per=i['jwel_list'][1]['making_cost']
#     chain_amount=gold_rate*(chain_per/100)+gold_rate
#     ring_amount=gold_rate*(ring_per/100)+gold_rate
#     dic_res['month']=i['month']
#     dic_res['gold_rate']=i['gold_rate']
#     dic_res['jwel_list']={'chain':chain_amount,'ring':ring_amount}
#     result.append(dic_res)
# print(result)
        # print('month:',i['month'],'\ngold rate:',i['gold_rate'],'\n\tchain rate:',chain_amount,'\n\tring rate:',ring_amount)
# result=[]
result=[]
for i in montly_gold_rate:
    dic_res={}
    jwel_list={}
    # print('month:',i['month'],'\ngold rate:',i['gold_rate'])
    for amt in i['jwel_list']:
        amount=amt['making_cost']
        cal=i['gold_rate']*(amount/100)+i['gold_rate']
        # print('\t',amt['name'],':',cal)
        jwel_list[amt['name']]=cal
    dic_res['month']=i['month']
    dic_res['gold_rate']=i['gold_rate']
    dic_res['jwel_list']=jwel_list
    result.append(dic_res)
print(result)


