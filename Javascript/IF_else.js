// let age=18;

// if(age>=18){
//     console.log("yes you'r eligible to vote");
// }
// else{
//     console.log("you you'r not eligible to vote");
// }

// // ternary operator 

// let value = age>= 18 ? console.log("yes you'r eligible to vote "):  console.log ("yes you'r not eligible to vote ")

// //  practice Questions for If else 

// // Q. A number is given.check whether it is even or odd ?.

//  let n = 26;

//  if(n %2==0){
//     console.log("yes it is a Even number");
//  }
//  else{
//     console.log("No it is a odd number");
//  }

// // Q. Take a number. check if it is a Positive,Negative or Zero ?.
   
//  let number= 10;
     
//  if(number>0){
//     console.log("The number is positive");
//  }

//  if(number<0){
//     console.log("The number is Negative");
// }

// else{
//     console.log("The number is Zero");
// }
 
  
// // Q3. Enter two numbers. Find the greater one?.

// let num1 = 25;
// let num2 = 22;

// if(num1 > num2){
//     console.log("The num1 is greater then num2");
// }

// if(num2 > num1){
//     console.log("The num2 is greater then  num1")
// }
// else{
//     console.log("BOth are equal")
// }


// // Q. Take three numbers. Find the among them?.

// let num4 = 10;
// let num5 = 20;
// let num6 = 30;

// if(num1 > num2){
//     console.log("The num1 is greater than num3");
// }

// if(num2 > num1){
//     console.log("The num2 is greater than num1");
// }

// else{
//     console.log("All numbers are equal");
    
// }


// Q. A student score is given. Print the grade based on:- 90-100->A, 80-89->B, 70-79->C, 60-69->D, below 60->F.

// function grade(value){
//     if(value>=90 && value<=100)
//     {
//         console.log("A");
        
//     }

// else if(value>=80 && value<=89)
// {
//     console.log("B");
    
// }
// else if(value>=70 && value<=79)
// {
//     console.log("C");
    
// }

// else if(value>=60 && value<=69)
// {
//     console.log("D");
    
// }

// else{
//     console.log("F");
// }
// }
// grade(95)

// Q. A person's age is given. Check if they are: Child(0-12), Teen(13-19), Adult(20-59), Senior(60+).



// Q. Given a character, check if it is vowel or  consonant.

let char = 'E'; 

if (ch.length !== 1 || !(/[a-z]/.test(ch))) {
    console.log("W.");
} else {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        console.log(`${givenLetter} is a vowel.`);
    } else {
        console.log(`${givenLetter} is a consonant.`);
    }
}


// Q. Check if a number is divisible by both 3 and 5.

let num1 = 45; 

if (num % 3 === 0 && num % 5 === 0) {
    console.log(num + " is divisible by both 3 and 5.");
} else {
    console.log(num + " is NOT divisible by both 3 and 5.");
}

// Q. A number is divisible by either 4 or 6 but not both-> show true or false.

let num = 24; 

let divisibleBy4 = (num % 4 === 0);
let divisibleBy6 = (num % 6 === 0);

if ((divisibleBy4 || divisibleBy6) && !(divisibleBy4 && divisibleBy6)) {
    console.log(true);
} else {
    console.log(false);
}

// Q. Determine if the given day(eg."sunday") is a weekend or a weekday.

let dayName = "sunday"; 

let day = dayName.trim().toLowerCase();

if (day === "saturday" || day === "sunday") {
    console.log(dayName + " is a weekend.");
} else {
    console.log(dayName + " is a weekday.");
}


