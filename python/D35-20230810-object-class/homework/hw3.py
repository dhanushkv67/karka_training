class complaint:
    from datetime import datetime
    time=datetime.now()


    def __init__(self):
        self.name=input('enter your name:')
        self.id=int(input('enter your id number:'))
        self.compl=input(('enter your complaint:'))
    def display(self):
        print('name:',self.name,'\t',self.time,'\n',self.id,'\n',self.compl)
        # print(self.time)


# from datetime import datetime
# tody=datetime
# print(tody.now())
dhanu=complaint()
dhanu.display()
