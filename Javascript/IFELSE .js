let age=18;

if(age>=18){
    console.log("yes you'r eligible to vote");
}
else{
    console.log("you you'r not eligible to vote");
}

// ternary operator 

let value = age>= 18 ? console.log("yes you'r eligible to vote "):  console.log ("yes you'r not eligible to vote ")

//  practice Questions for If else 

// Q1. A number is given.check whether it is even or odd ?.

//  let number =26;

 if(number %2==0){
    console.log("yes it is a Even number");
 }
 else{
    console.log("No it is a odd number");
 }

// Q2. Take a number. check if it is a Positive,Negative or Zero ?.
   
 let number= 10;
     
 if(number>0){
    console.log("The number is positive");
 }
 else{
    if(number<0){
        console.log("The number is Negative");
    }
else{
    console.log("The number is Zero");
}
 }
  
// Q3. Enter two numbers. Find the greater one?.

let num1 = 25;
let num2 = 22;

if(num1 > num2){
    console.log("The num1 is greater then num2");
}
else{
if(num2 > num1){
    console.log("The num2 is greater then  num1")
}
else{
    console.log("BOth are equal")
}


// Q4. Take three numbers. Find the among them?.

let num1 = 10;
let num2 = 20;
let num3 = 30;

if(num1 > num2){
    console.log("The num1 is greater than num3");
}
else{
if(num2 > num1){
    console.log("The num2 is greater than num1");
}
else{
if(num3 > num2&num1){
    console.log("The num3 is greater than num2&num1");
}
else{
    // console.log(All num are equal);
}
