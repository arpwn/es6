//Merge 2 arrays in ES6 shorthand

let apples = ['🍎', '🍏'];
let fruits = ['🍉', '🍊', '🍇', ...apples];  // <-- here

const arr1 = document.getElementById('array1').innerHTML = `Array: ${apples}`;
document.getElementById('merge').innerHTML = `Concat: ${fruits}`;
//=> ["🍉", "🍊", "🍇", "🍎", "🍏"]

//Merge 2 arrays in ES6 at the start
let fruits_start = [...apples, '🥭', '🍌', '🍒'];

document.getElementById('merge_start').innerHTML = `Concat start: ${fruits_start}`;

//Clone array shorthand
let fruits_clone = ['🍉', '🍊', '🍇', '🍎'];
let cloneFruits = [...fruits_clone];  // <-- here

document.getElementById('clone_array').innerHTML = `Clone array: ${cloneFruits}`;
//=> ["🍉", "🍊", "🍇", "🍎"]

//Destructuring assignment
let apples2 = ['🍎', '🍏'];
let [redApple, greenApple] = apples2;  // <-- here

document.getElementById('red').innerHTML = `Destructuring red: ${redApple}`; //=> 🍎
document.getElementById('green').innerHTML = `Destructuring green: ${greenApple}`; //=> 🍏
