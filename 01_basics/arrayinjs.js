const myarr = [0, 1, 2, 3, 4, 5]
// console.log(myarr)
myarr.push(6)
// console.log(myarr)
myarr.pop()
// console.log(myarr)

// slice, splice
// slice
console.log("A ", myarr)
const myn1 = myarr.slice(1, 3) 
console.log(myn1)

console.log("B", myarr)

const myn2 = myarr.splice(1, 3)
console.log("C", myarr)
console.log(myn2)

