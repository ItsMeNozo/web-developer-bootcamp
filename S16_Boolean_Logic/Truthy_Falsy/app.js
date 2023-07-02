const userInput = prompt("Enter something");

if (userInput) {
    console.log("TRUTHY!")
} else {
    console.log("FALSY!")
}

// if (0) {
//     console.log("TRUTHY")
// } else {
//     console.log("FALSY")
// }

// if (NaN) {
//     console.log("TRUTHY")
// } else {
//     console.log("FALSY")
// }

// if (undefined) {
//     console.log("TRUTHY")
// } else {
//     console.log("FALSY")
// }

// if (' ') {
//     console.log("TRUTHY")
// } else {
//     console.log("FALSY")
// }

const day = 2; 
switch (day){
    case 1: 
        console.log("Monday!"); 
        break; 
    case 2: 
        console.log("Tuesday!"); 
    default: 
        console.log("Invalid number!"); 
}