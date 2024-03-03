//the for loop
for (let i = 0; i < 5; i++) {
  // varaible; condition; increment++
  console.log("I will not cheat in class", i);
}
// the do while statement ..note that the code executes first then checks for condition 
// 1.define the count
let count = 0;
do {
  let val = count + 1;
  console.log("I will indent my code in python that I wrote for the " + val + "th time", count);
  count++;
} while (count < 10);
// the while statement ..it first checks if the statement is true before it executes the  code
let bill = 0;
while (bill < 5) {
  bill++;
  console.log('I like javascript');
}
// ********** label continue and break ******************
// write a statement that prints 'I will use camel case '
//  20 times for 4 rounds
//  after each round print "Round done"
// after all 20 times print 'eat my shorts'
let round = 0;
let time = 0;
let punished = true;
loopPunishment: while (punished) {
  round++;
  while (punished) {
    time++;
    if (time === 3) {
      continue;
    }
    console.log(time + "I will use camel case, round" + round);

    if (time >= 20 && round >= 4) {
      console.log("Eat me , I'm outta here!");
      break loopPunishment;
    } else if (time >= 30) {
      time = 0;
      console.log("round done");
      break;
    }
  }

}
