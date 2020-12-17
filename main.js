const todos = JSON.parse(localStorage.getItem('todos')) || [];

const render = () => {
    const todoList = document.getElementById('todo-list');
    const todosTemplate = todos.map(t => "<li>" + t + "</li>");
    todoList.innerHTML = todosTemplate.join('');
    const elementos = document.querySelectorAll('#todo-list li');
    elementos.forEach((elemento, i) => {
        elemento.addEventListener('click', function () {
            elemento.parentNode.removeChild(elemento);
            todos.splice(i, 1);
            refresh(todos);
            render();
        })
    })
}
window.onload = () => {
    render();
    const form = document.getElementById('todo-form');
    form.onsubmit = (e) => {
        e.preventDefault();
        const task = document.getElementById('task');
        const taskText = task.value;
        task.value = '';
        todos.push(taskText);
        refresh(todos);
        render();

    }
    const refresh = (todos) => {
        const todosStrings = JSON.stringify(todos);
        localStorage.setItem('todos', todosStrings);
    }
}