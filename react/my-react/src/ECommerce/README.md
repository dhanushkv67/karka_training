##ECOMMERCE WEB APP 

###MAIN COMPONENT
The Main Component of Ecommerce Web App is Named as MainSite which consits of Child Components 
it maintain 2 states for filtering images and to display items in the cart

###CHILD COMPONENT
The Child Components are ImgCard,Cart,FilterImg

###ImgCard
this child component will get the props form the parent component which is MainSite ,
the MainSite will send details of Images and setter function of cart ,while clicking the add to cart button in the ImgCard
the setter function will set particular image to the cart

###FilterImg
this component will get setter function of filter as a props form the MainSite parent component 
this component consits of multiple button in it, after clicking the button it will set the size to the MainSite's state

###Cart
this component will get setter function of cart form MainSite parent component
it maintain 2 states for display and count , display state is used to toggle the cart section
count state is used to adding numbers inside the cart 



