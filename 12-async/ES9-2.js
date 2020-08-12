// finally
const fetch = require('node-fetch');

const urls = [
  'https://swapi.dev/api/people/1',
  'https://swapi.dev/api/people/2',
  'https://swapi.dev/api/people/3',
  'https://swapi.dev/api/people/4'
];

Promise.all(urls.map((url) => fetch(url).then((response) => response.json())))
  .then((person) => person.forEach((data) => console.log(data.name)))
  .catch((err) => console.log('oops!', err));
// .finally(() => console.log('promise finished!'));

// for await of -> to loop through our async-await calls
const urls2 = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
];

const getData = async () => {
  try {
    const [users, posts, albums] = await Promise.all(
      urls2.map(async (url) => {
        const response = await fetch(url);
        return response.json();
      })
    );
    console.log('users ', users);
    console.log('posts ', posts);
    console.log('albums ', albums);
  } catch (err) {
    console.log('oops, ', err);
  }
};

// getData();

const getData2 = async () => {
  // creating an array of fetch promises
  const arrayOfPromises = urls2.map((url) => fetch(url));
  // loop through the promises
  for await (let request of arrayOfPromises) {
    const data = await request.json();
    // console.log(data)
  }
};

// getData2()
