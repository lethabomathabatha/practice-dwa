
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

  /*
  // HOF 'without composition'
  const createCalc = operator => { 
    const innerFunction = (numbers) => {
        if (numbers.length < 2) {
            throw new Error('Numbers needs to be an array of two items')
        }

    }
      if (typeof operator !== 'function') {
          throw new Error('Operator must be a function');
      } const result = numbers.reduce(operator);
      
      return result
  }

  const add = createCalc((num1, num2) => num1 + num2);
  add([1,2,3,4,5,6])
  console.log(add);
 
  calculate(5, 2, (num1, num2) => (num1 + num1) * num2);
  console.log(calculate(10, 20, '+'));
  */

 // HOF that come with arrays

//  '18a19431-0e0f-422d-9be6-50e4e07c7cc0'
//  'bba1c69e-1c61-43c2-bac0-ebd1837dfa6b'
//  '16a6cd03-ac0a-495b-9664-e71330410762'
//  '88c2587c-c052-4aa0-85cb-59bd49bf41a5'
//  'c23747bf-4d25-4500-a9f5-103d2158676e'

 const dailyTasks = [
    {
        id: '18a19431-0e0f-422d-9be6-50e4e07c7cc0',
        title: 'Wash the dog',
        urgency: 'high',
        due: null
    },
    {
        id: 'bba1c69e-1c61-43c2-bac0-ebd1837dfa6b',
        title: 'Celebrate New Years Day',
        urgency: 'low',
        due: new Date ('01/01/2024')
    },
    {
        id: '16a6cd03-ac0a-495b-9664-e71330410762',
        title: 'Learn JavaScript',
        urgency: 'normal',
        due: new Date ('01/01/2025')
    },
    {
        id: '88c2587c-c052-4aa0-85cb-59bd49bf41a5',
        title: 'Clean room',
        urgency: 'low',
        due: null
    },
 ]

 // using 'find' to find the first task with the 'low' urgency
 const resultLowUrgency = dailyTasks.find((item, index) => {
    if (index > 1) return true
    return item.urgency === 'low' && item.due === null
}); 

console.log(resultLowUrgency)

// console log all the tasks
dailyTasks.forEach(console.log)

// add onto each array
const resultAddedTasks = dailyTasks.map((item) => {
    return {
        value: item,
        isDailyTask: true,
        hasDash: typeof item === 'string' && item.includes('-')
    }
})

console.log(resultAddedTasks)

// populate html body
const dailyTasksList = dailyTasks.map(item => {
    return `<li>${item.title} - ${item.urgency}</li>`
}) 


document.body.innerHTML = `
    <ul>
        ${dailyTasksList.join(' ')}
    </ul>
`

// checks for urgent tasks
const hasUrgency = (value) => (item => item.urgency === value)

const checkItems = (array, operation) => operation.map(fn => fn(array))
console.log(checkItems(
    dailyTasks, 
    [
        array => array.some(hasUrgency('high')),
        array => array.some(hasUrgency('normal')),
        array => array.some(hasUrgency('low')),
]))


console.log({
    hasHigh: dailyTasks.some(hasUrgency('high')),
    hasNormal: dailyTasks.some(hasUrgency('normal')),
    hasLow: dailyTasks.some(hasUrgency('low')),
})


const hasUrgent = tasks.some(item => {
    if(item.urgency === 'high') {
        return true
    }
})

console.log(hasUrgent)

const tasksDue = dailyTasks.filter(item => !item.due)
console.log(tasksDue)

/*
const sortedTasks = dailyTasks.toSorted((a,b) => {
    if (a.due && !b.due) return 1;

    const aDate = a.due.getTime() || 0; 
    const bDate = b.due.getTime() || 0;

    return aDate - bDate
})

console.log(sortedTasks)
*/

// sort by urgency
const sortedTasks = dailyTasks.sort((a,b) => {
    return a.urgency.localeCompare(b.urgency)
})

console.log(sortedTasks)

// sort by urgency
const ORDER = ['high', 'normal', 'low']

const sortedTasksOrder = dailyTasks.sort((a,b) => {
    return ORDER.indexOf(a.urgency) - ORDER.indexOf(b.urgency)
})

console.log(sortedTasksOrder)

// reduce method
// The callback function is invoked with four arguments: the accumulator, the current value, the current index, and the array being reduced.

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); // currentValue is 0, meaning nothing is added

console.log(sum)

// Finding the maximum number using reduce
const max = numbers.reduce((accumulator, currentValue) => {
    return Math.max(accumulator, currentValue);
});

console.log(max);

// reducer to find how many times the letter 'c' comes up in titles, only if it has a due date
const countResult = dailyTasks.reduce(
    (accumulator, { title, due }) => {
        if (due) return accumulator
        
        const titleAsArray = title.split('');
        const totalCs = titleAsArray.filter(char => char.toLowerCase() === 'c');
        return accumulator + totalCs.length
    },
        0
);

console.log(countResult)
