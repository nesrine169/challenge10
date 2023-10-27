let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');

// Load tasks from local storage when the page loads
window.addEventListener('load', () => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        tasks.innerHTML = savedTasks;
    }
});

input.addEventListener('keyup', () => {
    if (input.value.trim() !== '') {
        addBtn.classList.add('active');
    } else {
        addBtn.classList.remove('active');
    }
});

addBtn.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        createTaskElement(input.value);

        // Save the updated tasks to local storage
        localStorage.setItem('tasks', tasks.innerHTML);

        input.value = '';
    }
});

tasks.addEventListener('click', (doneanddelete) => {
    if (doneanddelete.target.classList.contains('fa-trash')) {
        doneanddelete.target.parentElement.parentElement.remove();

        // Save the updated tasks to local storage
        localStorage.setItem('tasks', tasks.innerHTML);
    } else if (doneanddelete.target.classList.contains('fa-list-check')) {
        doneanddelete.target.parentElement.parentElement.classList.toggle('completed');

        // Save the updated tasks to local storage
        localStorage.setItem('tasks', tasks.innerHTML);
    }
});

function createTaskElement(taskText) {
    let newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.innerHTML = `
        <p>${taskText}</p>
        <div class="item-btn">
            <i class="fa-solid fa-list-check"></i>
            <i class="fa-solid fa-trash"></i>
        </div>
    `;
    tasks.appendChild(newItem);
}


