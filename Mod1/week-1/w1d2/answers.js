const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kelvin';
  const f = false;

  a < b
  c > 16
  Name = 'Kelvin'
  a < b < c
  a * a === d

  //console.log(true)  
  
  /*let answer = a * a
  console.log(answer)
  answer = d

  /*function answer(a, a) {
      return answer(a * a)
  }
  console.log(answer)*/

  e === 'Kelvin'
  48 != '48'
  f != e

  let g = 0
  console.log(g)
  g = b + c
  console.log(g)
  //10 = g
  
// 1. I used let because it seems more flexible.
// 2. No I didn't receive an error
// 3. SyntaxError: Invalid left-hand side in assignment


/*while (true) {
	console.log('Do not run this loop');
}
// is this loop an infinite loop? Why or why not? Yes, because there's no condition or boundary to stop it. 

const runProgram = true;

while (runProgram) {
	console.log('Do not run this loop');
	runProgram = false;
}*/

// Infinite or not infinite? What is the expected output? It will play it only once, because while runProgram = true it will run the message in console.log() until it reads runProgram then it will stop.

let letters = "A";
let i = 0;

//start a while loop that will run as long as i is less than 20
while (i < 20) {
// letters += A
// letters  = letters + A
// for as long as 0 is less than 20 print out letters next to A
// increases letter by one
  letters += "A";
//increments value of i by 1
  i++;
// closes the while loop, the code inside this loop will keep running until the while condition is evaluated to be false
}
// prints the value of letters to the screen/Terminal window
console.log(letters)
// I didn't know the code was going to print out A's; I thought it was going to print out alphabet. 

a < (b || f) === !f && e !== c
console.log(a < (b || f) === !f && e !== c)

//Section 4
// A for loop performs the same operation as a while loop. But what are the key differences, if any? What are the similarities?

for (let i = 0; i < 100; i++) {
	console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
}
//variable intialization
//conditonal statement
//increments by one
for (let i = 0; i < 999; i++){
  console.log(i)
}
//What is \ doing in the string? Is it to tell that apostrophe apart? Is it to differentiate between a tick and a apostrophe? in a string?

for (let i = 0; i <= 10; i++) {
  console.log('The value of i is: ' + i + ' of 10');
}
//This skips every other item in array
const StarWars = ["Han", "C3P0", "R2D2", "Luke", "Leia", "Anakin"];
for (let i = 0; i < StarWars.length; i+= 2){
  console.log(StarWars[i]);
} 

for (let i = 999; i >= 0; i--){
  console.log(i)
}

for (let i = 1; i <= 10; i++){
  console.log(`The value of i is: ${i} of 10`)
}


