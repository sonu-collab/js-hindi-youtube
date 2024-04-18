const myNums = [1, 2, 3]
const myTotal = myNums.reduce(function (accumulator, currentvalue) {
    return accumulator + currentvalue;
})
console.log(myTotal)
