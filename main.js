
// const newTask = document.getElementById('new');
// const addTask = document.getElementById('add');
// const tasks = document.getElementById('tasks');

// console.log(newTask);
// console.log(addTask);
// console.log(tasks);

const dom = {
    new:  document.getElementById('new'),
    add: document.getElementById('add'),
    tasks:  document.getElementById('tasks'),
}


const tasks = [];

// Отследить клик по кнопке добавить

dom.add.onclick = () => {
    const newTaskText = dom.new.value;
    if(newTaskText && isNotHaveTask(newTaskText, tasks)) {
        addTask(newTaskText, tasks);
        dom.new.value = ''
        tasksRender(tasks);
    }
}

// Функция добавить задачу 

function addTask(text, list) {
    let timestamp = Date.now();
    const task = {
        id: timestamp,
        text, 
        isComplate: false,
    }

    list.push(task)
}

// Проверка на повтарение задачи в массиве задач 


function isNotHaveTask(text, list) {
    let isNotHave = true;

    list.forEach((task) => {
        if(task.text == text) {
            alert('Задача уже существует!')
            isNotHave = false    
        }
    })
    return isNotHave
}

// Функция вывода списка задач

// function tasksRender(list) {
//     const cls = task.isComplate ? 'todo__task todo__task_complate' : 'todo__task'
//     const taskHtml = `
    
//     <div id="${task.id}" class="${cls}">
//         <label class="todo__checkbox">
//             <input type="checkbox" checked="${task.isComplate}">  
//             <div></div>                      
//         </label>
//         <div class="todo__task-text">${task.text}</div>
//         <div class="todo__task-del">-</div>
//     </div>
    
//     `

// }


function tasksRender(list) {
    let htmlList = ''

    list.forEach((task) => {
        const cls = task.isComplate ? 'todo__task todo__task_complate' : 'todo__task'
        const checked = task.isComplate ? 'checked' : ''
        const taskHtml = `
        
        <div id="${task.id}" class="${cls}">
            <label class="todo__checkbox">
                <input type="checkbox" ${checked}>  
                <div></div>                      
            </label>
            <div class="todo__task-text">${task.text}</div>
            <div class="todo__task-del">-</div>
        </div>
        
        `

        htmlList = htmlList + taskHtml;
    })

    dom.tasks.innerHTML = htmlList
}