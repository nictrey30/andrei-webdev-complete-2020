// object spreaad operator
const animals = {
  tiger: 25,
  lion: 5,
  monkey: 2
};

const { tiger, ...rest } = animals;
console.log(tiger, rest);

const array = [1, 2, 3, 4, 5];

const sum = (nums) => {
  return nums.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
};

console.log(sum(array));
