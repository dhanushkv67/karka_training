marks=[80,70,85,55,90]
total=0
enum_mark=enumerate(marks)
print(type(enum_mark))

for i,mark in enum_mark:
    print('entering iteration process for item :',i)
    print('before sum:',total)
    total=total+mark
    print('after sum:',total)
    print('existing iteration process for item:',i)
    print('/n')
print('total marks:',total)
