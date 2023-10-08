def max_value(a):
    vowels=0
    str=''
    value=0
    ans=''
    for i in a:
        if i!=' ':
            str+=i
            if i=='a'or i=='e'or i=='i'or i=='o'or i=='u':
                vowels+=1
        elif value<vowels:
            # print(str,vowels)
            value=vowels 
            ans=str
            str=''
            vowels=0
        else:
            str=''
            vowels=0
    return ans
a=input('enter the sentence:')+' '
print(max_value(a))

            

            