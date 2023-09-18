const add = (x, y) => x + y;
const PI = 3.14159;
const square = (x) => x * x;

// // we can export a string
// module.exports = "Test";

// but it is usually an object
module.exports.add = add;
module.exports.square = square;
module.exports.PI = PI;
