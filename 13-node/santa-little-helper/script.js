const fs = require('fs');

fs.readFile('./hello.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// append to a file
// fs.appendFile('./hello.txt', ' This is so cool', (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

// write
fs.writeFile('bye.txt', 'sad to see you go', (err) => {
  if (err) throw err;
  console.log('file written');
});

// delete a file
// fs.unlink('bye.txt', (err) => {
//   if (err) throw err;
//   console.log('file deleted');
// });
