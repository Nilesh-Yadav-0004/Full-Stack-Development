// HOF Higher Order Functions

// map

let arr =[1,7,7,3,2,7,8,4,7,0];

let newArr= arr.map((elements,index,self)=>{
    /* console.log('~ self:', self);
    console.log('~ index:', index);
    console.log('~ elements:', elements); 
    
    */

    if(elements=== 7) {
        newArr.push(elements);
        return elements
    };
})

console.log('~ newArr:', newArr);

// filter method

let filterData=arr.filter((elements)=>{
    if(element=== 7) return elements;
});

console.log('~ filterData:', filterData);

/* 
-> callBack Functions

    1. ()=>{};

    2. function(){};
*/




// forEach


let newData=arr.forEach((elements,index,self)=>{
    console.log('~ self:', self);
    console.log('~ index:', index);
    console.log('~ elements:', elements);
     if(elements===7) console.log(elements);
})

console.log('~ newData:', newData);

