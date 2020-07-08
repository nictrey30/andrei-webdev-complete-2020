const basket = ['apples', 'oranges', 'grapes'];

// for of - array, strings
// Iterating - we are able to go one by one through the element we are iterating over. The element is "iterable"
for (fruit of basket) console.log(fruit);

// for in - works with objects, loop over and see the object properties
// enumerating (properties of an object are enumerable)
let detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
};
for (key in detailedBasket) console.log(detailedBasket[key]);
