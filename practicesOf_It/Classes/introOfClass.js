// Defining classes
// Classes are in fact "special functions",

class Rectangle {
    constructor (hight, width){
        this.hight = hight
        this.width = width
    }
    calcuArea(){
        return `${this.hight * this.width} `
    }
    #className = 'Rectangle'
    print(){
        return this.#className
    }
}

// const square = new Rectangle(10,12)
// console.log(square.calcuArea(),square.className) 
// // ,square.className undefined
// console.log("class Name:",Rectangle.className); // for staic marked properties called by class not by instance
// console.log(square.print());

//----- inheritance -------

class Animal{
    constructor(name){
        this.name = name
    }
    speak(){
         console.log(`${this.name} can speak`)
    }
}

class lion extends Animal{
    speak(){
        console.log('lion can roer');
        super.speak()
    }
}

const l = new lion('lion')
l.speak()
