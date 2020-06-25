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



class Surgeon {
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
  const surgeonDurant = new Surgeon('Durant', 'Orthopedics');
/////////////////////////
//Creating Classes///////
////////////////////////

class Hamster {
    constructor(owner, name, price)
    owner = ''
    name = ''
    price = 15
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
console.log(Hamster)