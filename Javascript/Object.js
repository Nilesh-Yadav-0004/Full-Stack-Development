// $ object [key value pair]

let object={
    name:'Nilesh Yadav',
    age:21,
    maride:false,
    hobbies:["bgmi","cs","coc","cr","cc"],
    exp:{
        coName:'nilesh and co...',
        desig:"sde1",
        salary:'1lakh/monthly'
    },
    myFunc:()=>{
        return this.name;
    }
}

let nnn=object.myFunc();
console.log(nnn);

console.log(object.name);
console.log(object.age);
console.log(object.maride);

for(let key in object){
    console.log('${key} :  ${object[key]}');
}


// Array[indexing]

let arr =[[1,2,],3,4,[5]];
let arr1 =["mehfooz","khan","muzzu"];
let arr2 =[{name:"mehfooz",surname:"Khan",nickName:"muzzu"}];

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}