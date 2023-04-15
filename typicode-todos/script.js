const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = () => {
  fetch(apiUrl + '?_limit=5')
    .then((response) => response.json())
    .then((data) => {
      data.forEach((todo) => {
        const div = document.createElement('div');
          div.appendChild(document.createTextNode(todo.title));
          
          if(todo.completed)
        document.getElementById('todo-list').appendChild(div);
      });
    });
};

getTodos();
