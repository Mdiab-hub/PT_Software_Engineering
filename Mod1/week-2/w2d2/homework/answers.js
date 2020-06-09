/*for (let i = 1; i <= 20; i++){
    console.log(i)
}

for (let i = 0; i <= 200; i+=2){
    console.log(i)
}*/

//Fizz Buzz
/*for (let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){ i % 3 === 0
        console.log("FizzBuzz")
    } else if(i % 5 === 0){
        console.log("Buzz")
    } else if(i % 3 === 0){
        console.log("Fizz")
    }
    console.log(i)
}*/

//Wild Wild Life
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
//1.
plantee[2] = 5001
console.log(plantee[2])
//2.
wolfy[3] = "Gotham City"
console.log(wolfy)
//3.
const add = dart.push("Hawkins")
console.log(dart)
//4.
const add2 = wolfy.unshift("GameBoy")
const add3 = wolfy.pop("Wolfy")
//console.log(wolfy)//'Gothom City' not showing up in console 

//Yell at Ninja Turtles
const ninjaTurtles = ["Donatello", "Leanoardo", "Raphael", "Michaelangelo"]
/*for (let ninjaTurtles of ninjaTurtles){
    ninjaTurtles.toUpperCase();
    console.log(ninjaTurtles)
}*/ //ReferenceError: Cannot access 'ninjaTurtles' before initialization??

//Methods, Revisited
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
//console.log(favMovies[8])

//1. It arranged the array in Alphabetical order
//const sortArray = favMovies.sort()
//console.log(favMovies)

//2. This method removes last element on Array
console.log(favMovies.pop())//Outputs 'Fast and Furious'

//3.
//console.log(favMovies.push("Gaurdians of the Galaxy"))

//4.
//console.log(favMovies.reverse())

//5.
//console.log(favMovies)
//const shiftMeth = favMovies.shift(118)
//console.log(favMovies.reverse(favMovies.shift("Fast and Furious")))
//console.log(favMovies.shift("Fast and Furious"))
//I couldn't figure out how to use the shift method to remove "Fast and Furious"

//6.The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
//console.log(favMovies.unshift("Hello"))
//console.log(favMovies)

//7
//deletefavMovies[3]
//const spliceEx = favMovies.splice(4, 1, "Avatar")
//console.log(favMovies.indexOf("Django Unchained"))
//console.log(favMovies.splice(4, 1, "Avatar"))

//8. & 9.
/*const favMovies2 = favMovies.splice(0, Math.ceil(favMovies.length / 2));
console.log(favMovies);
console.log(favMovies2);*/

//10.
//console.log(favMovies)

console.log(favMovies.indexOf("Fast and Furious"))//This outputs -1

//Where is Waldo
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

//console.log(whereIsWaldo.indexOf("Eggbert"))
//whereIsWaldo.splice(1,1, "Eggbert")
console.log(whereIsWaldo.splice(1, 1))
console.log(whereIsWaldo.splice(1, 2, "No One"))
console.log(whereIsWaldo)

//Excited Kitten
for(let i=0; i < 20; i++){
    console.log("Love me, pet me! HSSSSSSSSS!!!!!")
} 
const kittyTalk = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]

for(let i = 0; i < kittyTalk.length; i+=2) {    
    console.log(Math.floor(Math.random() * kittyTalk[i]))
    console.log(kittyTalk[i]); 
}
//I get NaN as output two of what the kitten says

//Find the Median
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
console.log(Math.floor(nums.length/2))
//I'm stuck here

//Hungry for More?
//Return of the Closets
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
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

//Alien Attire
  var krystinShoe = kristynsCloset.splice(0,1)
  //thomsCloset.push(krystinShoe)
  console.log(thomsCloset.splice(2, 0, krystinShoe))
  //How Do you splice through multi-dimension Arrays?

//Dress Us Up

