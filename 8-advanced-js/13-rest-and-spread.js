// rest parameter
const double = (...nums) => nums.map((num) => num * 2);
console.log(double(4, 5, 3, 2));

// spread syntax
const people = ['shaun', 'ryu', 'crystal'];
console.log(...people);
const members = ['mario', 'chun-li', ...people];
console.log(members);

// spread syntax - objects
const person = {
  name: 'shaun',
  age: 30,
  job: 'web dev'
};
// clone person
const clone1 = { ...person };
const clone2 = Object.assign({}, person);
console.log(clone1 === person, clone2 === person); // false false
