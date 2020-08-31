//getElemetById
const title = document.getElementById('title').innerHTML = 'ES6 Objects';

//createElement
const sub = document.createElement('h2');
sub.textContent = 'Games';
document.body.appendChild(sub);

//Object declaration
let game = {
    name: 'Warzone',
    type: 'Shooter'
};

//Object destructuring
let {
    name,
    type
} = game;

//Console.log
console.log(name);
console.log(type);

//createElement
const n = document.createElement('p');
n.textContent = `Name: ${name}`;
const t = document.createElement('p');
t.textContent = `Genre: ${type}`;

document.body.appendChild(n);
document.body.appendChild(t)
