const todos = [];

window.onload = () => {
    const form = document.getElementById('todo-form');
    form.onsubmit = (e) => {
        e.preventDefault();
        const task = document.getElementById('task');
        const taskText = task.value;
        task.value = '';
        todos.push(taskText);
        const todoList = document.getElementById('todo-list');
        const todosTemplate = todos.map(t => "<li>" + t + "</li>");
        todoList.innerHTML = todosTemplate.join('');

    }
    const btnAdd = document.getElementById('btnAdd');

}