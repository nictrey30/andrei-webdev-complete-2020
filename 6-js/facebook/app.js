let database = [
  {
    username: 'andrei',
    password: 'supersecret'
  },
  {
    username: 'sally',
    password: '123'
  },
  {
    username: 'ingrid',
    password: '777'
  }
];

let newsfeed = [
  {
    username: 'Bobby',
    timeline: 'So tired from all that learning!'
  },
  {
    username: 'Sally',
    timeline: 'Javascript is sooooo cool!'
  },
  {
    username: 'Mitch',
    timeline: 'Javascript is preeetyy cool!'
  }
];

let userNamePrompt = prompt('What is your username?');
let passwordPrompt = prompt('What is your password?');

const isUserValid = (userInput) => {
  for (let i = 0; i < database.length; i++) {
    if (database[i].username === userInput) {
      return true;
    }
  }
  return false;
};

const signIn = (userInput, passInput) => {
  if (isUserValid(userInput)) {
    database.forEach((user) => {
      if (user.username === userInput) {
        if (user.password === passInput) {
          newsfeed.forEach((news) => {
            console.log(`${news.username}: ${news.timeline}`);
          });
        } else {
          console.log('password is wrong');
        }
      }
    });
  } else {
    console.log(`${userInput} was not found in our database!`);
  }
};

signIn(userNamePrompt, passwordPrompt);
