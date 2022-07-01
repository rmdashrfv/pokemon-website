/*
  We store HTML elements in JavaScript variables
  so that we can operate on those elements programmatically
 
  If you need to do  ANYTHING to an HTML element via javascript
  you should store that HTML element in a variable
 
  Example: If you need to add a list item to a list element (ul / ol)
  then you need to both create an element as a variable. And since you
  are adding something to the list element, you should store that list element
  in a variable as well.
 */

// 1. Create a List Item for a fruit, and append it to list-1
const list1 = document.getElementById('list-1')
let li = document.createElement('li')
li.textContent = 'Apple'
list1.append(li)

// 2. Create a List Item for a vegetable, and append it the list with the id = "list-1"
li = document.createElement('li')
li.textContent = 'Lettuce'
list1.append(li)

// 3. Take the ul with the id of "list-1" and attach a list item to the end of it with
// the text content of that list item being the name of a musical instrument
li = document.createElement('li')
li.textContent = 'Attack on Titan'
list1.append(li)



