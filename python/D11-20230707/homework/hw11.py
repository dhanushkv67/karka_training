alive=['house plant','bison','dog']
not_alive=['shower curtain','bill boards','cell phone']
posibl_ans=['insideyes','bothyes','outsideyes','outsideno','insideno','bothno']
print('Think of something and I will guess it!\n\nQuestion 1)Does it stay inside,outside or both?')
ans1=input('answer:')
print('Is it a living thing?')
ans2=(input('answer:'))
ans=ans1+ans2
alive.extend(not_alive)
if ans=='insideyes'or'insideno'or'outsideyes'or 'outsideno'or'bothyes'or'bothno':
    ans1=posibl_ans.index(ans)
    print('\nYou may thinking of',alive[ans1])
    
     