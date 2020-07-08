// string padding
console.log('Turtle'.padStart(10, '0')); // 0000Turtle
console.log('Turtle'.padEnd(10, '0')); // Turtle0000

// trailing commas
const fun = (a, b, c) => console.log(a);
fun(1);

// Object.values
// Object.entries
let obj = {
  username: 'Santa',
  location: 'Paliluwa',
  country: 'Norway'
};

Object.keys(obj).forEach((key) => {
  console.log(key, obj[key]);
});

Object.values(obj).forEach((value) => console.log(value));

Object.entries(obj).forEach(([key, value]) => console.log(`${key}: ${value}`));

// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
('     ||<- Start line');
('       🐢');
('       🐇');
turtle = turtle.padStart(8);
rabbit = rabbit.padStart(8);

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);

// #3) Get the below object to go from:
let obj2 = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
};
// to this:
('my name is Rudolf the raindeer');
let message = Object.entries(obj2).reduce(
  (acc, [key, value]) => acc + `${key} ${value} `,
  ''
);
console.log(message);
