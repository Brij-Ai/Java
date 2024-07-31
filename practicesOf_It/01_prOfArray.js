// creating a Array variable
// const Car = ['Bmw','valvo','lambo','MClearn']
// console.log(Car[2])

// const myCar = Array('newCar')
// myCar[1] = 'hello'
// console.log(myCar.length)
// console.log(myCar)

// for(const item of Car){
//     console.log(item);
// }

// const Fruit = ["banana" , "Mango", "cherry"]
// for(const lt of Fruit){
//     console.log(lt.toUpperCase() , `Length :${lt.length}`);
// }
// console.log(typeof Fruit);
// const newArr = Fruit.map ((fruits) => fruits.toLocaleUpperCase()) 
// console.log(newArr);
// console.log(typeof newArr);

const arr = []
console.log(typeof arr);
const arr2 = new Array(8,4,33,3)
console.log(typeof arr2)

let fn = function(){
    const numm = arr2.map((num) => num * 19)
    
    console.log(numm, typeof numm);
}

fn()
console.log(typeof numm)