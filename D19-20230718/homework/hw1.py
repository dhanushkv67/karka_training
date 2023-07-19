items=[{'name':'apple','category':'fruits'},{'name':'carrot','category':'vegetables'},
       {'name':'banana','category':'fruits'},{'name':'tomato','category':'vegetables'}]

# a={'category':[0,0],'category2':['list1','list1']}
fruits=[]
vegetables=[]
result={}
for i in items:
    if i['category']=='fruits':
        fruit=i['name']
        fruits.append(fruit)
    else:
        if i['category']=='vegetables':
            vegetable=i['name']
            vegetables.append(vegetable)
a={'fruits':fruits, 'vegetable':vegetable}
result['fruits']=fruits
result['vegetable']=vegetables
print(result)
list={}
for i in items:
    if i['category']=='fruits':
        list['fruits']=i['name']
        print(list)






