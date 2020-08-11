const fetch = require('node-fetch');
const urls = [
  'https://jsonplaceholder.typicode.com/users/1',
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/albums/1'
];

Promise.all(urls.map((url) => fetch(url).then((response) => response.json())))
  .then((responsesArray) => responsesArray.forEach((data) => console.log(data)))
  .catch((err) => console.log('ughhhh fix it!', err));
