console.log('hello world');


//mock

const TASKS = [
  {
    id: 1,
    description: 'Mi primera tarea',
    done: false,
  },
  {
    id: 2,
    description: 'Una tarea sin terminar',
    done: false,
  },
  {
    id: 3,
    description: 'Una tarea terminada',
    done: true,
  },
  {
    id: 4,
    description: 'Una tarea para editar',
    done: false,
  },
  {
    id: 5,
    description: 'Una tarea para eliminar',
    done: true,
  },
  {
    id: 6,
    description: 'Una tarea con un texto muy largo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid asperiores consequuntur dolorem excepturi fugiat harum ipsa iure laboriosam libero minima neque porro possimus quam, quasi qui saepe velit veritatis."',
    done: false,
  },
  {
    id: 7,
    description: 'Tarea numero 7',
    done: false,
  },
  {
    id: 8,
    description: 'Tarea numero 8',
    done: false,
  },
  {
    id: 9,
    description: 'Tarea numero 9',
    done: false,
  },
  {
    id: 10,
    description: 'Tarea numero 10',
    done: false,
  },
];


//elements

const taskInputElement = document.querySelector('#taskInput')
const taskListElement = document.querySelector('ul')
const modalElement = document.querySelector('.modal')
const modalYesButton = document.querySelector('#yes-btn')
const modalNoButton = document.querySelector('#no-btn')
const tasksLeftElement = document.querySelector('.info')
const allButton = document.querySelector('#all-btn')
const pendingButton = document.querySelector('#pending-btn')
const completedButton = document.querySelector('#completed-btn')
const filterButtons = [allButton,pendingButton,completedButton]

for(task of TASKS) {
  const liElement = document.createElement('li')
  liElement.textContent+=task.description;
  taskListElement.appendChild(liElement);
}

console.log(TASKS);
console.log(filterButtons)

