const button = document.querySelector('#enter');
const input = document.querySelector('#userinput');
const list = document.querySelector('ul');

const addTodo = () => {
  if (input.value.length) {
    let todo = document.createElement('li');
    let text = document.createTextNode(input.value.trim());
    todo.appendChild(text);

    // The insertBefore() method inserts a node as a child, right before an existing child, which you specify.
    list.insertBefore(todo, list.childNodes[0]);
    input.value = '';
  }
};
button.addEventListener('click', addTodo);
input.addEventListener('keypress', (e) => {
  if (e.charCode === 13) {
    addTodo();
  }
});
