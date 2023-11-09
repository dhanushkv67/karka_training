#TODO 
The document uses Bootstrap,and Font Awesome for styling and icons.

##INTERFACE
The HTML structure includes a container for the To-Do list.
It has an input field for entering To-Do items and an 'Add ToDo' button to add new items to the list.

##FUNCTIONS
On page load, it retrieves To-Do items from local storage and displays them.
The addToDoItem() function adds new To-Do items to the list. It performs validation and saves items to local storage.
The showToDoItems() function displays To-Do items dynamically, allowing checking/unchecking tasks, editing, and deleting items.
It features functions for deleting items (del()), changing status (changetodostatus()), and editing items (edit() and done_edit()).

##Local Storage:
To-Do items are stored in the browser's local storage using localStorage to persist data across page reloads.
