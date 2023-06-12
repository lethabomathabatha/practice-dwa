import {html, render} from 'https://unpkg.com/lit-html?module';

export const app = (state) => {
    const { tasks } = state;
    const tasksAsArray = Object.values(tasks);
    return html `
        <div>
            <header>
                <h1>Todo App</h1>

                <form>
                    <label>
                        <span>New Task</span>
                        <input name= "title"/>
                    <label>

                    <button type="submit">Add Task</button>
                </form>
            <header>

            <main>
                <h2>Tasks</h2>
                <ul></ul>
            </main>
        </div>
    `;
};