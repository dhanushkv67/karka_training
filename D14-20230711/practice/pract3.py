
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
    final_cost=(sub_total*sales_tax)
    print('Number of keychains in order,',my_keychains,'''keychains
    the price per keychains''',price,'''
    the shipping charge on order per keychains''',key_shipcost,'''
    the sub total before tax,''',sub_total,'''
    the tax on the order,''',sales_tax,'''
    \nthe final cost of the order is,:''', final_cost)
def checkout():
    name=input('What is your name?')
    return  ('you have',my_keychains,'keychains.\nkeychain cost $10 each.\ntotal cost is',total_cost,'\n \nThanks for your order,',name)

    
