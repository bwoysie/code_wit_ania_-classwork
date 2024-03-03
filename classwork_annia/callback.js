//callbacks in js
// A callback is a function passed into another function and called
//or executed when certain conditions are met
//Below is an example
//  function  Date {
  //  alert('website has been flicked several times')
  // console.log(new Date())
// }
// below is the arrrow function
// const alertMe = () => alert('website has been clicked twice in a month')


// document.addEventListener('click', alertMe)
//notice that the function is not using the parenthesis as we dont want it called at the moment
// we can however use parenthisis to pass in an argument


// const alertMe = (message) => alert(message)


// document.addEventListener('click', new Date)

const today = new Date()

function alertMe() {
  alert(today)
}

document.addEventListener('click' alertMe)
