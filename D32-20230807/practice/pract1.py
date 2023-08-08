def str_to_dict(str):
    lst=[]
    word=''
    for i in str:
        if i!=' ':
            word+=i
        else:
            lst.append(word)
            word=''
    count=0
    dict={}
    for i in range(len(lst)):
        for j in range(len(lst)):
            if lst[i]==lst[j]:
                count+=1
        dict[lst[i]]=count
        count=0
    return dict
a="the quick brown fox jumps over the lazy dog the quick brown fox"
print(str_to_dict(a))


            