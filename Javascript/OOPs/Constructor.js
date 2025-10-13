// What is constructor.

// Constructor function
function Car(make, model, year){
    this.make = make,
    this.model = model,
    this.year = year
}

// call Class constructor
class Car{
    constructor(make, model, year){
        (this.make = make),(this.model = model),(this.year = year);
    }
}

const car1 = new Car('toyota', 'toyota', 1995);
const car2 = new Car('bmw', 'Sclass7', 2025);

// Power of this key word
const person = {
    name: 'reena',
    myFunc: function (){
        // this called function method bcz inside of object we write function
        console.log(this.name);
    },
};

person.myFunc();

function myName(){
    // eg:- how is the owner of the global variable
    console.log(this);
}

myName();

console.log(this);

// call - so in call we execute the code this manner.

let person2 = {
    name: 'rahul',
};

let person3 = {
    name: 'manoj',
};

function myFunctions(age, city){
    this.age = age;
    this.city = city;
}

myFunctions.call(person2, 24, 'pune');
console.log(person2);

// apply - so in apply we execute the code this manner.

let person4 = {
    name: 'sejal',
};

let person5 = {
    name: 'jignesh',
};

function myFunctions1(age, city){
    this.age = age;
    this.city = city;
}

myFunctions1.apply(person5, [24, 'pune']);

console.log('-> person5:', person5);

let person6 = {
    name: 'suresh',
};

let person7 = {
    name: 'ramesh',
};

function myFunctions3(age, city){
    this.age = age;
    this.city = city;
}

let myBind = myFunctions3.bind(person7, 24, 'pune');
console.log('~ myBind:', myBind);

myBind();
console.log(person7);