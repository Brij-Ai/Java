/// Others loops

// ['','','']
// [{},{}]

const arr = ['new',4,5,35,true]
// for of loop
// this is too easy loop
// same as for loop

for (const num of arr){
    console.info(num);
}

// for of loop on strings

const greatings = "Welcome to Js"
for( const great of greatings){
    console.info(`Each char : ${great}`);
}

// Map consist only uniques value
// maps are not itratiable using for in loop
const map = new Map()
map.set('IN', "India")
map.set('USA', "America")
console.log(map);

// for of loop
for(const key of map){
    console.log(key);
}
// map itratiable using for of
for(const [key, value] of map){
    console.log(key, value);
}
//object



