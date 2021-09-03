class Todo {
    constructor() {
        this.totalTasks = document.querySelectorAll('.task').length;
    }

    addTask(taskText) {
        let template = document.querySelector('.task').cloneNode(true);
        template.classList.remove('hide');
        let tempalteText = template.querySelector('.task-title');
        tempalteText.textContent = taskText;

        let list = document.querySelector('#tasks-container');

        list.appendChild(template);

        this.addEvents();

        this.checkTasks('add');
    }

    removeTask(task) {
        let parentEl = task.parentElement;
        parentEl.remove();
        this.checkTasks('remove');
    }

    completeTask(task, btn) {
        task.classList.add('done');
        btn.remove();

    }

    addEvents() {
        let removeBtns = document.querySelectorAll('.fa-trash');
        let removeBtn = removeBtns[removeBtns.length - 1];
        let doneBtns = document.querySelectorAll('.fa-check');
        let doneBtn = doneBtns[doneBtns.length - 1];

        removeBtn.addEventListener('click', function () {
            todo.removeTask(this);
        })

        doneBtn.addEventListener('click', function () {
            todo.completeTask(this, removeBtn);
        })

    };

    checkTasks(command) {
        let msg = document.querySelector('#empty-tasks');
        if (command === 'add') {
            console.log('add');
            this.totalTasks += 1;
        } else if (command === 'remove') {
            console.log('remove');
            this.totalTasks -= 1;
        }

        if (this.totalTasks == 1) {
            msg.classList.remove('hide');
        } else {
            msg.classList.add('hide');
        }
    }
}

let todo = new Todo();
let addBtn = document.querySelector("#add");
addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let taskText = document.querySelector("#task");
    if (taskText.value != '') {
        todo.addTask(taskText.value);
    }
    taskText.value = '';
});