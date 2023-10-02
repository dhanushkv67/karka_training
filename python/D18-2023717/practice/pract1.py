cricket_players=[
    {'name':'Virat Kohli','centuries':28,'half_centuries':29,'wickets':0,'hat_tricks':0,'top_score':[254,125,250,2,251]},
    {'name':'Muttiah Muralitharan','centuries':0,'half_centuries':1,'wickets':800,'hat_tricks':0,'top_score':[67,2,3,4,5]},
    {'name':'AB de villiers','centuries':22,'half_centuries':46,'wickets':2,'hat_tricks':0,'top_score':[278,4,5,6,6]},
    {'name':'sachin tendulkar','centuries':51,'half_centuries':68,'wickets':46,'hat_tricks':0,'top_score':[2,4,5,6,248]},
    {'name':'ravichandran aswin','centuries':5,'half_centuries':13,'wickets':486,'hat_tricks':0,'top_score':[2,6,124,5,4]}]
# score=[]
# score=[cricket_players[0]['top_score'][0],cricket_players[0]['name']]
for info in cricket_players:
    score=[info['top_score'][0],info['name']]
    # print(score)
    for no in info['top_score']:
        # print(no)
        if no>score[0]:
            score[0]=no
            score[1]=info['name']
    print(score[1],score[0])
            

     


