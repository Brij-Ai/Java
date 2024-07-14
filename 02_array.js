const marvelHeros = ["spider man0",'iron man','thor']
const dc = ['super man','flash','batman']
// marvelHeros.push(dc) //it creats array in arr
// console.log(marvelHeros)
// console.log(marvelHeros[3][1])

// const all_heros = marvelHeros.concat(dc) // it return new array
// console.log(marvelHeros)
// console.log(all_heros)

// speard operator
// const all_hero = [...marvelHeros, ...dc]
// console.log(all_hero)
// const another_arr = [3,4,2,4,[4,4,42,[5,5,3,2,4]],7,4,0]
// const real_heros = another_arr.flat(Infinity)//it conctate in one array
// console.log(real_heros)

// from method it convert into array any type element
console.log(Array.isArray("brij"))
console.log(Array.from('brij'))

console.log(Array.from({name:'brij'})) //intersting it return empty Array

// of method it can convert in array of any vriable
let score = 100
let score2 = 394
let score3 = 43
console.log(Array.of(score,score2,score3))