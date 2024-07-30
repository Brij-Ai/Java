// Object.getOwnPropertyDescriptor()

console.log(Math.PI); // hard code value not changeable
Math.PI = 6
console.log(Math.PI);

const Vect = Object.getOwnPropertyDescriptor(Math,"PI")
Object.defineProperty(Math,"PI",{
    writable:true,
    enumerable: true
})

console.log(Vect);

const New = {
    name: "toy",
    price: "199",
    count : 8
}

console.log(Object.getOwnPropertyDescriptor(New, "name"));

Object.defineProperty(New,"name",{
    writable: true
})


