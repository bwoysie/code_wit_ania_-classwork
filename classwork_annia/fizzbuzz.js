//Fizz Buzz !
//print out 100 numbers>But if the number is divisible by 5
//you have to replace it with 'buzz'. If the number id divisible by 3
//you have to replace it with 'fizz'. And finally, if the number is 
// divisible by both 3 and 5 you have to replace it with 'Fizz Buzz',

for(let i = 0; i <= 100; i++)
// console.log(i)
if( i % 3 == 0 ){
  console.log('Fizz')
}else if(i % 5 == 0){
  console.log('Buzz')
}
else if (i %3 == 0 && i % 5 == 0){
  console.log('FizzBuzz')
}