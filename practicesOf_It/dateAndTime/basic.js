// const mydate =  Date()
// console.log(mydate);

// let year = new Date(2024,6,30)
// console.log(`Year:${year.getFullYear()} Hour: ${year.getHours()}`);

// cretaing date object
//  let now = new Date()
//  console.log(now);
// const specificDate = new Date(2024,8,39)
// console.log(specificDate);

// const dateFromString = new Date('2024,05,23')
// console.log(dateFromString);

// getting Date components
// const now = new Date()
// let year = now.getFullYear()
// console.log(year);
// console.log(now.toLocaleString());  // 31/7/2024, 7:19:01 pm
// console.log(now.getHours())

// const now = new Date()
// now.setHours(19)
// console.log(now.getHours());


// let now = new Date()
// let dateFormat = now.toDateString().slice(0,3)
// console.log(dateFormat); 

// let myBd = new Date(2006,3,2)

// console.log(myBd.toDateString().toLocaleUpperCase());

let date01 = new Date('2024-04-02')
let date02 = new Date('2000-09-03')

let dateDefference = date01 - date02
console.log(`Days : ${(dateDefference/(1000 * 3600 * 24))}`);