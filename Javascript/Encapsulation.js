class Car2{
    #owner;
    constructor(x,y,z){
        this.name=x,
        this.brand=y,
        this.#owner=z
    }

    showPrivateVariable(){
        return `this is private variable ${this.#owner}`
    }
}

let c2 = new Car2("defender", "landrover", "Nilesh_yadav");
console.log('~c2:', c2.showPrivateVariable());