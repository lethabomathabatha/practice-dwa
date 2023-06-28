import React from 'react'
import { v4 as createId } from 'uuid'

const useTasks = () => {
    const [tasks, setTasks] = React.useState([]);

    const add = (title) => {
        const newTasks = [{
            id: createId(),
            title,
        },
        ...tasks,
    ]
        setTasks(newTasks)
    }

    const remove = (id) => {
        const newTasks = tasks.filter(item => item.id !== id)
        setTasks(newTasks)
    };


    return [
        tasks,
        {
            add,
            remove,
            update,
        }
    ]
}
 
const TEST = [
    {
        id: "23294",
        title: "ABCD",
    },
    {
        id: "57879",
        title: "EFGH",
    },
    {
        id: "94628",
        title: "IJKL",
    },
]

export const App = () => {
    const [tasks, setTasks] = React.useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        const { target } = e;
        const data = new FormData(target);
        const { title } = Object.fromEntries(data);

        const newTask = {
            id: createId(),
            title,
        }

        setTasks([...tasks, newTask])
        target.reset();
        console.log( title)
    }

    return (
        <div>
            <form onSubmit= { handleSubmit }>
                <label>
                    <div>New Task</div>
                    <input name="title" />
                </label>

                <button type="submit">SAVE</button>
            </form>



            <ul>
                {tasks.map(({ id, title }) => {
                    return <li key={id}>{title}</li>
                })}
            </ul>
        </div>
        
    )

   
}