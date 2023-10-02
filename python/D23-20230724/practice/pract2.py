
montly_gold_rate=[{'month':'jan','gold_rate':1200},
                  {'month':'feb','gold_rate':900},
                  {'month':'mar','gold_rate':1300},
                  {'month':'apr','gold_rate':990}]
lw_rate=montly_gold_rate[0]['gold_rate']
hi_rate=montly_gold_rate[0]['gold_rate']
lw_month=montly_gold_rate[0]['month']
hi_month=montly_gold_rate[0]['month']
for i in montly_gold_rate:
    if i['gold_rate']<lw_rate:
        lw_rate=i['gold_rate']
        lw_month=i['month']
    elif i['gold_rate']>hi_rate:
        hi_rate=i['gold_rate']
        hi_month=i['month']
print('the lowest rate of gold ,in an month is',lw_month ,',and the rate of gold is ',lw_rate,'\n',
    'the higest rate of  gold in an month is',hi_month,',and the rate of gold is',hi_rate)




    
    