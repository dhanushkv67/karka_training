students=[
    {'name':'abinesh',
    'sslc':{'tamil':60,'english':70,'maths':99,'science':78,'social':90}},
    {'name':'dhanush',
    'sslc':{'tamil':50,'english':78,'maths':89,'science':80,'social':78}},
    {'name':'ajitha',
    'sslc':{'tamil':89,'english':79,'maths':90,'science':89,'social':90}},
    {'name':'abinaya',
    'sslc':{'tamil':88,'english':82,'maths':94,'science':90,'social':80}},
    {'name':'sree ram',
    'sslc':{'tamil':92,'english':90,'maths':95,'science':91,'social':90}}]

for info in students:
    total=0
    # print('total marks scored by',info['name'],'\t:',info['sslc']['tamil']+info['sslc']['english']+info['sslc']['maths']+info['sslc']['science']+info['sslc']['social'])
    # print(info['name'],'is eligible for maths bio' if 
    for i in info['sslc']:
        mark=info['sslc'][i]
        total+=mark
    # for i in info['sslc'].values():
    #     mark=i
    #     total+=mark
    print('total marks scored by',info['name'],'\t:',total)
    print(info['name'],'is eligible for maths bio\n' if (total/500)>(90/100) or (total/500)>(75/100) and 
    info['sslc']['maths']>=98 else 'is eligible for computer science\n' if (total/500)>(80/100) 
    or (total/500)>(70/100) and info['sslc']['maths']>=98 else 'not eligible\n')

    
