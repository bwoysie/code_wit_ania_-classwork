//.createElement()
// The .createElememt() method creates an Html element specified by its tag name

const bodyElement = document.querySelector('body')
const buttonElement = document.createElement('button')
console.log(buttonElement)
const inputElement = document.createElement('input')
const appElement = document.querySelector('.append')

//append()
//The .append method inserts a set of Node objects after the last child of the element we are
//appending to.

// bodyElement.append(buttonElement, inputElement)
// this way is not recommended as this element is 
// placed after the script tag ..i.e last child of elements in the body 
//do this instead

// instead creat a div .. give it an id and then append to that div 

appElement.append(buttonElement, inputElement)

const titleElement = document.querySelector('h1')

titleElement.classList.add('red-version')


function toggle(){
  titleElement.classList.toggle('green-version')
}

document.addEventListener('click', toggle)

function replaceColor() {
  titleElement.classList.replace('red-version', "yellow-version")
}

document.addEventListener('click',replaceColor)


function toggle(){
  titleElement.classList.toggle('green-version')
}