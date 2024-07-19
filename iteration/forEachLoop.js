// for each loop
const coding = ['c++','Java','JAvaScrpt']
// basics 
coding.forEach( function (item){
    console.log(item);
})

// Arrow function for for each loop
coding . forEach((itm) => {
    console.info(itm);
})

// by function as a reffernce

function print(itm){
    console.info(itm);
}
coding . forEach(print)

// this case [{},{},{}] 
const myCoding = [
    {
        programingName:"JavaScript",
        programingFileName:'js'
    },
    {
        programingName:"java",
        programingFileName:'object'
    },
    {
        programingName:"CPP",
        programingFileName:'CPP'
    }
]

coding.forEach((itm) =>{
    console.log(itm.programingName);
})