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

let x1=sum(1,2,3)
console.log(x);


// Arrow Function

const sum1=(first,second,third)=>{
    let sum1=first+second+third;
    return sum1
}

let x2=sum1(1,2,3)
console.log(x);




