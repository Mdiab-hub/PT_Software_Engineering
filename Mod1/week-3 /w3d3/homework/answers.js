//e.g. A computer that can be either on or off. 
//=> datatype: boolean 
//=> data structure example: const computer = true; 

//A light switch that can be either on or off.
//datatype: boolean
const lightSwitch = true

//A user's email address.
//datatype: string
const emailAddress = ['jon.doe@yahoo.com']

//A spaceship with a hull, laser blasters, tractor beam, and warp drive.
//datatype: object
const spaceship = {

desription: ['hull', 'laser blasters', 'tractor beam', 'warp drive']

}

//A list of student names from our class.
//datatype: Array
const names = ['jessica', 'albert', 'ryan']


//A list of student names from our class, each with a location.
//dataype: object
const studentName = {
    'jessica': {
    location: 'California',
    },

  'robert': {
      location: 'Maine',
  },

  'william': {
      location: 'Ohio'
  }
}

//A list of student names from our class, each with a location and each with a list of favorite tv shows.
//dataype: object
const studentName2 = {
    'jessica': {
    location: 'California',
    tvShows: ['the office', 'parks and recreation']
    },

  'robert': {
      location: 'Maine',
      tvShows: ['the office', 'parks and recreation']
  },

  'william': {
      location: 'Ohio',
      tvShows: ['the office', 'parks and recreation']
  }
}

//Take it Easy
const rainbow= ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
const blue = rainbow[4]
const myName = {
    favorite_food: 'pizza',
    hobby: 'solving puzzles',
    town: 'Columbus',
    favDatatype: 'Arrays'
}
//console.log(myName.hobby)

//Crazy Object
const crazyObject = {
    taco: [{meat: 'steak',
           cheese: ['panela', 'queso', 'chihuahua']},
           {meat: 'chicken',
            salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
          ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [{
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
      ]
    }
  }

  //1.
console.log(crazyObject.taco.salsa)
//wasn't able to get "omg my mouth is burning"

//2.
console.log(crazyObject.larry.quotes[0])

//3
console.log(crazyObject.larry.characters.favourtieHobby)
//couldn't get "Swearing at Larry and Jeff"

//4
console.log(crazyObject.larry.nicknames[1])

//5
console.log(crazyObject.larry.name)
//couldn't get "funkhauser"

//6
const addQuote = crazyObject.larry.quotes.push("I'm trying to elevate small talk to medium talk")
//console.log(addQuote)
console.log(crazyObject.larry.quotes)