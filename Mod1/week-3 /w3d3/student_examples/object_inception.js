/*const human = {
    name: 'Timothy',
    hitpoint: 10,
    weapon: ['lightning sword', 'pokeball', 'good eats', 'shampoo']
    companion: {
        name:'pickachu',
        type: 'electric'
    }
}*/
//console.log(human)
/*const human2 = {
    name: 'Timothy',
    hitpoint: 10,
    weapon: [{sword: 'lightning sword', damage: 5},]
}

function fight(obj1, obj2){
    if(true) {
        obj1.hitpoint - obj1.weapon[0] 
    }
}

fight(human, human1)*/

/*const adventurer ={
    name: 'Timothy',
    hitpoint: 10,
    weapons: ['sword, ']
}*/

/*for(let i = 0; i < human.weapon.length; i++){
    human.weapon[i] = 'super big eats'
    nextIndex = human.weapon[i]
    console.log(human.weapon[i])
    console.log(human)
}*/

const adventurer = {
    name: "Timothy", 
    hitpoints: 10,
    weapons: ['sword','potion','Tunes'],
    companion: {
        name: "Velma",
        type: "Bat"
        companion: {
            name: "Tim",
            type: "parasite"
        }
    }
}

console.log(adventurer.companion.companion.type)

console.log(adventurer.name);
adventurer.name = "Angel"
console.log(adventure.name)

console.log(adventurer.companion.name);
adventurer.companion.name = "susan"
console.log(adventurer.companion.name);

adventurer.companion2 = {
    name: "Companion 2",
    type: "insect"
}

console.log(adventurer.companion2.type);

const post = {
    link: 'link',
    user: 'Angel',

}

const movies = [
    { title: "Tokyo Story" },
    { title: "Paul Blart: Mall Cop" },
    { title: "L'Avventura" }
]

for(let i = 0; i< movies.length; i++){
    console.log(movies[i])
}

const monster = {
    name: "Slimer",
    age: 6
}

console.log(monster.name)
console.log(monster['name'])

const str = 'name'
console.log(monster[str])

const str = 'name'
console.log(monster[str])

const movie = {
    title: "L'Aventurra",
    director: "Michelangelo Antonioni",
    year: 1960
}

for (key in movie) {
    console.log(key)
}

const arrOfKeysInsideOfAdventurer = Object.keys(adventurer)

for(let i = 0; i < arrOfKeysInsideOfAdventurer.length; i++){
    console.log(arrOfKeysInsideOfAdventurer[i])
}