class Car {
    constructor(n, b){
        this.name = n;
        this.name = b;
    }
    showDetails(){
        console.log(`${this.name} ${this.brand}`);
        return `${this.name} ${this.brand} ${this.buyer}`
    }
}

/* let c1 = new Car("desire", "suzuki");
console.log(c1);
console.log(c1.showData()); */

class SUV extends Car {
    constructor(x, y,z){
        super(x, y);
        this.buyer = z;
    }
}

let c1 = new SUV("defender", "landrover", "Nilesh_yadav");
console.log('~ c1:', c1);
console.log(c1.showDetails());

class miniSUV extends SUV {
    constructor(x,y,z,m){
        super(x,y,z);
        this.look=m
    }
}

let c1 = new miniSUV("defender", "landlover", "Nilesh_yadav", "sporty");
console.log('~ c1:', c1);
