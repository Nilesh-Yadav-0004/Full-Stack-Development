let array = [1,2,6,4,5,3];
let index=null;

// without in-build approach

for(let i=0;i<array.length;i++){
    if(array[i] === 5) index+=i
}

console.log(index);

// in-build approach

let dataIndex=array.indexOf(5);
console.log('~ dataIndex:', dataIndex);

let newIndex=array.findIndex((el)=>el===5);
console.log('~ newIndex:', newIndex);


//  # push or pop

let array1 = [1,2,6,4,5,3];
console.log('~ array1:', array1);
array1.pop();
array1.push();
array1.push(9);
console.log('~ array1:', array1);

// Shift and unshift 

array1.shift();
console.log('~ array1:', array1);

array1.unshift();
console.log('~ array1:', array1);


// Delete Array 
let array2 = [10,15,20,25,30];
delete array2[4];
console.log('~ array2:', array2);

// splice & Slice

let newArr=array1.splice(3,1,"Nilesh", 'Yadav');
console.log('~ array1:', array1);

// Slice

let newArr1=array1.slice(3,5);
console.log('newArr:', newArr);

// Strings in ArrayMethod

let str='   nilesh yadav    ';

let newstr=str.trim();

let upper=newstr.toUpperCase();

let lower= upper.toLowerCase();

let arrstr=newstr.split("");

console.log('~ newstr:',upper);
console.log('~ newstr:',lower);

// String 