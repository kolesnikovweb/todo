
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
        addTask(newTaskText);
        dom.new.value = ''
    }
}

// Функция добавить задачу 

function addTask(text) {
    let timestamp = Date.now();
    const task = {
        id: timestamp,
        text, 
        isComplate: false,
    }

    tasks.push(task)
    console.log(tasks);

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
