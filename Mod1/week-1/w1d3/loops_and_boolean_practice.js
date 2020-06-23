//Loops & Booleans
//Loop it!
// for (let i = 0; i <= 15; i++){
//     console.log("hi");
// }

// for (let i = 0; i <= 30; i++){
//     console.log("YEP!");
// }
///////////////////////////////
//Booleans & Loops - Part 1////
//////////////////////////////

//let some_num = (Math.random(Math.floor * 30));

// for (let some_num = 0; some_num < 10 && some_number < 20) {
//     console.log("That's a small nuber!")
// } else{
//     console.log("That's a big number")
// } //Outputs SyntaxError: Unexpected token ')'

/*for (some_num > 20) {
    console.log("That's a big number")
}*/

//let some_num;

// for (let some_num = Math.floor(Math.random() * 30); some_num < 30; some_num++) {
//  if (some_num < 10) {
//  console.log("thats a small number");
//  } 
//  //if some_num is bigger than 20, then console.log "that's a big number"
//  else if (some_num > 20) {
//  console.log("that's a big number");
//  //if some_num is bigger than 10 AND smaller than 20, then console.log "that's a medium number"
//  } else if (some_num > 10 && some_num < 20) {
//  console.log("that's a medium number");
// };
// };

//const somenum = Math.random()

//////////////////////////////
//Intro to Pseudo-coding/////
/////////////////////////////

//EQUATOR DRIVE

//How much would it cost to drive around the world at the equator if:

//1.the earth is rotating at 1000 mph
//2.gas costs $3 per gallon
//3.your car gets 15 miles to the gallon


//Find out length of equator, why. To findout how far your car has to go. 

//24,901 miles/15 miles/gallon = 1660.1 gallon
//1600.1 gallon * 3 dollar/gallon = 4980.2 dollar

const tripDistance = 24901
const fuelEfficiency = 15
const gasPrice = 3

//Take length of tripDistance and then divide it into fuelEfficincey
const dollar = Math.floor(tripDistance/fuelEfficiency)
// console.log(dollar)
//I think I can make this into a function
//  const dollar = (tripDistance, fuelEfficiency) => {
//         tripDistance / fuelEfficiency
//  }

//  dollar(24901, 15)

// const cost = (dollar, gasPrice) => {
//     return dollar * gasPrice
// }

// console.log(cost ())

const cost = dollar * gasPrice

console.log(`This trip will require ${dollar} gallons of gas, which amounts to a fuel cost of $${cost}`)
//if gasprice = $3 then the trip will cost us 4980.2 dollars






//let fave_day = 'Friday!'
//let fave_day = ['Friday','Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']
//fave_day = fave_day[Math.floor(Math.random() * fave_day.length)];
/*while (fave_day){
if (fave_day = ['Saturday','Sunday']) {
    console.log('I like the weekend')
} else if (fave_day = ['Monday','Tuesday','Wednesday','Thursday']){
    console.log('Give me a good \'ol weekday')
}
}*/
//console.log(Math.floor(Math.random() * fave_day.length))

// for(let i=0; i < fave_day.length; i++){
//     if (fave_day[0,1,2]) {
//         console.log('I like the weekend')
//     } else if (fave_day [3,4,5]){
//         console.log('Give me a good \'ol weekday')
//     }
// }
    /*console.log('I like the weekend' + fave_day[i])
} else {
    console.log('Give me a good \'ol weekday')
}*/

/*while (fave_day[0][1][2]) {
    console.log('I like the weekend')
}*/