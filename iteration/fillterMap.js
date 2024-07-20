// //

// const coding = ['js','python','java','c++','ruby']

// const values = coding.forEach((item) => {
//     return item // undefined
// })

// console.log("value of "values)

// const myNum = [4,5,35,6,3,5,3,5,3]

// const num = myNum.filter((num) => num > 4) // call back
// // or // 

// console.log(num)


// const newNums = []

// myNum.forEach((element) => {
//     if(element>4){
//         newNums.push(element)
//     }
// });

// console.log(newNums)

// Map method

const myNumbers = [5,5,52,53,525,76]

//const newNums = myNumbers.map( (num) => {return num+12})

// after adding 12 in each element
//console.log(newNums)

// chaining

const newNums = myNumbers.map( (nums) => nums * 10).map( (num) => num + 12)
                        .filter( (nums ) => nums >= 30)

// after chainning
console.log(newNums);