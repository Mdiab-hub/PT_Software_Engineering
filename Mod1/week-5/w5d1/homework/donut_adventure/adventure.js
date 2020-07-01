class Hero {
    constructor(name){
    this.name = name
    this.health = 100
    this.weapon = { sprinkleSpray: 5, sugarShock: 10 }
    this.catchPhrase = ['i\'m fresher than day old pizza', 'you can\'t count my calories']
}
talkSass(){
    console.log(this.catchPhrase[Math.floor(Math.random() * this.catchPhrase.length)])
} 
announceHealth(){
    console.log(this.health)
}
fight(_Enemy){ //<----------- Outputs: TypeError: Cannot read property 'healthy' of undefined
    console.log('i\'m ready to rumble')
        let random = Math.round(Math.random())
    if (random == 1){
        this.health -= this.weapon.sugarShock 
        console.log(`${this.name} has used sugar shock`)
    } else {
        this.health -= this.weapon.sprinkleSpray;
        console.log(`${this.name} health is ` + this.health)
    }
        console.log(`${this.name} health is ` + this.health)
        console.log(`${this.name} health is `+ this.health)
    }
}



const dougietheDonut = new Hero ("Dougie the Donut")

class Enemy {
    constructor(name){
    this.name = name
    this.health = 100
    this.weapon = { pepperoniStars: 5, cheeseGrease: 10 }
    this.catchPhrase = ['i\'m fresher than day old pizza', 'you can\'t count my calories']
}
talkSmack(){
    console.log(this.catchPhrase[Math.floor(Math.random() * this.catchPhrase.length)])
} 
announceHealth(){
    console.log(this.health)
}

fight(_Hero){ //<-----TypeError: Cannot read property 'healthy' of undefined
        console.log('i\'m ready to rumble')

        let random = Math.round(Math.random())

        if (random == 1){
            this.health -= this.weapon.pepperoniStars 
            console.log(`${this.name} has used sugar shock`)
        } else {
            this.healthy -= this.weapon.cheeseGrease;
            console.log(`${this.name} health is ` + this.health)
        }
            console.log(`${this.name} health is ` + this.health)
            console.log(`${this.name} health is `+ this.health)
        }
    }


const pizzaRat = new Hero ("Pizza Rat")

const dougieTalkSass = new Hero()
dougieTalkSass.talkSass()

const pizzaRatTalkSmack = new Enemy()
pizzaRatTalkSmack.talkSmack()

const dougieAnnounceHealth = new Hero()
dougieAnnounceHealth.announceHealth()

const pizzaAnnounceHealth = new Enemy()
pizzaAnnounceHealth.announceHealth()

const dougieWeapon = new Hero()
dougieWeapon.fight()

const pizzaRatWeapon = new Enemy()
pizzaRatWeapon.fight()

/*class Enemy {
    constructor(
        name,
        health = 100,
        weapon = {
            pepperoniStars: 5,
            cheeseGrease: 10
        },
        catchPhrase = ['Im youtube famous', 'Im more dangerous than an uncovered sewer']
    )
    {
        this.name = name
        this.health = health
        this.weapon = weapon
        this.catchPhrase = catchPhrase
    }
    talkSmack(){
            console.log(this.catchPhrase[Math.floor(Math.random() * this.catchPhrase.length)])
        } 
        announceHealth(){
            console.log(this.health)
        }
      
            fight(enemy){
                console.log('i\'m ready to rumble')
        
                let random = Math.round(Math.random())
        
                if (random == 1){
                    enemy.health -= this.weapon.pepperoniStars 
                    console.log(`${this.name} has used sugar shock`)
                } else {
                    enemy.healthy -= this.weapon.cheeseGrease;
                    console.log(`${this.name} health is ` + this.health)
                }
                    console.log(`${this.name} health is ` + this.health)
                    console.log(`${enemy.name} health is `+ enemy.health)
                }
    
}*/