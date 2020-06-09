/*1. How do we assign a value to a variable?
   Which line(s) is/are valid?

let a = 0; //This is valid
const b = 1; //This is valid
9 = a; // This is valid
b = b + 5;*/ // This line isn't valid because you can't reassign a constant variable.

//Strings Activity 1
//Strings - Switcharoo

let firstVariable = "Hello World"
firstVariable = 1
let secondVariable = firstVariable
secondVariable = "Hello"
console.log(firstVariable)//Outputs 1

//Strings - Combine it
let yourName = "Motasem"
console.log("Hello, my name is " + yourName)

//Booleans Activity
const a = 6;
  const b = 100;
  const c = -5;
  const d = 3000;
  const e = 'Jelly Bean';
  
  console.log(a < b)
  console.log(c < d)
  console.log('Peanut' === 'Peanut')
  console.log(a < b > c)
  console.log(a === a !== d)
  console.log(e === 'Jelly Bean')
  console.log(48 !== '48')
  console.log('e' !== 'Eh')

  //The Farm 
  let animal;
  animal = 'cat'
  if (animal = 'cow'){
      console.log("Moooooooo")
  } else if (animal !== 'cow'){
      console.log("Hey! You're not a cow")
  } //Something wrong his here

  //Driver's Ed
  let personAge;
  personAge = 15
  if(personAge > 16){
  console.log("Here are the keys")
  } else if (personAge < 16){
  console.log("Sorry, you're too young.")
  }


//Just Loop It
for (let i = 0; i <= 10; i++){
    console.log(i)
}

for (let i = 500; i >= 50; i-- ){
    console.log(i)
}

//Let's get odd
for (let i = 0; i < 100; i++){
    if (i % 2){
        console.log(i + " is an odd number")
    }
}

//Give me Five
for (let i = 0; i <= 100; i++){
    if (i % 5 === 0){
        console.log("I found a "+i+". High five!")
    }
}

for (let i = 0; i <= 100; i++){
    if (i % 3 === 0){
        console.log("I found a "+i+". Three is a crowd")
    }
}
//Bonus

/*for (let i = 0; i < 10; i++){
    if (i % 3 === 0 || i % 5 === 0){
        
        console.log(i)
    }
    
}*/ //Tried to figure out a way to add the divisible numbers 0,3,5,6,9 together to get 23


/*for (let i = 0; i < 1000; i++){
    if (i % 3 === 0 || i % 5 === 0){
        console.log(i)
    }
    
}*/

//Savings account

/*
** Method to Find Sum of N Numbers
*/
    
    let bank_account = 0;
    for(let i = 1; i <= 10; i++) {
        bank_account = bank_account + i;
    }
    console.log(bank_account)
  
  
  
    let bank_account2 = 0;
    for(let i = 1; i <= 100; i++) {
        bank_account2 = bank_account2 + i;
        
        console.log(bank_account2 * 2)
    }
    //This code console.logs every thing from 1 - 100; But, How do I just console.log once to get  an output 10100


    //Fibonocci

    //Checkerboard
    const boardSize = 8;
    console.log(boardSize)