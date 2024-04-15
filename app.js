
let fullName = 'Quinten De Cleyn'

const usStates = 50;

var val1 = 5;
var val2 = 4;
var add=(val1 + val2);

function sayHello() {
    alert('Hello World!')
}

sayHello();

function checkAge(name, age) {
    if (age < 21) 
    alert("sorry " + name + ", you aren't old enough to view this page!")

}

checkAge('charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('john', 17);


let favoriteVeggies = ['cucumber', 'tomato', 'lettuce', 'eggplant'];

for (let x = 0; x < favoriteVeggies.length; ++x) {
    console.log(favoriteVeggies[x])
}

let pet = {
    namepet: 'trixie',
    breedpet: 'cocker spaniel'
}
console.log(pet)


let fullerNames = [
    {name: 'Dave', age: 22},
    {name: 'Lisa', age: 20},
    {name: 'Burt', age: 17},
    {name: 'James', age: 27},
    {name: 'Pieter', age: 15}
]

for (let i = 0; i < fullerNames.length; ++i) {
    checkAge(fullerNames[i].name, fullerNames[i].age);
}


function getLength(WordFunction) {
}

let WordFunction = ''; 

let WordNumber = getLength

if (getLength % 2 === 0) {
    console.log('The world is nice and even!')
} else {
    console.log('The world is an odd place!')
}

getLength ('hello world');

