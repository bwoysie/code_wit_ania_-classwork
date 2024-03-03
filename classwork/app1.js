//the .style property returns the inline style of an element and allows
//us to manipulate them in javascript

const titleElement = document.querySelector('h1')
console.log(titleElement)

titleElement.style.color = 'blue'
titleElement.style.position = 'absolute'

titleElement.style.left = '250px'

//The heart exercise
// first select the html you want to address we are using document.query
//  we then assign the html to a variable 

const bodyElement = document.querySelector('body') 
const heartElement= document.querySelector('#heart')
//  we then write our funtion
// i.e what we want our html to do here we want the style to change
function changeScene() {
  heartElement.style.left = '550px'
  bodyElement.style.backgroundColor = 'purple'
}

//  then we write the event lstener to list foir teh click and then run the function
document.addEventListener('click', changeScene)