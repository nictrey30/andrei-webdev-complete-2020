const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const database = {
  users: [
    {
      id: '123',
      name: 'john',
      email: 'john@gmail.com',
      password: 'cookies',
      // entries -> how many times the user has submitted photos
      entries: 0,
      joined: new Date()
    },
    {
      id: '124',
      name: 'sally',
      email: 'sally@gmail.com',
      password: 'bananas',
      entries: 0,
      joined: new Date()
    }
  ]
};

app.get('/', (req, res) => {
  res.send(database.users);
});

app.post('/signin', (req, res) => {
  database.users.forEach((user) => {
    if (user.email === req.body.email && user.password === req.body.password) {
      res.send(`${user.name} has signed in`);
    }
  });
  res.status(400).json('error loggin in');
});

app.post('/register', (req, res) => {
  const { email, name, password } = req.body;
  database.users.push({
    id: '125',
    name,
    email,
    password,
    entries: 0,
    joined: new Date()
  });
  res.json(database.users[database.users.length - 1]);
});

app.listen(3000, () => console.log('server started on port 3000'));

/*
/signin --> POST = success/fail
/register --> POST = user
/profile/:userId --> GET = user
/image --> PUT = user
*/
