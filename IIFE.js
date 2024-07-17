// IIFE 
(function chai(){
    console.info(`DB CONNECTED`) // globol scope polution removing
})(); // ; it end of line for iife 

(function one(){
    console.info(`DB`) // this named iife
})();

// with perameter
((name) => {
    console.info(`name ${name}`) // this unnamed iffe 
})("kelly")
 
// this gives error becouse not end iife in above function if we are end of iife by ; then runs
// ((name) => {
//     console.info(`name ${name}`)
// })("kelly")
