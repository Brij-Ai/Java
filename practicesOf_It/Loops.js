const obj = ["car","fruits","toy"]
for (let key in obj){
    console.log(`Keys : ${obj[key]}`);
    // console.log(key); results => 0 1 2 
}

for(let i of obj){
    // console.log(obj[i]); this case gives results undefined
    console.log(i); // its gives values of Object
}

const newObj = {
    Pro:"C++",
    language: "true"
}
// Objects are not iteratiable by for of loop
// for(let k of newObj){
//     console.log(newObj[k]);
// }

for(let j in newObj){
    console.log(newObj);
}