// class Dog {
//     constructor(name) {
//       this._name = name;
//       this._behavior = 0;
//     }
  
//     get name() { //<--- This is a function
//       return this._name;
//     }
//     get behavior() {
//       return this._behavior;
//     }   
  
//     incrementBehavior() {
//       this._behavior ++;
//     }
//   }
  
//   const halley = new Dog('Halley');

//   console.log(halley.name); // Print name value to console
  
//   console.log(halley.behavior); // Print behavior value to console
  
//   halley.incrementBehavior(); // Add one to behavior
  
//   console.log(halley.name); // Print name value to console
  
//   console.log(halley.behavior); // Print behavior value to console



/*class Surgeon {
    constructor(name, department) {
      this._name = name;
      this._department = department;
      this._remainingVacationDays = 20;
    }
    get name(){
       return this._name
     }
     get department(){
       return this._department
     }
     get remainingVacationDays () {
       return this._remainingVacationDays
     }
     takeVacationDays(daysOff = 5){
       return this._remainingVacationDays - daysOff
     }
  }
  
  const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
  //console.log(surgeonCurry)
  const surgeonDurant = new Surgeon('Durant', 'Orthopedics');*/

/////////////////////////
//Creating Classes///////
////////////////////////

class Hamster {
    constructor(owner, name, price){
    this._owner = owner ; ''
    this._name = name
    this._price = price
    //console.log(Hamster)
    }

wheelRun() {
    console.log("squeak squeak")
}
eatFood(){
    console.log("nibble nibble")
}
getPrice(){
    return this._price
}
//console.log(Hamster)

}

/////////////
///Person///
////////////

class Person {
    constructor(name, age, height, weight, mood, hamsters, bankAccount){
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
    //buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())
    buyHamster(hamster){
    this._hamster.push(Hamster)
    this._mood += 10

    //decrement bankAccount by the value of the hamster (hint: use getPrice())
    getPrice(); {
    this._bankAccount-- //(hamster) //I have no idea.
    }
    
    }
}

const timmy = new Person ('timmy', 5, 5, 5)
console.log(timmy)

const hamster = new Hamster ('Timmy', 'Gus',)
// constructor(owner, name, price){
//     this._owner = owner ; ''
//     this._name = name
//     this._price = price

