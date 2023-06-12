import {html, render} from 'https://unpkg.com/lit-html?module';

/**
 * @param {string} name
 */
const createView = (name) => {
    return html`
        <div>Hello, your name is ${name}.</div>`
}

const tree1 = createView('Lethabo');
const tree2 = createView('Nwabisa');
const tree3 = createView('Benedict');


console.log(tree1, tree2, tree3);
render(tree1, document.querySelector('[data-app]'));

setTimeout(() => {
    render(tree2, document.querySelector('[data-app]'));
}, 3000)

setTimeout(() => {
    render(tree3, document.querySelector('[data-app]'));
}, 6000)


console.log(html, render)