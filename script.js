let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');

input.addEventListener('keyup', () => {
    if (input.value.trim() !== '') {
        addBtn.classList.add('active');
    } else {
        addBtn.classList.remove('active');
    }
});

addBtn.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
            <p>${input.value}</p>
          <div class="item-btn">
            <i class="fa-solid fa-list-check"></i>
            <i class="fa-solid fa-trash"></i>
          </div>
        `;
        tasks.appendChild(newItem);
        input.value = '';
    } 
});

tasks.addEventListener('click', (doneanddelete) => {
    if (doneanddelete.target.classList.contains('fa-trash')) {
      doneanddelete.target.parentElement.parentElement.remove();
        
    } else if (doneanddelete.target.classList.contains('fa-list-check')) {
      doneanddelete.target.parentElement.parentElement.classList.toggle('completed');
        
    }
});
