my_keychains=0
total_cost=0
price=10
def add_keychains(a):
    global my_keychains
    my_keychains+=a
    return my_keychains
def remove_keychains(a):
    global my_keychains
    my_keychains-=a
    return my_keychains
def view_order():
    global total_cost
    total_cost=my_keychains*price
    return ('you have',my_keychains,'keychains.\nkeychain cost $10 each.\ntotal cost is',total_cost)
     
def checkout():
    name=input('What is your name?')
    return  ('you have',my_keychains,'keychains.\nkeychain cost $10 each.\ntotal cost is',total_cost,'\n \nThanks for your order,',name)
ans=0
print('The keychain shop')
while ans<4:
    print('1. Add keychain to order\n2. Remove keychain from order\n3. View current order\n4. Checkout')
    ans=int(input('please enter your choice'))
    if ans==1:
        ans1=int(input('you have 0 keychains. How many to add?'))
        add_keychains(ans1)
        print('now you have',my_keychains,' keychains')
    if ans==2:
        ans2=int(input('you have'+str(my_keychains)+'keychains. How many to remove?'))
        remove_keychains(ans2)
        print('now u have',my_keychains,'keychains')
    if ans==3:
        print(view_order())
    if ans==4:
        print(checkout())
    
    


