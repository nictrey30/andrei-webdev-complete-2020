const users = [
  { name: 'mario', premium: true },
  { name: 'luigi', premium: false },
  { name: 'yoshi', premium: true },
  { name: 'toad', premium: true },
  { name: 'peach', premium: false }
];

// export
const getPremUsers = (users) => users.filter((user) => user.premium === true);

// default export
// export default users;

export { getPremUsers, users as default };
