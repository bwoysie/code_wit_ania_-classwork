// let today = "Monday"
let today = true
// if(today == "Monday") {
  if(today) {
  console.log('hey I think its monday')
}

// falsey values and will not run an if statement
// if(false)
// if(undefined)
// if(null)
// if(Nan)
// if(" ")
// if(0)
// if(-0)
// if(0n)

// Example of truthy

let money = 10;
if (money) {
  console.log('lets go party')
}

let score = 90;
let cvPass = true;
let interviewPass = true;

let gotTheJob = (score > 90) && (cvPass) || (interviewPass)
console.log(gotTheJob)

// the nullish coalesence operator
const firstChoice = null //null it goes to the next choice
const secondChoice = 'Veggie'
const ThirdChoice = "Yogurt"

const airlineMeal = firstChoice ?? secondChoice ?? ThirdChoice

console.log(airlineMeal)


// The ternary operator 
//takes 3 operands

let isDiscount = true
let totalAmount = isDiscount ? 70 : 100
console.log(totalAmount)

let loggedIn = 10;
const message = loggedIn ? "Welcome back" : "you are not logged in"

console.log(message)

let temp = 0;
  if (temp > 30) {
  console.log("Dont forget the factor 50")
} else if (temp < 10){
  console.log("wear a jacket")
}else {
  console.log("its a t-shirt day")
}
