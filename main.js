let list = document.querySelector('.todo-list');
let input = document.querySelector('.todo-input');
let form = document.querySelector('.todo-form');
let items = list.children;
let emptyListMessage = document.querySelector('.empty-tasks');

let toggleEmptyListMessage = function () {
  if (items.length === 0) {
    emptyListMessage.classList.remove('hidden');
  } else {
    emptyListMessage.classList.add('hidden');
  } 
}; 
  
let addCheckHandler = function(item) {
  let checkbox = item.querySelector('.todo-list-input');
  checkbox.addEventListener('change', function() {
    item.remove();
    toggleEmptyListMessage();
  });
};

form.onsubmit = function(evt) {
  evt.preventDefault();
  let newItem = document.createElement('li');
  newItem.classList.add('todo-list-item');
  let todoInput = document.createElement('input');
  todoInput.setAttribute('type', 'checkbox');
  todoInput.classList.add('todo-list-input');
  let todoSpan = document.createElement('span');
  todoSpan.textContent = input.value;
  let todoLabel = document.createElement('label');
  todoLabel.appendChild(todoInput);
  todoLabel.appendChild(todoSpan);
  newItem.appendChild(todoLabel);
  input.value = "";
  addCheckHandler(newItem);
  list.append(newItem);
  toggleEmptyListMessage();
};

for (let i = 0; i < items.length; i++) {
  addCheckHandler(items[i]);
}