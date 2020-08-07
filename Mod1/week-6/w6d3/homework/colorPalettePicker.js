//generate 150 divs
//create click handler on each square that will add a square with the same color as the clicked sqaure to the right column


const colorPalette = document.getElementById('color-palette');
const myPalette = document.getElementById('my-palette');
const $generate = document.getElementById('generate');


const makePalette = () => {
	for(let i = 0; i < 150; i++){
        const square = document.createElement('div');
        const red = Math.floor(Math.random() * 255);
        const green = Math.floor(Math.random() * 255);
        const blue = Math.floor(Math.random() * 255);
        const color = 'rgb('+red+','+green+','+blue+')';
        square.css('background-color', color);
		square.setAttribute('class', 'square');
		colorPalette.appendChild(square);
	}
}
//... bottom of file
makePalette();

