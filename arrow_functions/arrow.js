"use strict";

//add arrow function
let add = (x,y) => x + y;

//rest
let rest = (x,y) => x - y;

//call add function
const h1 = document.getElementById('title').innerHTML = `Suma: ` + add(10,20);

//call rest function
const h2 = document.getElementById('title2').innerHTML = `Resta: ` + rest(20,10);

