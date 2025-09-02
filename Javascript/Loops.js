     /* Basic  for loop */
for(let i=0; i<2;i++){
    console.log(i);
}
   
    /* Find the number from 1 to 20 */
for(let i=1; i<21; i++){
    console.log(i);
}

     /* Find even and odd number from 1 to 30 */

     for(let i=1; i<=30; i++){
    if(i % 2===0){
        console.log(i +" is even");
    }else{
        console.log(i +" is odd");
    }
    console.log();
}

    /* Find the prime number from 1 to 100  */

    //  for(let i=1; i<100; i++){
    //     if(i % j === 0){
    //         console.log(i +" is Prime number")
    //     }
    //  }
     

    //  Let arr=["Mehfooz",'Khan',"nilesh","Yadav"];

    // for (let i =0; i < arr.length; i++){
    //     console.log(arr[i]);
    // }



     /* Task for For Loop in JS */

        /* Q. Print the numbers from 1 to 10 using a for loop */

    // for (let i =1; i < 11, i++);{
    //     console.log(i);
    // }

        /* Q. Print the even the numbers between 1 and 50. */



    for (let i =1; i < 50; i++);
        if(i % 2 === 0);{
            console.log(i +"is even ");
        }

        /* Q. Print the sum of numbers from 1 to 100. */

    for (let i=1; i < 100; i++);{
        console.log(i);
    }

        /* Q. Print the multiplication table of 5. */

    // for (let i =1, i <=10; i++);{
    //     console.log("5 x " + i + " = " + (5 * i));
    // }

        /* Q. Count backward from 10 to 1 using a for loop.*/

    for (let i = 10; i >= 1; i--);{
        console.log(i);
   } 


        /* Q. Print all odd members between 1 and 100 */

    for (let i =1; i < 100; i++);
        if(i % 2 === 0);{
            console.log(i +"is odd number");
        }

        /* Q. Print the factorial of a given number using a for loop. */


let num = 2;
let fact = 1;

if (isNaN(num) || num < 0) {
    console.log("Please enter a valid non-negative number.");
} else {
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    console.log("Factorial of " + num + " is " + fact);
}



        /* Q.Count how many numbers between 1 and 100 are divisble by 1. */
    

let count = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 1 === 0) {
        count++;
    }
}

console.log("Numbers divisible by 1 between 1 and 100: " + count);

    
