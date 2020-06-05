//var vs. let vs. const

/*function getDate (){
    var date = new Date();
function formatDate(){
    return date.toDateString.slice(4);
}
    return formatDate();
// }

getDate();
console.log(date)*/

/*function discountPrices (prices, discount){

    var discounted;
    var i;
    var discountedPrice;
    var finalPrice;

    discounted = [];
    for (var i = 0; i < prices.length; i++){
        var discountedPrice = prices[i] * (1 - discount);
        var finalPrice = Math.round(discountedPrice * 100) / 100;
        discount.push(finalPrice);
    }

console.log(i);
console.log(discountedPrice);
console.log(finalPrice);

    return discounted;
}


discountPrices([100,200,300], .5);*/



/*let hourlyPay
let hoursPerWeek
let weeklyPay
let percent
let raise
let START_PCT = 0.05
let END_PCT = 0.10
let change_PCT = 0.005

var name = window.prompt ("Enter the hourly pay..." )*/

/*const substitutesOfPaper = ['White Board', 'Black Board', 'LCD Writing Pad'];
substitutesOfPaper.pop();
console.log(substitutesOfPaper.pop());
substitutesOfPaper.pop();*/

/*let itemsInBox = [5];
itemsInBox = [7, 48, 9];
const itemsInDrawer = [44, 2, 9, 38];
console.log(itemsInDrawer.length);*/

const arr = [2, 4, 8, 11, 14, 18]; 
arr [3] = 12 ;
console.log(arr[3]);
for(let i=0; i < arr.length; i++){
    console.log(arr[i])
}

/*const movieStudios = ['20th Century Fox', 'Paramount Pictures', 'Warner Bros'];
console.log(movieStudios.length);*/

/*let w = 4;
w = w + 1;

console.log(w); // Output: 5
let w = 4;
w += 1;

console.log(w); // Output: 5

let x = 20;
x -= 5; // Can be written as x = x - 5
console.log(x); // Output: 15

let y = 50;
y *= 2; // Can be written as y = y * 2
console.log(y); // Output: 100

let z = 8;
z /= 2; // Can be written as z = z / 2
console.log(z); // Output: 4*/


function addition(3 , 2){
    return 3 + 2
}  

//addition(-3, -6) -9

//addition(7, 3)  10


const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both loops have the number: ' + yourArray[j])
    }
  }
};
