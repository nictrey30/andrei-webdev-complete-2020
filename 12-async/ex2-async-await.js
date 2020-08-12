// ASYNC AWAIT
const fetch = require('node-fetch');
async function fetchUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  console.log(data);
}

const urls = [
  'https://jsonplaceholder.typicode.com/users/',
  'https://jsonplaceholder.typicode.com/posts/',
  'https://jsonplaceholder.typicode.com/albums/'
];

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const getData = async () => {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map((url) => fetchData(url))
    );
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
  } catch (err) {
    console.log('oops', err);
  }
};
getData();
