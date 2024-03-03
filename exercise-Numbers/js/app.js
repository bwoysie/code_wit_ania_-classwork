// Number() exercise

// 1. Write a function that will add the two costs together and
// return the result in dollars to 2 decimal points.
const netflixSpend2022USD = 210.32344
const netflixSpend2021USD = 192.4392

function getSpend() {
  const total = netflixSpend2022USD + netflixSpend2021USD
  return Number(total.toFixed(2))
}
console.log(getSpend())

// 2. Write a function that will get your total bill cost in
// dollars to 2 decimal points after a 12% service charge has
// been applied
const drinks = 43.23
const meals = 210.32

function getTotal() {
  const fb = drinks + meals
  const total = (fb / 100) * 12 + fb
  return Number(total.toFixed(2))
}
console.log(getTotal())