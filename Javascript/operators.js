//Arithmetic operator
let n1 =3,
    n2=4;

let mul = n1 * n2;
let dev = n1 / n2;
let sum1 = n1 + n2;
let sub1 = n1-n2;
let expo = n1 ** n2;

// Assignment operator

/* let name = 'Nilesh Yadav';
let age = 20;
let maried = false; */

// Comparison operator 
 let num1 = 3;
 console.log('~ num1:', typeof num1);
 let num2 ="3";
 console.log('~ num2:', typeof num2);

 console.log(' Checking value:', num1 === num2);


//  Logical operator //
/*     
    AND --> && 
    (Both should be true )
    eg:- (T&&T=T) 

    OR --> || 
    (Atleast one will be true)
    eg:-(T||F=T)

    NOT --> !
    (Switch the current value)
    eg:- */



    // Bitwise operator
    // Binary Number
    let number = 50;
    let binaryConv = number.toString(2);
    console.log('binaryConv:', binaryConv);
    let bin_To_num = parseInt(binaryConv, 2);
    console.log('bin_To_num:', bin_To_num);
    

    let num66 = 15;
    let num77 = 12;
    let binaryConv1 = num66.toString(2);
    console.log()

    // Concatination 

    let name8 = 'Nilesh';

    let sur_name = 'Yadav';

    let full_name = name8 + " " + sur_name;
    console.log('full_name' + full_name);

    let married = false;

    let answer = '${name8} ${sur_name} is not married ${married}';

    console.log('answer' + answer);

    // Ternary operator //

    /* let valcheck = 1 > 18 ? true : false;
    console.log('valcheck' + valcheck);
 */
    /* Type operator */

   /* let age=function(){};
   console.log('age' + typeof age);

   let valcheck = age === 18 ? true : false;
   console.log('valcheck:', valcheck); */

   /* Spread and rest operators */

//    let arr = [1, 2, 3, 4];

//    let newArr = [...arr, 5, 6, 7, 8];
//    console.log('newArr:', newArr);


      /* rest operator */

    //   const sum = (...xyz) => {
    //     console.log("a:", a, b, c);
    //     console.log('args:', xyz);
    //   };

    //   sum(1, 2, 3);

    