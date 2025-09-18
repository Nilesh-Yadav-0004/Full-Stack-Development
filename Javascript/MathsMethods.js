// useing method.

// Cubic value
let number = 25;

let ans = Math.pow(number, 3);
console.log('~ans:',ans);

// Squareroot Method

let number2 = Math.sqrt(number);
console.log('~ans:', ans);

let number3 = 25;

console.log('without inbuild', number3 ** (1/2));

// cubic root.

// Ceil

let num1 = 7.6;
console.log('> num1:',Math.ceil(num1));

// Floor

let num3 = 7.6;
console.log('> num3:',Math.floor(num3));

let number7 = 125;
console.log(Math.ceil(Math.ceil(Math.pow(number7, 1/3))));
console.log(Math.ceil(Math.floor(Math.pow(number7, 1/3))));

// fround

let num23 = 3.33;
console.log('-> num23:', Math.fround(num23));

// Random

let num2 = 6.5;
console.log('-> num2:', Math.round(num2));

function randomNumber(x) {
    console.log('-> randomNumber:', Math.round(Math.random() *x));
}
randomNumber(num2);

// log value 

let num77 = 16;
let num74 = 1;

console.log(Math.log(num77) / Math.log(num74));
console.log(Math.log2(num77));


