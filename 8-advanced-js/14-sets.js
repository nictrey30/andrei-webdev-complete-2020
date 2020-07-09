// sets - don't allow duplicates
const namesArray = ['ryu', 'chun-li', 'ryu', 'shaun'];
console.log(namesArray);
const namesSet = new Set(namesArray);
console.log(namesSet); // Set { 'ryu', 'chun-li', 'shaun' }

const uniqueNames = [...new Set(namesArray)];
console.log(uniqueNames); // [ 'ryu', 'chun-li', 'shaun' ]

const ages = new Set();
ages.add(20);
ages.add(25).add(30).add(15);
ages.delete(15);
console.log(ages, ages.size);
console.log(ages.has(30));

// sets are iterable
const ninjas = new Set([
  { name: 'Shaun', age: 30 },
  { name: 'Crystal', age: 29 },
  { name: 'Chun-Li', age: 32 }
]);
ninjas.forEach((ninja) => console.log(ninja));
