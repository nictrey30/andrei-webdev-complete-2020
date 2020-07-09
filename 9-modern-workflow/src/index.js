// import './dom'; // import the dom.js file from the current directory, and it will run it, but it doesn't automatically share any variables or functions with the file that imports it

// the name of the things we want to import must match the name of the thigs we export

import { addTitle, styleBody, contact } from './dom';
import users, { getPremUsers } from './data';

styleBody();
addTitle('Hello world from the index file');

const premUsers = getPremUsers(users);
console.log(premUsers);

console.log('test - webpack-dev-server');
