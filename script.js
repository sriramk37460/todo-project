function addTodo() {
    const input = document.getElementById('todo-input');
    const todoText = input.value.trim();

    if (todoText === '') {
        alert('Please enter a task!');
        return;
    }

    const todoList = document.getElementById('todo-list');

    // Create list item
    const li = document.createElement('li');

    // Add task text
    const span = document.createElement('span');
    span.textContent = todoText;
    li.appendChild(span);

    // Add delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => li.remove();
    li.appendChild(deleteButton);

    // Add toggle complete functionality
    span.onclick = () => {
        li.classList.toggle('completed');
    };

    // Append to list
    todoList.appendChild(li);

    // Clear input
    input.value = '';
}