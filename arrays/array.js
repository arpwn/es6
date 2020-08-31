"use strict";

//Array declaration
let bikes = ['ducati', 'aprilia'];

//Array destructuring
let [x, y] = bikes;

//Console.log
console.log(x);
console.log(y);

//print array[0]
const h1 = document.createElement('h1');
h1.textContent = x;

document.body.appendChild(h1)

//--------------------------------------

//Nested array
function getChars() {
    return [
        'Big',
        'Heavy',
        ['Brown', 'Black', 'Red']
    ];
}

//Destructuring
let [
    size,
    weight,
    [
        color1,
        color2,
        color3
    ]
] = getChars();

//Console.log
console.log(color1, color2, color3);

const para = document.getElementById("para").innerHTML = color1;