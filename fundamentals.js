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

// li before line 30, is STILL the <li> with the text "Lettuce"

li = document.createElement('li')
li.textContent = 'Attack on Titan'
list1.append(li)

// 4. Create a clickable button. When the button is clicked, it will change the text of
// the paragraph element with the id "para" to say "Button was clicked!"
// The content of the button itself will say "Click me!"
let button = document.createElement('button')
button.textContent = 'Click me!'
document.body.append(button)
button.addEventListener('click', () => {
  let p = document.getElementById('para')
  p.textContent  = 'Button was clicked!'
})

// 5. Create an input element that accepts text input. Then also create a button that says
// "submit". The input element will have the id of "text-input". The button will have the
// id "text-input-btn"
let input = document.createElement('input')
input.setAttribute('id', 'text-input')
let button2 = document.createElement('button')
button2.textContent = 'SUBMIT'
button2.id = 'text-input-btn'

document.body.append(input, button2)

// 6. When the submit is clicked, take the text in the input field, and create an HTML element
// that matches the text that the user inputted, and append to the DOM

button2.addEventListener('click', () => {
  let elementType = input.value
  let htmlContent = input2.value
  let newElement = document.createElement(elementType)
  newElement.innerHTML = htmlContent
  document.body.append(newElement)
})

// 7. create another input field, that will have the id "html-content" and append it to the DOM.
// When the submit button is clicked, take the text that is in this new input field and set it
// as the innerContent of the newly created HTML element
let input2 = document.createElement('input')
input2.id = 'html-content'
document.body.append(input2)
