//////////////////////////////////////////
//Section 3 Array Methods with Callbacks//
//////////////////////////////////////////

///////////
//Every////
//////////
//1.
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]
const numsTwo = num => num >= 0 
console.log(nums.every(numsTwo))
//2.
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']
const panagramTwo = p => p.length < 8
console.log(panagram.every(panagramTwo))

//Filter
//1.
const numThree = n => n < 4
console.log(nums.filter(numThree))
//2.
const panagramThree = p => p.length % 2 === 0 
console.log(panagram.filter(panagramThree))

//Find
//1.
const numFour = n => n % 5 === 0
console.log(nums.find(numFour))
//2.
const panagramFour = p => p.length > 5 
console.log(panagram.find(panagramFour))

//Find Index
//1.
const numFive = n => n % 3 === 0
console.log(nums.findIndex(numFive))
//2.
const panagramFive = p => p.length > 2 
console.log(panagram.findIndex(panagramFive))

//Map
//1.
const numSix = n => n * 100
console.log(nums.map(numSix))
//2.
const panagramSix = p => p.toUpperCase
//const panagramSeven = panagram.toUpperCase()
console.log(panagram.map(panagramSix))//outputs [Function: toUpperCase], 9 times


//Some
//1.
const numSeven = n => n % 7 === 0
console.log(nums.some(numSeven))//outputs: true
//2.
const panagramSeven = p => p.charAt('a')
console.log(panagram.some(panagramSeven))//outputs true
