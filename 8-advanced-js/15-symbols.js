// Symbol is a primitive type, we can pass identifiers to the Symbols to describe what they are
const symbolOne = Symbol('a generic name');
const symbolTwo = Symbol('a generic name');

console.log(symbolOne, typeof symbolOne);
console.log(symbolOne === symbolTwo);
// Symbols can be used as keys or property names in objects
const ninja = {};
ninja.age = 30;
ninja['belt'] = 'orange';
ninja['belt'] = 'black';
// we can't give an object the same two properties which are basically the same except with Symbols

ninja[symbolOne] = 'ryu';
ninja[symbolTwo] = 'shaun';
console.log(ninja);
// { age: 30,
//   belt: 'black',
//   [Symbol(a generic name)]: 'ryu',
//   [Symbol(a generic name)]: 'shaun' }
