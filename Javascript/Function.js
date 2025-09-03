/* Basics of Functions in JS */

function nilesh(){
    console.log('hello nilesh');
}

nilesh()

// Function Return

function nilesh(){
    let name='nilesh';
    return name;
}

let x = nilesh();
console.log(x);

// Functions with Parameter

function sum(first,second,third){
    let sum=first+second+third;
    return sum
}

let x1=sum(1,2,3)
console.log(x);


// Arrow Function

const sum1=(first,second,third)=>{
    let sum1=first+second+third;
    return sum1
}

let x2=sum1(1,2,3)
console.log(x);


// Hosting,promise,Closure are most imp for interview

;
let number_1=0;
let number_2=5;

function annualDay(a,b){
    console.log('a);
     if(a>b){
        return 'this is the greater then b and the value of a is ${a}';
     }
     else{
        return 'this is the greater then a and the value of b is ${b}';
     }
}

// Normal Function

function annualDay(){
    console.log()
}
let ans = anualDay(number_1,number_2);
console.log('~ans:', ans);


// Arrow Function


let number_3=undefined;'
let number_4=5;

const anualDay=(a=40,b=60)=>{
    if(a>b){
        return 'this is the greater then b and the value of a is ${a}';
    }
    else{
        return 'this is the greater then a and the value of b is ${b}';
    }
}



