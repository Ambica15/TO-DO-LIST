const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="remove-btn">Remove</button>
    `;

    li.addEventListener('click', (e) => {
        if (e.target.tagName !== 'BUTTON') {
            li.classList.toggle('completed');
        }
    });

    li.querySelector('.remove-btn').addEventListener('click', () => {
        li.remove();
    });

    taskList.appendChild(li);
    taskInput.value = '';
    taskInput.focus();
}