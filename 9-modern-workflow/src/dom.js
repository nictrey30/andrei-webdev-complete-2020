console.log('dom file');

const body = document.querySelector('body');

// export
const styleBody = () => {
  body.style.backgroundColor = 'peachpuff';
};
//export
const addTitle = (text) => {
  const title = document.createElement('h1');
  title.textContent = text;
  body.appendChild(title);
};

// styleBody();
// addTitle('Hello world from the dom file');

// we can export any kind of data from a file
// export a string
// export
const contact = 'mario@thenetninja.co.uk';

export { styleBody, addTitle, contact };
