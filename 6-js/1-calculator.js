// letiables
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num1Display = document.getElementById('num1Display');
const num2Display = document.getElementById('num2Display');
const operationsList = document.querySelector('ul');
const result = document.querySelector('#result');

const validateNum = (str) =>
  !Array.from(str.trim()).reduce((foundLetter, char) => {
    return foundLetter || isNaN(parseInt(char));
  }, false);

const validateInput = (num) => {
  while (!validateNum(num)) {
    num = prompt('please a integer number: ');
  }
  return parseInt(num);
};

const displayNum = () => {
  let num = prompt('Enter first number: ');
  num = validateInput(num);
  return num;
};

num1.addEventListener('click', () => (num1Display.textContent = displayNum()));
num2.addEventListener('click', () => (num2Display.textContent = displayNum()));

const add = (x, y) => x + y;
const diff = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => Number((x / y).toFixed(2));

const calculate = (x, y, callbackFn) => {
  return callbackFn(x, y);
};

operationsList.addEventListener('click', (e) => {
  let x = parseInt(num1Display.textContent);
  let y = parseInt(num2Display.textContent);
  switch (e.target.id) {
    case 'add':
      result.textContent = calculate(x, y, add);
      break;
    case 'multiply':
      result.textContent = calculate(x, y, multiply);
      break;
    case 'diff':
      result.textContent = calculate(x, y, diff);
      break;
    case 'divide':
      result.textContent = calculate(x, y, divide);
      break;
  }
});
