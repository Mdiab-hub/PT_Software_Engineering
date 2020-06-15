sayHello();

function sayHello(){
    console.log('hello i am angel')
}

/*firstArrowFunction();
const firstArrowFunction = () => {
    console.log('hello first arrow function')
    for (let i = 0; i < 10; i++){
        console.log('yo')
    }
}*/

printSum();
function printSum(){
    console.log(10+10)
}

/*printTriangle()
const printTriangle = () => {
    console.log('#')
    console.log('##')
    console.log('###')
    console.log('####')
    console.log('#####')
    for (let i = 0; i <= 5; i++){
        let hash = '#' 
        hash = hash + 1
        console.log('#')
    }
}*/

function sayHi(name) {
    console.log("Hello, " + name)
}
const sayHiExpression = function(name){
    console.log("HELLO, " + name);
}
const sayHiArrow = name => {
    console.log("HELLO, " + name);

}

const sayHiArrowMultipleParam = (firtName, lastName) => {
    console.log("Hello " + firstName + lastName)
}

//sayHiArrow('Angel')

function calculatedArea(num1, num2){
    console.log(num1 * num2)
}
calculatedArea(31, 21)
calculatedArea(2, 2)

const minusOne = num => {
    console.log(num - 1)
}
minusOne(10)
minusOne(100)
minusOne(Infinity)


/*function makeSentence('I', 'want', 'chimichangas') {
    console.log('I' + 'want' + 'chimichangas')
}*/

/*const getLastElement = ([1,2,3,4,5,6]) ; {
    console.log(getLastElement.pop())
}*/

const getLastElement = arr => {
    console.log(arr[arr.length - 1]);
    }

const divideThreeNums = (num1, num2, num3) => {
    console.log(num3 / (num2/num1))
   }

getLastElement([1, 2, 3, 4, 5, 6])
getLastElement(['a','b','c'])
getLastElement([[1,2,3],[4,5,6]])

divideThreeNums(10, 5, 2)
divideThreeNums(30, 2, 9)


function add(num1, num2){
    return num1 + num2;
    
}
console.log(add(2, 2)); //–––>
const angelsName = 'Angel'
function notGlobalScope(){
    const joseName = 'Jose Cruz'
    console.log(angelsName, "inside of function")
    console.log(joseName, 'not global scope')
    function inner(){
        const bruceName = 'Bruce Hawthorn'
    }
}

notGlobalScope()

function add (num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2
}

function addThenSubtract(){
    const addedNum = add(2,2);
    const subtractedNum = subtract(addedNum, 3);
    return subtractedNum;
}
console.log(addThenSubtract())

const returnName = () => {
    return "Matt"
}

const firstName = () => {
    return "Angel";
}

const fullName = () => {
    return firstName() + " Juarez";

}

console.log( fullName() );

function checkSquare = () => {
    if (Math.sqrt())console.log(true)
}