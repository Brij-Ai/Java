// Objects 
// objects is not itratiable by for of loop
const myObj = {
    js:'JavaScript',
    cpp: 'C++',
    py:'python'
}

// for in loop

for(const key in myObj){
    console.log(`key : ${key}`);
}
/////////////////////////////////
// printing values of objects
for(const key in myObj){
    console.log(myObj[key]);
}

// for in loop on array
const programing = ['cpp','py','swift','kotlin']
for(const key in programing){
    console.info("array", programing[key]);
}

