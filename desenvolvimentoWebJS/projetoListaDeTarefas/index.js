const form = document.querySelector('#todo-form');
const taskTitleInput = document.querySelector('#task-title-input');
const addButton = document.querySelector('#add-button');
const todoListUl = document.querySelector('#todo-list');

let tasks = [];  // ['Tarefa 1', 'Tarefa 2', 'Tarefa 3']
// Transformar o arraye de strings em objetos - [{ title: 'Tarefa 1', done: false/true }];

function renderTaskOnHTML (taskTitle, done = false) {
    const li = document.createElement('li'); // Cria um elemento <li>
    // li.textContent = taskTitle; // Adiciona o texto da tarefa no <li> - <li>Texto da tarefa</li>

    const input = document.createElement('input'); // Criando um <input>
    input.setAttribute('type', 'checkbox'); // Adicionando o atributo type="checkbox" no <input> - <input type="checkbox">
    input.addEventListener('change', (event) => {
        const liToToggle = event.target.parentElement; // <li>

        const spanToToggle = liToToggle.querySelector('span');

        const done = event.target.checked; // true/false
        if (done) {
            spanToToggle.style.textDecoration = 'line-through';
        } else {
            spanToToggle.style.textDecoration = 'none';
        }

        tasks = tasks.map(t => {
            if (t.title === spanToToggle.textContent) { // Se o título da tarefa for igual ao texto do <span>
                return { // Retorna
                    title: t.title, // O mesmo título
                    done: !t.done // O contrário do done atual
                }
            }
            return t; // Retorna a tarefa sem alteração
        })

        localStorage.setItem('tasks', JSON.stringify(tasks));
    });

    input.checked = done;
    
    const span = document.createElement('span'); // Criando um <span>
    span.textContent = taskTitle; // Adicionando o texto da tarefa no <span>
    if (done) {
        span.style.textDecoration = 'line-through';
    }

    const button = document.createElement('button'); // Criando um <button>
    button.innerHTML = '<i class="fa-solid fa-trash"></i>'; // Adicionando o texto 'Remover' no <button>
    button.addEventListener('click', (event) => {
        const liToRemove = event.target.closest('li'); // .parentElement

        const titleToRemove = liToRemove.querySelector('span').textContent; // Pega o título da tarefa que será removida - vou na li a ser removida, procuro o span e pedo o textContent dele

        tasks = tasks.filter(t => t.title !== titleToRemove); // Filtra o array de tarefas, removendo a tarefa que tem o título igual ao título da tarefa que será removida

        todoListUl.removeChild(liToRemove); // Remove o <li> da <ul> de tarefas

        localStorage.setItem('tasks', JSON.stringify(tasks));
        
    });

    li.appendChild(input); // Adiciona o <input> no <li>
    li.appendChild(span); // Adiciona o <span> no <li>
    li.appendChild(button); // Adiciona o <button> no <li>

    todoListUl.appendChild(li) // Adiciona o <li> na <ul> de tarefas
}

window.onload = () => { // Executado sempre que a página for carregada
    const tasksOnLocalStorage = localStorage.getItem('tasks');

    if (!tasksOnLocalStorage) {
        return; // Sai da função
    }

    tasks = JSON.parse(tasksOnLocalStorage); // Transforma a string em array de objetos

    tasks.forEach(t => { // Para cada tarefa no array de tarefas
        renderTaskOnHTML(t.title, t.done); // Adiciona a tarefa no HTML
    });

    console.log(tasksOnLocalStorage);
}

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita o comportamento padrão de recarregar a página ao submeter o formulário

    const taskTitle = taskTitleInput.value;

    if (taskTitle.length < 3) {
        alert('O título da tarefa deve ter no mínimo 3 caracteres');
        return; // Sai da função, não roda mais nada que estiver abaixo
    }

    // Adicionando a nova tarefa no array de tasks
    tasks.push({
        title: taskTitle,
        done: false
    });

localStorage.setItem('tasks', JSON.stringify(tasks));

    // Adicionando a nova tarefa no HTML
    renderTaskOnHTML(taskTitle);

    taskTitleInput.value = '';
});