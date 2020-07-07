const first = () => {
  const greet = 'Hi';
  // second needs to remember what greet is
  const second = () => console.log(greet);
  return second;
};

const newFunc = first();
newFunc();

// Closures - a function ran. the function executed. it's never going to execute again.
// But it's going to remember that there are references to those variables. so the child scope always has access to the parent scope

// Currying - the process of converting a function that takes multiple arguments into a function that takes them one-at-a-time
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3); // (b) => a * b aka returns a function
console.log(curriedMultiply(3)(4)); // 12
const multiplyBy5 = curriedMultiply(5);
console.log(multiplyBy5(12)); // 60

// Compose - the act of putting two functions together to form a third function where the output of one function is the input of the other
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;

console.log(compose(sum, sum)(5)); // 7

// Avoiding Side Effects, functional purity
