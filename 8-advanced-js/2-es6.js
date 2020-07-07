// change everything below to the newer Javascript!

// let + const
// var a = 'test';
// var b = true;
// var c = 789;
// a = 'test2';
let a = 'test';
let b = true;
const c = 789;
a = 'test2';

// Destructuring
// var person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 50,
//   eyeColor: 'blue'
// };
// var firstName = person.firstName;
// var lastName = person.lastName;
// var age = person.age;
// var eyeColor = person.eyeColor;

let person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
  eyeColor: 'blue'
};

let { firstName, lastName, age, eyeColor } = person;

// Object properties
// var a = 'test';
// var b = true;
// var c = 789;

// var okObj = {
//   a: a,
//   b: b,
//   c: c
// };
let okObj = { a, b, c };
console.log(okObj);

// default arguments
// default age to 10;
// function isValidAge(age) {
//   return age;
// }
const isValidAge = (age = 18) => age;
console.log(isValidAge());

// Symbol
// Create a symbol: "This is my first Symbol"
let newSymbol = Symbol('This is my first Symbol');
console.log(typeof newSymbol, newSymbol);

// Arrow functions
// function whereAmI(username, location) {
//   if (username && location) {
//     return 'I am not lost';
//   } else {
//     return 'I am totally lost!';
//   }
// }
const whereAmI = (username, location) =>
  username && location ? 'I am not lost' : 'I am totally lost!';
console.log(whereAmI());
console.log(whereAmI('trey', 'Ploiesti'));
