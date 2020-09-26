// const http = require('http');

// const server = http.createServer((req, res) => {
//   console.log('headers', req.headers);
//   console.log('method', req.method);
//   console.log('url', req.url);
//   res.setHeader('Content-Type', 'application/json');
//   const user = {
//     name: 'John',
//     hobby: 'skating'
//   };
//   res.end(JSON.stringify(user));
// });

// server.listen(3000);

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// if you want to access req.body from the post request - body-parser
app.use(bodyParser.urlencoded({ extended: false }));
// to parse json
// app.use(bodyParser.json());

// middleware
// app.use((req, res, next) => {
//   console.log('helloo from middleware');
//   next();
// });

// to serve static files
// app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  // req.query, req.body, req.header, req.params
  res.send('getting root');
});

app.get('/profile', (req, res) => {
  res.send('getting profile');
});

app.post('/profile', (req, res) => {
  console.log(req.body);
  const user = {
    name: 'Sally',
    hobby: 'soccer'
  };
  res.send(user);
});

app.listen(3000);
