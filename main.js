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
        todoList.innerHTML = '';
        for (let i = 0; i < todos.length; i++) {
            
            todoList.innerHTML += '<li>' + todos[i] + '</li>';
        }
    }
    const btnAdd = document.getElementById('btnAdd');

}