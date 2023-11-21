let Hello = 'hello';
let World = 'World';

// Before ES6 (FORMA DE CONCADENAR STRINGS DE FORMA MAS RUSTICA)
let epicPhrase = Hello + ' ' + World;

// Forma de concadenar strings de forma mas sencilla
let epicPhrase2 = `${Hello} ${World}!`;
console.log(epicPhrase2);

// Multi-Line Strings
let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n" + "esto es otra linea";
console.log(lorem);

// Otra forma de hacer un Mulit-line
let lorem2 = `esto es una linea
esto es otra linea`;
console.log(lorem2);