//.createElement()
// The .createElement()method creates an HTML element specified by its tag name
//see line 26..we will use another way of appending info to the body html..see line 8
const buttonElement = document.createElement("button")
console.log(buttonElement)


// const appElement = document.querySelector('body')

const appElement = document.querySelector('#app')

//whatever element that is created must be inserted in the body html element to show up in the browser
// so we capture the body element and then append the created element to it..so as of now it only shows up
// in the console..but not in the browser

// const bodyElement = document.querySelector('body')


//append()
// the append method inserts a set of Node objects after the last child of the element 
//we are appending to
// bodyElement.append(buttonElement) 


//*** this is not ideal as this append method always inserts at the bottom of the page after the javascript it is
// recommende to dreate a div and then insert into that div */

const inputElement = document.createElement('input')

appElement.append(buttonElement, inputElement)
console.log(appElement)