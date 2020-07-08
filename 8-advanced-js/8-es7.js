// includes
console.log('Helloooo'.includes('o'));
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('dog'));

// exponential operator
const square = (x) => x ** 2;
console.log(square(8));

// Solve the below problems:

// #1) Check if this array includes the name "John".
const dragons1 = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
console.log(dragons1.includes('John'));

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons2 = ['Tim', 'Johnathan', 'Sandy', 'Sarah', 'Johnella', 'Estera'];
const dragons2John = dragons2.filter((dragon) => dragon.includes('John'));
console.log(dragons2John); // [ 'Johnathan', 'Johnella' ]

// #3) Create a function that calulates the power of 10 of a number entered as a parameter
const calculatePow = (n) => 10 ** n;
console.log(calculatePow(3));

// #4) Using your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
