// switch basic in Javascript

let flag  = false;

switch(false){
    case true:
        console.log('true');
        break;
    case false:
        console.log('false');
        break;
    default:
        console.log('nothing');
}

// switch Case in Javascript 

let key = 1;

switch (key) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    default:
        console.log('Holiday');
}


/* Practice Questions for Switch Case in Javascript  */

// Q1. Take a number (1-7) print the day of the week(1 = Monday, 7 = Sunday)?.

let week =2;
switch (week) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    default:
       console.log('Sunday');
}


// Q2. Input a character (a,e,i,o,u).Print "Vowel" if it's a vowel,otherwise "Consonant".

let char = "b";
 
switch (char) {
    case "a":
        console.log('Vowel');
        break;
    case "e":
        console.log('Vowel');
        break;
    case "i":
        console.log('Vowel');
        break;
    case "o":
        console.log('Vowel');
        break;
    case "u":
        console.log('Vowel');
        break;
    default:
        console.log('Consonant');
 }


//  Q3. Take a month number (1-12). Print the month name.

let month = 10;

switch (month) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    case 4:
        console.log('April');
        break;
    case 5:
        console.log('May');
        break;
    case 6:
        console.log('June');
        break;
    case 7:
        console.log('July');
        break;
    case 8:
        console.log('August');
        break;
    case 9:
        console.log('September');
        break;
    case 10:
        console.log('September');
        break;
    case 11:
        console.log('October');
        break;
    default:
        console.log('December');
}

// Q4. Input a number (1-4). Print: 1->Addition.2->Subtraction.3->Multiplication.4->Division.

let number = 2;

switch (number) {
    case 1:
        console.log('Addition');
        break;
    case 2:
        console.log('subtraction');
        break;
    case 3:
        console.log('Multiplication');
        break;
    default:
        console.log('Division');
}

// Q5. A user selects a drink: c=coffee. T=Tea. J=Juice. W=Water. Print the Selected item.

let drink = "T";

switch (drink) {
    case "C":
        console.log('coffee');
        break;
    case "T":
        console.log('Tea');
        break;
    case "J":
        console.log('Juice');
        break;
    default:
        console.log('Water');
}