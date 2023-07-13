price=10
my_keychains=0
sales_tax=8.25/100
total_shipcost=5
key_shipcost=1
def add_keychains(a):
    global my_keychains
    my_keychains+=a
    return my_keychains
def remove_keychains(a):
    global my_keychains
    my_keychains-=a
    return my_keychains
def view_order():
    sub_total=((my_keychains)*(price))+(key_shipcost*my_keychains)
    tax=(sub_total*sales_tax)
    final_cost=sub_total+tax

    return('Number of keychains in order,',my_keychains,'''keychains
    the price per keychains''',price,'''
    the shipping charge on order per keychains''',key_shipcost,'''
    the sub total before tax,''',sub_total,'''
    the tax on the order,''',sales_tax,'''
    \nthe final cost of the order is,:''', final_cost)
def checkout():
    name=input('What is your name?')
    if my_keychains>0:
        return  ('you have',my_keychains,'keychains.\nkeychain cost $10 each.\ntotal cost is',final_cost,'\n \nThanks for your order,',name)
    else:
        return('their is no keychains in your collection')
ans=0
while ans!=4 and ans!=5:
    print('1. Add keychain to order\n2. Remove keychain from order\n3. View current order\n4. Checkout\n5. exit')
    ans=int(input('please enter your choice:'))
    if ans>5:
        print('error, their is no option no:',ans)
    if ans==1:
        ans1=int(input('you have 0 keychains. How many to add? '))
        add_keychains(ans1)
        print('now you have',my_keychains,' keychains')
    if ans==2:
        ans2=int(input('you have'+str(my_keychains)+'keychains. How many to remove? '))
        if my_keychains>ans2:
            remove_keychains(ans2)
            print('now u have',my_keychains,'keychains')
        else:
            print('error!,you keychains is less in number,\ncheck your collection.')
    if ans==3:
        print(view_order())
    if ans==4:
        print(checkout())
    if ans==5:
        print('thank you for being here,have a nyc day!!' )

    
    
