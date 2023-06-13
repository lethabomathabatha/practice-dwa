
import {html, render} from 'https://unpkg.com/lit-html?module';


console.log(html, render)


const tasks = [
    { 
        id: 1, 
        title: 'Task 1', 
        completed: true,
    },
    { 
        id: 2, 
        title: 'Task 2', 
        completed: false 
    },
    { 
        id: 3, 
        title: 'Task 3', 
        completed: true 
    },
    { 
        id: 4, 
        title: 'Task 4', 
        completed: false 
    },
  ];

  // add note to each task
  for (let i = 0; i < tasks.length; i++) {
    tasks[i].note = `${tasks[i].title} is this way because of your actions.`;
  }

const completedTasks = tasks.filter((task) =>  task.completed);
const incompleteTasks = tasks.filter((task) => !task.completed);
const taskNotes = tasks.map((task) => task.note);
const tasksAsArray = tasks.flatMap((task) => task.completed);

console.log('Completed tasks: ');
console.log(completedTasks);

console.log('Incomplete tasks: ');
console.log(incompleteTasks);

console.log('Task notes: ');
console.log(taskNotes);

console.log('Tasks As Array: ');
console.log(tasksAsArray);



/**
 * Returns an HTML list item element containing the title of a task and the corresponding completion status.
 *
 * @param {array} tasks - An array of tasks objects containing a title property.
 * @param {boolean} completed - Whether the task is completed or not.
 * @return {string} The HTML list item element as a string.
 */
const createTaskList = (task) => {
    return html `
    <section id="task-items">
        <li>${task.title + ' - ' + task.completed + ' '}<button>${task.id}</button></li>
    </section>

        <style>
            #task-items {
                padding: 0.5rem;
            }
            li {
                color: blue;
                font-size: 1.2rem;
            }

            button {
                color: blue;
            }
        </style>
    `
    // adding styling
}
createTaskList(tasks);



// when the buttons are clicked, the task note should appear as an overlay


const taskListElement = document.getElementById('taskList');

const taskMarkup = tasks.map((task) => createTaskList(task));

render(taskMarkup, taskListElement);


function studentName(firstName) {
    return function(lastName) {
      return firstName + lastName;
    };
  }
  
  const add5 = studentName('Lele');
  console.log(add5(2));

  const array = ['Hello', 'World', '!'];
  const mergedString = array.join(' ');
  console.log(mergedString);