class Vehicle {
    run(){
        console.log("Vehicle is running");
    }
}

class Car1 {
    run(){
        console.log("Car is running");
    }
}

class Truck {
    run(){
        console.log("Truck is running");
    }
}

let v1 = new Vehicle();
let v2 = new Car1();
let v3 = new Truck();

class Animal {
    speak(){
        console.log("Animal speaks");
    }
}

class Dog extends Animal{
    speak(){
        console.log("Dog barks");
    }
}

class Cat extends Animal{
    speak(){
        console.log("Cat meows");
    }
}

function makeSound(animal){
    animal.speak();
}

let dog = new Dog();
let cat = new Cat();

makeSound(dog);
makeSound(cat);

const printer = {
    print: () => console.log("Default print"),
};

const pdfPrinter = {
    print: () => console.log("Printing PDF"),
};

const htmlPrinter = {
    print: () => console.log("Printing HTML"),
};

function startPrint(printerObj){
    printerObj.print();
}

startPrint(pdfPrinter);
startPrint(htmlPrinter);

