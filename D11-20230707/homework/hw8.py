planets=['venus','mars','jupiter','saturn','uranus','neptune']
gravity=[0.78,0.39,2.65,1.17,1.05,1.23]
weight=int(input('enter your weight in earth:'))
print('I have information for the following planets: \n''1. venus 2. mars 3. jupiter \n''4. saturn 5. uranus 6. neptune')
no=int(input('which planet are you visiting?'))-1
print('you weight would be',weight*gravity[no],'pounds on that ')