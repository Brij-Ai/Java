class person{
    constructor(name = "Unknown"){
        this.name = name
    }
    intruduction(name){
        console.log(`Hello everyone 🙌🙌, I am ${this.name}`);
    }
}

const brij = new person('brij')
brij.intruduction()