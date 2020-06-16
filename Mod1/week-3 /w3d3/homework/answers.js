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


/////////////////////////
///Object-ception
//////////////////////////
const inception = {
    reality: {
        dreamLayer1: {
            dreamLayer2: {
                dreamLayer3: {
                    dreamLayer4: {
                        dreamLayer5: {
                            dreamLayer6: {
                                limbo: "Joseph Gordon Levitt"
                           }
                        }
                    }
                }
            }
        }
    }
 }
 //const addVal = inception.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = 'null'
 //console.log(inception)
 //TypeError: Cannot read property 'dreamLayer2' of undefined


 /////////////////////
 //Bond Films
 ////////////////////

 const bondFilms = [
    { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
    { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
    { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
    { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
    { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
    { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
    { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
    { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
    { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
    { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
    { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
    { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
    { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
    { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
    { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
    { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
    { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
    { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
    { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
    { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
    { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
    { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
    { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
  ];


//How do I exclude the titles of the Bond films

  //const bondTitles = ["Skyfall", "Thunderball", "Goldfinger", "Live and Let Die", "You Only Live Twice", "The Spy Who Loved Me", "Casino Royale", "Moonraker", "Diamonds Are Forever", "Quantum of Solace", "From Russia with Love", "Die Another Day", "Goldeneye", "On Her Majesty's Secret Service", "The World is Not Enough", "For Your Eyes Only", "Tomorrow Never Dies", "The Man with the Golden Gun", "Dr. No", "Octopussy", "The Living Daylights", "A View to a Kill", "License to Kill"]
  //console.log(bondTitles)

for(let i = 0; i < bondFilms.length; i++) {
    console.log(bondFilms[i].title)
}
//const oddBonds;
for(let i = 0; i < bondFilms.length; i++) {
    if(bondFilms % 2){
        console.log(bondFilms[i].title)
    }
    
}

/*if (bondFilms[i].title === true);//Why, would we need to '=== true', what does this do? To make sure it's true
 {
 const bondTitles = [bondFilms[i].title];
   console.log(bondTitles);
 }*/
//I couldn't figure out the logic on how to build code for this section