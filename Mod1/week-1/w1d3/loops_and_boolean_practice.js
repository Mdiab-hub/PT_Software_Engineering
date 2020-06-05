for (let i = 0; i <= 15; i++){
    console.log("hi");
}

for (let i = 0; i <= 30; i++){
    console.log("YEP!");
}

/*let some_num = (Math.random(Math.floor * 100));

for (let some_num = 0; some_num < 10 && some_number > 20) {
    console.log("That's a small nuber!")
} else{
    console.log("That's a big number")
}*/

/*for (some_num > 20) {
    console.log("That's a big number")
}*/



let some_num;
for (some_num = Math.floor(Math.random() * 30); some_num < 30; some_num++) {
 if (some_num < 10) {
 console.log("thats a small number");
 } 
 //if some_num is bigger than 20, then console.log "that's a big number"
 else if (some_num > 20) {
 console.log("that's a big number");
 //if some_num is bigger than 10 AND smaller than 20, then console.log "that's a medium number"
 } else if (some_num > 10 && some_num < 20) {
 console.log("that's a medium number");
};
};

//const somenum = Math.random()

//let fave_day = 'Friday!'
let fave_day = ['Friday','Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']
//fave_day = fave_day[Math.floor(Math.random() * fave_day.length)];
/*while (fave_day){
if (fave_day = ['Saturday','Sunday']) {
    console.log('I like the weekend')
} else if (fave_day = ['Monday','Tuesday','Wednesday','Thursday']){
    console.log('Give me a good \'ol weekday')
}
}*/
//console.log(Math.floor(Math.random() * fave_day.length))

for(let i=0; i < fave_day.length; i++){
    if (fave_day[0,1,2]) {
        console.log('I like the weekend')
    } else if (fave_day [3,4,5]){
        console.log('Give me a good \'ol weekday')
    }
}
    /*console.log('I like the weekend' + fave_day[i])
} else {
    console.log('Give me a good \'ol weekday')
}*/

/*while (fave_day[0][1][2]) {
    console.log('I like the weekend')
}*/