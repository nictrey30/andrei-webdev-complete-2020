// Make a keyless car!
// This car will only let you drive if you are over 18. Make it do the following:

//using prompt() and alert(), ask a user for their age.
// IF they say they are below 18, respond with:
// "Sorry, you are too young to drive this car. Powering off"

// IF they say they are 18, respond with:
// "Congratulations on your first year of driving. Enjoy the ride!"

// IF they say they are over 18, respond with:
// "Powering On. Enjoy the ride!"

let ageInputBtn = document.querySelector('button');

const validateNum = (str) =>
  !Array.from(str.trim()).reduce((foundLetter, char) => {
    return foundLetter || isNaN(parseInt(char));
  }, false);

const validateInput = (age) => {
  while (!validateNum(age)) {
    age = prompt('please a correct age: ');
  }
  return parseInt(age);
};

ageInputBtn.addEventListener('click', () => {
  let age = prompt('enter your age: ');
  age = validateInput(age);
  if (age < 18) {
    alert('Sorry, you are too young to drive this car. Powering off');
  } else if (age === 18) {
    alert('Congratulations on your first year of driving. Enjoy the ride!');
  } else if (age > 99) {
    alert('Powering Off. You old fart!');
  } else {
    alert('Powering On. Enjoy the ride!');
  }
});
