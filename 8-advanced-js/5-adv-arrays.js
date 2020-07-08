// Advanced Arrays
let array = [1, 2, 10, 16];

const double = [];
array.forEach((num) => double.push(num * 2));
console.log(double);

// map, filter, reduce
// the way map works is that you always need to return something
const mapArray = array.map((num) => num * 2);

// filter - filter the array with a condition
const filterArray = array.filter((num) => num < 10);
console.log(filterArray);

// reduce
const reduceArray = array.reduce((total, num) => total + num, 0);
console.log(reduceArray); // 29
