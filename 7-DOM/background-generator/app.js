const currentBG = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const btnColorGenerator = document.getElementById('colorGenerator');
const body = document.body;

const setGradient = (elem) => {
  elem.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
};

const setCurrentColorHeading = () => {
  currentBG.textContent = `${body.style.background};`;
};

const changeColors = () => {
  setGradient(body);
  setGradient(btnColorGenerator);
  setCurrentColorHeading();
};

const generateRandomColors = () => {
  let color = '#';
  let chars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'a', 'b', 'c', 'd', 'e', 'f'];
  for (let i = 0; i < 6; i++) {
    color += chars[Math.floor(Math.random() * chars.length)];
  }
  return color;
};

document.addEventListener('DOMContentLoaded', changeColors);

// The input event fires when the value of an <input>, <select>, or <textarea> element has been changed.
color1.addEventListener('input', changeColors);
color2.addEventListener('input', changeColors);

btnColorGenerator.addEventListener('click', () => {
  color1.value = generateRandomColors();
  color2.value = generateRandomColors();
  changeColors();
});
