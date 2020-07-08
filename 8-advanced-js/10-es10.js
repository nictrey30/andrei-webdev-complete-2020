// flat -> method that we can use on arrays
const array = [1, [2, 3], [4, 5]];
console.log(array.flat()); // [ 1, 2, 3, 4, 5 ]

const array2 = [1, 2, [3, 4, [5, 6]]];
console.log(array2.flat()); // [ 1, 2, 3, 4, [ 5, 6 ] ]
console.log(array2.flat(2)); // [ 1, 2, 3, 4, 5, 6 ]

// we can tell .flat() how many layers to flatten the array

const entries = ['bob', 'sally', , , , , 'cindy'];
const cleanedEntries = entries.flat();
console.log(cleanedEntries); // [ 'bob', 'sally', 'cindy' ]

// flatMap() -> method that map every element with the help of mapping function, then flattens the input array element into a new array.

// trim
let userEmail = '       eddy@gmail.com';
let userEmail2 = 'johnny@gmail.com    ';
console.log(userEmail.trimStart());
console.log(userEmail2.trimEnd());

// fromEntries - transforms a list of key - value pairs into an object
let userProfiles = [
  ['commanderTom', 23],
  ['derekZlander', 40],
  ['hansel', 18]
];

let objProfiles = Object.fromEntries(userProfiles);
console.log(objProfiles); // { commanderTom: 23, derekZlander: 40, hansel: 18 }

// try - catch block
try {
  bob + 'hi';
} catch {
  console.log('you messed up');
}
