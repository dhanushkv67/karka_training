from datetime import date
# cur_date=date(2023,7,25)
# cur_date=date.today()
# cur_date=date.today().year
# cur_date=date.today().month
# cur_date=date.today().day
# print(cur_date)
from datetime import time
# cur_time=time(12,15,13)
# cur_time=time(12,15,13).hour
# cur_time=time(12,15,13).minute
# cur_time=time(12,15,13).second
# print(cur_time)
from datetime import datetime
# cur_datetime=datetime(2023,7,25,12,28,20)
# cur_datetime=datetime.today()
# # cur_datetime=datetime.today().year
# # cur_datetime=datetime.today().hour
# # cur_datetime=datetime.today().day
# cur_datetime=datetime.now()
# # s_time=cur_datetime.strftime('%y')
# # s_time=cur_datetime.strftime('%Y')
# s_time=cur_datetime.strftime('%d')
# # d gives 'day'
# print(s_time)
# s_time=cur_datetime.strftime('%D')
# # D gives 'date'
# print(s_time)
# s_time=cur_datetime.strftime('%m')
# # m gives 'month'
# print(s_time)
# s_time=cur_datetime.strftime('%M')
# # M gives 'minutes'
# print(s_time)
# print(cur_datetime)
from pytz import timezone
# utc=datetime.now(timezone('utc'))
# utc=utc.strftime('%z')
# asia=datetime.now(timezone('Asia/kolkata'))
# india=datetime.now(timezone('ist'))
# print(asia)
# # print(utc)

date_time=datetime.now()
s_datetime=date_time.strftime('%y')
# print(type(s_datetime))
date='24 december 2022'
o_date=date_time.strptime(date,'%d %B %Y')
print(o_date)
from datetime import timedelta
# end_date=o_date+timedelta(days=5)
end_date=o_date+timedelta(days=5)
print(end_date)