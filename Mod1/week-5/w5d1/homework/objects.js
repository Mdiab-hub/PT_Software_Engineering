/////////////////////////
//Creating Classes///////
////////////////////////

class Hamster {
    constructor(owner, name, price){
    this._owner = owner 
    this._name = name
    this._price = price
    //console.log(Hamster)
    }

wheelRun() {
    console.log("squeak squeak")
}
eatFood() {
    console.log("nibble nibble")
}
// getPrice(){
//     return this._price
// }
//console.log(Hamster)
}

//console.log(newHamster)

/////////////
///Person///
////////////

class Person {
    hamster = []
    constructor(name, age, height, weight, mood, _hamster, bankAccount) {
        this._name = name
        this._age = age
        this._height = height
        this._weight = weight
        this._mood = mood
        this._hamster = []
        this._bankAccount = bankAccount
    }
    getName(){
        return this._name
    }
    getAge(){
        return this._age
    }
    getWeight(){
        return this._height
    }
    greet(){
        console.log("Jason")
    }
    eat(){
    this._weight++;
    this._mood++      
    }
    exercise(){
        this._weight--
    }
    ageUp(){
        this._age++
        this._height++
        this._weight++
        this._mood--
        this._bankAccount += 10
    }

    //buyHamster(hamster) - 
    //push the hamster object onto the hamster array, 
    //increment mood by 10, 
    //decrement bankAccount by the value of the hamster (hint: use getPrice())
    

    buyHamster(hamster) {
    this._hamster.push(newHamster)
    this._mood += 10
    }

    //decrement bankAccount by the value of the hamster (hint: use getPrice())
    getPrice() {
        this._bankAccount-- //(hamster) //I have no idea.
    }
    
    }
    




//const punie = this._hamster.push(newHamster)
//console.log(punie)

const newHamster = new Hamster ('Larry','Punie', 20)
const timmy = new Person ('timmy', 5, 5, 5)

console.log(timmy.buyHamster(newHamster))



// const hamster = new Hamster ('Timmy', 'Gus',)
// constructor(owner, name, price){
//     this._owner = owner ; ''
//     this._name = name
//     this._price = price

//Instantiate a new Person named Timmy
const Timmy = new Person("Timmy");
//Age Timmy five years
console.log(Timmy);
Timmy.ageUp(5);
// At this point Timmy's a little bummed.  As a precocious child, he feels he's "seen it all" already.  Have him eat five times.
Timmy.eat(5);
// Now Timmy's a little heavier than he wants to be.  Kindergarten's coming up and he wants to look good.  Have him exercise five times
Timmy.exercise(5);
// Age Timmy 9 years
Timmy.ageUp(9);
console.log(Timmy);
// Create a hamster named "Gus"
// Set Gus's owner to the string "Timmy"
const Gus = new Hamster(Timmy, "Gus");
// Have Timmy "buy" Gus
// Timmy.buyHamster("Gus");
// Age Timmy 15 years
Timmy.ageUp(15);
//Have Timmy eat twice
Timmy.eat(2);
// Have Timmy exercise twice
Timmy.exercise(2);

