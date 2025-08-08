/* Basics of Fuctions in JS */

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

let x=sum(1,2,3)
console.log(x);


// Arrow Function

const sum=(first,second,third)=>{
    let sum=first+second+third;
    return sum
}

let x=sum(1,2,3)
console.log(x);

