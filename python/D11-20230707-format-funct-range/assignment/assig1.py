clas1='english'
clas2='tamil'
clas3='maths'
clas4='science'
clas5='social'
techr1='anu'
techr2='dhanu'
techr3='sonu'
techr4='banu'
techr5='manu'
print('+'+'-'*46+'+')
# print(len('+'+'-'*41+'+'))
print('''|1| {:>26}|{:>15}|'''.format(clas1,techr1),'''
|2| {:>26}|{:>15}|'''.format(clas2,techr2),'''
|3| {:>26}|{:>15}|'''.format(clas3,techr3),'''
|4| {:>26}|{:>15}|'''.format(clas4,techr4),'''
|5| {:>26}|{:>15}|'''.format(clas5,techr5))
print('+'+'-'*46+'+')
