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
