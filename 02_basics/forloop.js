// for(let index = 0; index <= 10; index++) {
//     console.log(index);
// }

for(let i = 1; i <= 10; i++) {
    for(let j = 1; j <= 10; j++) {
        // console.log(i  * j)
    }
}

let myArray = ["Batman", "Superman", "SpiderMan"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}

// Break & continue

// for (let i = 0; i < 10;  i++) {
//     if (i == 5) {
//         console.log(`Detected 5`)
//         break;
//     }
//     console.log(`value of i is ${i}`)
// }

for (let i = 0; i < 10;  i++) {
    if (i == 5) {
        console.log(`Detected 5`)
        continue;
    }
    console.log(`value of i is ${i}`)
}
