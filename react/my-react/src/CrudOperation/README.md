#CRUD OPERATION USING FAKE API

##MAIN COMPONENT
the main component is named as Display, which uses react router to manage different route for corresponding child component

##CHILD COMPONENT
FetchData,ReactTable,ViewDetails,CardView

##FetchData
this component will render in home page, it is login form ,it maintain state for getting user information
after clicking submit button , it will create new data in fake api using POST method, after creating new user details , popup screen will display 
two options TABLE VIEW or CARD VIEW,using navigate hook it will change the path 

##ReactTable
this component will get props from the FetchData component via navigate hook ,the data will be displayed in table by use of react table hook,
the funtions like useGolbalFilter , UsesortBy , pagination were imported form react table ,are implemented in this table, the table has option like 
edit , delete and view 

###edit
while clicking the edit button it will take the particular data and navigate to login form , which  will the display the editable userdetails
after clicking update button , using PUT method the data will be updated to the api 

###delete
after clicking delete button in table , using DELETE method the selected data will be deleted form the api

###view
while clicking view button , using navigate hook it will change path to view details and share the data to ViewDetails component
