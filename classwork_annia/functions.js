//a function decalration with out parameters
function callTaxi (){
  console.log(
  'here I am.. I am the taxi'
  )
}

callTaxi()

// A function to get the area of a rectangle
// first..dont need to declare variables as below
//second we can use arguments to pass in values
// let height = 100;
// let width = 150;

function getRectangelArea(height , width){
  return height * width
  
}
console.log(getRectangelArea(15 , 7))

// a function to tell us what year a person was born
 function getBirthYear (year , age){
  return year - age
 }
 console.log(getBirthYear(2023 , 1957))

 // a function to tell us how many cards left in a deck  of 52 when shared by friends
 function getCardsLeft (friends){
  return 52 % friends
 }
 console.log(getCardsLeft(3))

 // a function to print out Bart's punishment phrase x amount of times in the console
 // eg printPhrase(" I will sing", 2) 
 function printPhrase (phrase , num){
  // return phrase * num
  for( let i =0; i < num; i ++)
  console.log(phrase)
 }
 console.log( printPhrase ("I will sing" , 3))


 //function expressions ..using the a function declaration and assigning it to a constant
// Below is a function declaration
 function getSeconds (minutes) {
  return minutes * 60
 }
 console.log(getSeconds(5))

 //here is the same as a function expression

 const gethours = function (hours) {
  return hours * 60 * 60
 }
 console.log(gethours(1))

 //Arrow functions
//below is a regular function expression
//  const arrowFiction = function (hours) {
//   return hours * 60 * 60
//  }
// now an arrow function 

const arrowFiction = (minutes) => {
 return minutes * 60
}
console.log(arrowFiction(1))

// A function to get the circumference 
function getCircumference(radius) {
  return Math.PI *2 * radius
}
console.log(getCircumference(8))

function getRandomInteger() {
  return Math.floor(Math.random() *100)
}
console.log(getRandomInteger())

// console.log(new Date())

// console.log(new Date().getDay())

const patrickBirthday = new Date('February 3, 1957')
console.log(new Date().get())
console.log(patrickBirthday.getYear())