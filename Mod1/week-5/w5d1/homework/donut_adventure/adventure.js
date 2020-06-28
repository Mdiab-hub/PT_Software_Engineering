class Hero {
    constructor(name){
    this.name = name
    this.health = 100
    this.weapon = { sprinkleSpray: 5, sugarShock: 10 }
    this.catchPhrase = ['i\'m fresher than day old pizza', 
    'you can\'t count my calories']
    }

    talkSass(){
        console.log(Math.random(this.catchPhrase))
    } 
    announceHealth(){
        console.log(this.health)
    }
    fight(){
        console.log('i\'m ready to rumble')
    }
}

const dougieTheDonut = new Hero ()
