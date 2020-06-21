// Section 2combining DataTypes

//what is the problem
//return an object that has arr
//what is the input: object
//what is output: object

const crayonBox = {
    listOfCrayons: ['indigo', 'red', 'green', 'black', 'brown']
}

console.log(crayonBox[0])

const bottle = {
    cap: {
        material: 'metal',
        color: 'blue'
    }
}
//console.log(one of the property of the inner object)

const receipt = [{name: 'pretzels', price: '2.99'}]
//console.log(one of the property of the inner object)

// const apartmentBuilding = [
//     const tenants = ['John', 'Harry', 'Melissa', 'Rebecca', 'Charles', 'Henry']
// ]





////////////////////////////////////////////////////////////////////
////Combine objects, arrays, and functions more than one level deep
////////////////////////////////////////////////////////////////////

//1.
//create a funtion called knit
//creating an object 
//with keys of item, and size
//with values of scarf and 6ft
//RETURNING an object.key

//input: object
//output: object.key

const knit = () => {
    const obj = {
        item: 'scarf',
        size: '6ft'
    }
    return obj.size
}

console.log(knit())

const addNums = (a, b) => {
    return a + b
}

console.log(addNums(3, 2))

//2.
crayonSelector = (obj) => {
    for(key in obj){
        typeof obj[key]
        if(key === Array){
            console.log(`{obj[key]}`)
        }
    }
}

crayonSelector(crayonBox)

//3.
//create a function called powerbUTTON
//RETURNS FUNCTION OPTIONS (CREATE A FUNCTION CALLED OPTIONS)
//options should console.log

const powerButton = () => {
    const options = () => {
        console.log('we made it')
    }
    options()
}

powerButton()
//console.log(powerButton())



//Step 3

//Model a veniding machine
//vending machine is an object
//Has an array of snacks
//Every snack is an ibject with price and name
//create a function called vend, that allows user it access array position and return the snack
//function will be inside of object
//inout: integer
//output: object

const vendingMachine = {
    snacks: [
    {
        name: 'snickers',
        price: 1
    },
    {
        name: "twix",
        price: 1
    },
    {
        name: 'starbursts',
        price: 2
    }
    ],
    vend: function vend(obj) {
        console.log(obj)
        for(let i = 0; i < obj.snacks.length; i++){
            console.log(obj.snacks[i])
        }
    }

}
console.log(vendingMachine.vend(vendingMachine))
