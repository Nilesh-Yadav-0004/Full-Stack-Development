/* DO While Loops  */

let count = 0;
do{
    count++
} while(count<10)


  /* Tasks for Do While */
// Counting Basics.

// Q. Write a program that uses a do...while loop to print numbers from 1 to 10.

let Count = 1;
do{
    count++
} while(Count < 10)

//  User Input Validation

// Q. keep asking the user to enter a number between 1 and 5 until they enter a valid number

let num = Process.argv[2];
console.log(typeof number);
do{
    console.log("please the number");
} while(number=== 1 || number=== 5)

    // Sum Until Zero.
// Q. Continuously ask the user to enter numbers and keep a running total until the user enters 0.

let total = 0;
let number;

do {
    number = ("0 to 20:");
    
    if (!isNaN(number)) {
        total += number;
    } else {
        console.log("That's not a valid number, try again.");
    }

} while (number !== 0);

console.log("Total sum: " + total);

// Q. The program picks a random number between 1 and 20. The user keeps guessing until they get it right.

let secretNumber = Math.floor(Math.random() * 20) + 1;
let guess;

do {
    guess = ("Guess a number between 1 and 20:");
    
    if (guess > secretNumber) {
        console.log("Too high! Try again.");
    } else if (guess < secretNumber) {
        console.log("Too low! Try again.");
    } else if (guess === secretNumber) {
        console.log("🎉 Correct! The number was " + secretNumber);
    } else {
        console.log("Please enter a valid number.");
    }

} while (guess !== secretNumber);


// Q. Ask the user for a number and to calculate its factorial.

let num1 = parseInt("Enter a number to find its factorial:");
let fact = 1;

if (isNaN(num) || num < 0) {
    console.log("Please enter a valid non-negative number.");
} else {
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    console.log("Factorial of " + num + " is " + fact);
}


// Q. Ask the user for a number and print its multiplication table up to 10 .

let num2 = 10;

if (isNaN(num)) {
    console.log("Please enter a valid number.");
} else {
    console.log("Multiplication Table of " + num + ":");
    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
}


// Q. Starting from a number entered by the user,count down to 1.

let num3 = 1;

if (isNaN(num) || num < 1) {
    console.log("Please enter a valid positive number.");
} else {
    for (let i = num; i >= 1; i--) {
        console.log(i);
    }
}

// Q. Keep prompting the user to enter the correct password until they match a predefined password.
// Q. Print all even numbers between 1 and 50.

let num4 =50;
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Q. Ask the user for a number and count how many digits it has. 



