//Easy does It & Random
/*const quotes = ["In the middle of difficulty lies opportunity.", "Life is like riding a bicycle. To keep your balance you must keep moving.", "Anyone who has never made a mistake has never tried anything new."]
const randomThings = [1, 10, "Hello", true]
randomThings[2] = "World"
console.log(randomThings)
//1. To access 1st element in array
console.log(randomThings[0])*/

//We've Got Class
/*const ourClass = ["Ada", "Zoom", "Github", "Slack"]
console.log(ourClass[2]);
ourClass[2] = "Octocat"
console.log(ourClass);
const element = ourClass.push("Cloud City")
console.log(element);
console.log(ourClass);*/

//Mix it Up
/*const myArray = [5 ,10 ,500, 20]
const secondElement = myArray.push("Egon")
console.log(myArray.pop());
console.log(secondElement)
console.log(myArray)
console.log(myArray.unshift("Bob Marley"))
const thirdElement = myArray.shift()
console.log(myArray)
const reversed = myArray.reverse();
console.log(myArray)*/

//Biggie Smalls
const myArray = [5 ,10 ,500, 20]
//const littleNum = Math.floor(Math.random() * 200)
/*if (myArray < 100) {
    console.log('Little Number')
} else if (myArray > 100) {
    console.log('Big Number')
} */
//Above code doesn't output anything


//Monkey in the Middle
//const myArray = [5 ,10 ,500, 20]
/*const anyNum = Math.floor(Math.random() * 20)
if (anyNum < 5){
    console.log('little number')
} else if (anyNum > 10) {
    console.log('big number')
} else {
    console.log('Monkey')
} */

//What's in Your Closet?
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "raybans",
    "marshmallow peeps"
  ];
  //console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!" )
  //const firstElement = kristynsCloset.shift()
  const kristynShoe = "left shoe"
  //const secondElement = 
  kristynsCloset[5] = "stained knit hat"
  //kristynsCloset.push();
  //console.log(kristynsCloset)
  /*for (let i = 0; i < kristynsCloset.length; i++){
    console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!" )
  }*/
  //if (kristynsCloset)

  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  /*console.log(thomsCloset[0][0])
  console.log(thomsCloset[1][0])
  console.log(thomsCloset[2][2])
  console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][0]} and ${thomsCloset[2][2]}`)
*/
  thomsCloset [1][2] = "Footie Pajamies"
  //console.log(thomsCloset[1])

  const twoDArray = [
    [9,8,7],
    [6,5,4],
    [3,2,1],
  ];
//console.log(twoDArray)
const reversed = twoDArray[0].reverse();
const reversedTwo = twoDArray[1].reverse();
const reversedThree = twoDArray[2].reverse();
//twoDArray.reverse([0][1])
console.log(reversed, reversedTwo, reversedThree)
console.log(reversedThree, reversedTwo, reversed)

for (let twoDArray of twoDArray){
    twoDArray.reverse();
}
console.log(twoDArray)