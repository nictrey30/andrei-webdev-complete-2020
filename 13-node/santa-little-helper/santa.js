const fs = require('fs');
let patterns = {
  upFloor: /\(/g,
  downFloor: /\)/g,
  floor: /\(|\)/g
};

const floors = (data, regex) => data.match(regex);

fs.readFile('./santa.txt', 'utf-8', (err, data) => {
  console.time('result');
  if (err) throw err;
  // part 1
  console.log(
    `The result is: ${
      floors(data, patterns.upFloor).length -
      floors(data, patterns.downFloor).length
    }`
  );
  // part 2
  let floorsArray = floors(data, patterns.floor);
  let currentLevel = 0;
  floorsArray.every((floor, index) => {
    currentLevel = floor === '(' ? currentLevel + 1 : currentLevel - 1;
    if (currentLevel === -1) {
      console.log(`Santa enters the basement first time at floor ${index + 1}`);
      return false;
    } else {
      return true;
    }
  });
  console.timeEnd('result');
});
