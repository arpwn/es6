
"use strict";

const title = document.getElementById("title").innerHTML = "Array methods";
const sub = document.getElementById("sub").innerHTML = "Concat method";

//array declaration
let planets = ["Mars","Uranus","Venus"];
let newPlanet = ["Proxima centauri B"];

const array = document.getElementById("array").innerHTML = 'Planets: ' + planets.join(" · ");
const array2 = document.getElementById("array2").innerHTML = 'New planet: ' + newPlanet;

// .concat()
let concat = planets.concat(newPlanet);
//["Mars", "Uranus", "Venus", "Proxima centauri B"];

const res = document.getElementById("concat").innerHTML = 'Concatenation: ' + concat.join(" | ");