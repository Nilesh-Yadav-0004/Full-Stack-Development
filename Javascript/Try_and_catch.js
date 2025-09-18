// Syncronous

/* let prom = new Promise(function (resolve, reject){
    let data = true;

    if(data) {
        resolve("got the data!!!");
    }else{
        reject("not getted?????");
    }
});

prom
    .then((res) =>
     console.log(res))
    .catch((ress)=>console.log(ress)); */


    // Asyncronous

console.log('A');

let ice_cream = new Promise((res,rej)=> {
    let got_ice_cream;
    console.log('B');

    // $ setTimeout(()=>{},delay)

    setTimeout(()=>{
        got_ice_cream = true;
        if(got_ice_cream) {
            res(got_ice_cream);
        }else{
            rej(got_ice_cream);
        }
    },3000);

    console.log('C');
 });  /* here i created new Promises */
  
    // we started the promises

console.log('D');

console.log('~ice_cream:', ice_cream);

ice_cream
    .then(()=>{
        console.log('eat ice cream');
    })
    .catch(()=>{
        console.log('call mommy');
    });

console.log('E');
