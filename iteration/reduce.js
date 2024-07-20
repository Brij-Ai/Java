
const myNumbers = [7,42,535,345]

const total = myNumbers.reduce((acc , currt) => {
    console.info(`acc: ${acc} and crrent: ${currt}`);
    return acc + currt
},0)
console.log(total);

// const total = myNumbers.reduce( (acc,cuurt) => acc+cuurt , 0)

const course = [
    {
    course: "web Dev",
    price: 999
},
    {
    course: "mobile Dev",
    price: 2999
},
    {
    course: " Data science",
    price: 599
},
    {
    course: "python",
    price: 1999
}
]

const TotalToPay = course.reduce((acc , pr) => acc + pr.price , 0)

// total price of course
console.log("Course Price",TotalToPay);