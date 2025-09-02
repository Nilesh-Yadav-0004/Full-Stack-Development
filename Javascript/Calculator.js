// Addition

function add (a,b){
    return a+b;
}

// Subtraction

function sub (a,b){
    return a-b;
}

// Multiplication

function multiply (a,b){
    return a*b;
}

// Division

function Divide (a,b){
    return a/b;
}

function calculator(num1, num2, operator){
    let result;
    switch(operator){
        case '+':
            result =add(num1, num2);
            break;
        case '-':
            result =sub(num1, num2);
            break;
        case '*':
            result =multiply(num1, num2);
            break;
        case '/':
            result =Divide(num1, num2);
            break;
        default:
            return "Invalid Operator!";
    }
    return result;
}

console.log(calculator(20, 7,'+'));
console.log(calculator(20,7,'-'));
console.log(calculator(20,7,'*'));
console.log(calculator(20,7,'/'));




let num1= 10;
let num2= 20;
let operator="*";

function calc(...arr){
    let n1=arr[0];
    let n2=arr[1];
    let s=arr[2];

    switch(s){
        case '+':
            return n1+n2;
        break;
        case '-':
            return n1-n2;
        break;
        case '*':
            return n1*n2;
        break;
        case '/':
            return n1/n2;
        break;
        default:
            return 'Please enter the valid value & Operator';
    }
}