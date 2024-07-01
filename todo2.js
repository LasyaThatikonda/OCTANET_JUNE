// script.js
document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskDate = document.getElementById('task-date');
    const taskPriority = document.getElementById('task-priority');
    const taskCategory = document.getElementById('task-category');
    
    const taskText = taskInput.value.trim();
    const dueDate = taskDate.value;
    const priority = taskPriority.value;
    const category = taskCategory.value.trim();
    
    if (taskText === '') return;

    const taskList = document.getElementById('task-list');
    
    const li = document.createElement('li');
    li.className = 'task-item';

    li.innerHTML = `
        <div class="task-info">
            <span>${taskText}</span>
            <span class="task-meta">Due: ${dueDate || 'No Date'}, Priority: ${priority}, Category: ${category || 'None'}</span>
        </div>
        <div class="task-actions">
            <button class="complete-btn">Complete</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;
    
    taskList.appendChild(li);

    taskInput.value = '';
    taskDate.value = '';
    taskPriority.value = 'low';
    taskCategory.value = '';

    li.querySelector('.complete-btn').addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    li.querySelector('.delete-btn').addEventListener('click', () => {
        taskList.removeChild(li);
    });
}
