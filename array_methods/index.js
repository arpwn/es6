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

// ---------------



let numbers = [1,2,3,4];

const sub2 = document.getElementById("sub2").innerHTML = "Join method";

const join = document.getElementById("join").innerHTML = 'Numbers: ' + numbers.join("  ");
const join2 = document.getElementById("join2").innerHTML = 'Join: ' + numbers.join(".");