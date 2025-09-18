// Reduce
 
let arr=[1,2,3,45,6,7,8,9,10];

let val=arr.reduce((acc,cur)=>{ 
    return acc+=cur
},0);
console.log('~ val:', val);


// HOF: Creates a reducer for summing a property.

const items =[
    {name: 'Book', price: 300},
    {name: 'Pen', price: 50},
    {name: 'Notebook', price: 150},
];

const createSumReduce = (prop) => {
    return (acc, obj) => acc + obj[prop];
};

const totalprice = items.reduce(createSumReduce('price'), 0);

// Object 

const fruits = ['apple','banana','apple','orange','banana','apple'];

const countFruits = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});

// String array and with single string value


let str = 'masaaii';

let funcStr = str.split('');
console.log('-> funcStr:', funcStr);

const countString = funcStr.reduce((acc, strings) =>{
    acc[strings] = (acc[strings] || 0) + 1;
    return acc;
}, {});
console.log('~ countString:', countString);


