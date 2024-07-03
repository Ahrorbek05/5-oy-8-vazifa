const input = document.getElementById('add-task');
const button = document.getElementById('button');
const task = document.querySelector('.task-list');

input.addEventListener('keyup', () => {
    if(input.value.trim() != 0){
        button.classList.add('active')
    } else {
        button.classList.remove('active')
    }
});

button.addEventListener('click', () => {
    if ( input.value.trim() != 0){
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
        <p> ${input.value} </p>
                    <div class="item-btn">
                        <i class="fa-solid fa-pen-to-square"></i>
                        <i class="fa-solid fa-xmark"></i>
                    </div>
        `

        task.appendChild(newItem);
        input.value = '';

    } else {
        alert('Please enter a task')
    }
});

task.addEventListener('click', (event) => {
    if(event.target.classList.contains('fa-xmark')){
        event.target.parentElement.parentElement.remove();
    }
});

task.addEventListener('click', (event) => {
    if(event.target.classList.contains('fa-pen-to-square')){
        event.target.parentElement.parentElement.classList.toggle('complated')
    }
});