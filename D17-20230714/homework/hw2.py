cricket_players=[
    {'name':'Virat Kohli','centuries':28,'half_centuries':29,'wickets':0,'hat_tricks':0,'top_score':254},
    {'name':'Muttiah Muralitharan','centuries':0,'half_centuries':1,'wickets':800,'hat_tricks':0,'top_score':67},
    {'name':'AB de villiers','centuries':22,'half_centuries':46,'wickets':2,'hat_tricks':0,'top_score':278},
    {'name':'sachin tendulkar','centuries':51,'half_centuries':68,'wickets':46,'hat_tricks':0,'top_score':248},
    {'name':'ravichandran aswin','centuries':5,'half_centuries':13,'wickets':486,'hat_tricks':0,'top_score':124}]
count=0
count1=0
# score=str(cricket_players[0]['top_score'][0])+cricket_players[0]['top_score'][1]
for info in cricket_players:
    if info['centuries']>10:
        count+=1
        print(count,info['name'])
 
        # print(info['top_score'][0])     # continue
for info in cricket_players:
    if info['top_score']>count1:
        count1=info['top_score']
    
for info in cricket_players:
    if info['top_score']==count1:
        print(info['name'])

for info in cricket_players:
    if info['hat_tricks']>5:
        print(info['name'])
    else:
        print('none')
        break
# method 2-------------------------------------------
count=0
count1=0
i=1
while i==1:
    print('1) no of players crossed more than 10 centuries:\n')
    for info in cricket_players:
        if info['centuries']>10:
            count+=1
            print(count,info['name'])
    for info in cricket_players:
        if info['top_score']>count1:
            count1=info['top_score']
    for info in cricket_players:
        if info['top_score']==count1:
            print('\n2)',info['name'],'is the top scorer, among the list\n')
    print('3) no of players who are taken hat tricks:\n')
    for info in cricket_players:
        if info['hat_tricks']>5:
            print(info['name'])
        else :
            print('their is no hat tricks taken by the players among the list')
            i+=1
            break
            
            
    
# print('total no of players',count)
         
