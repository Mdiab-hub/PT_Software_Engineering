const me = {

    firstName: 'Joe',
    lastName: 'Doe',
    age: 37,
    email: 'jondoe@yahoo.com',
    'place of residence': 'columbus'
}

console.log(me)
me.age = 100000
console.log(me.firstName)
console.log(me.age)

const fancyGreeting = me => {
    console.log("Greetings, " + me)
}

fancyGreeting()
//Why do we have to call a function?

//Slimer
const monster = {
    name: "Slimer",
    color: "greenish",
    type: "plasm or ghost or something"
 }
 console.log(monster.name)
 monster.type = 'creature'
 console.log(monster.type)
 monster.age = 6
 console.log(monster.age)

 //Ogres
 adventurer = {
     name: 'Henry',
     weight: 'skinny', 
     hitpoints: 'back of knee',
     restoritiveMedicine: 'Pepto Bismol'
 }

 ogre = {
     name: 'shrek',
     weight: 'fat',
     height: 'short',
     color: 'green',
     hitpoints: 'ears'
 }

 for (let i = 100; i > adventurer && i > ogre; i--){

 }

 console.log('Game Over');

 //Cat Combinator
 //1. Mama cat
 let cat1 = {
     name: 'Ace',
     breed: 'persian cat',
     age: 3
 }

 console.log(cat1.age)
 console.log(cat1.breed)

 //2. Papa cat
 let cat2 = {
    name: 'Larry',
    breed: 'bengal cat',
    age: 7
 }

 combineCats()

 const combineCats = (cat1, cat2) => {
    console.log(combineCats)
 }
 //I am not sure if I am doing this correctly

 


