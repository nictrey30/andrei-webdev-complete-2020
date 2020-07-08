let obj = {
  name: 'John',
  age: 33,
  location: 'Ploiesti'
};
let clone = Object.assign({}, obj);
console.log(clone === obj); // false

// cloning objects using the spread operator
let clone2 = { ...obj };
console.log(clone2 === clone); // false

obj.location = 'Bucuresti';
console.log(clone.location); // Ploiesti

// deep cloning
let superClone = JSON.parse(JSON.stringify(obj));
