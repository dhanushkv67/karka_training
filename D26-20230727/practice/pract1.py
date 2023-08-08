from datetime import datetime
from datetime import timedelta
# from dateutil import parse
days=int(input('enter the days:'))
# tody=datetime.now()
# res=tody+timedelta(days)
# print(res)
# giv_date=input('enter the date')
giv_date=input('enter the date:')
ob_date=datetime.strptime(giv_date,'%d %B %Y')
res=ob_date+timedelta(days)
str_res=res.strftime('%d %B %Y')
print(str_res)
