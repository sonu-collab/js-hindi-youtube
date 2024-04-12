marvel_heros = ["Tony Stark", "Thor", "Spider-Man"]
dc_heros = ["batman", "superman","Joker"]
// console.log(marvel_heros)
// console.log(dc_heros)
const all_heros  = marvel_heros.concat(dc_heros)
// console.log(all_heros)

let real_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// console.log(real_array)
let another_real_array = real_array.flat(Infinity)
// console.log(another_real_array)

console.log(Array.isArray("Banana"))
console.log(Array.from("Banana"))
console.log(Array.from({name: "Banana"}))
