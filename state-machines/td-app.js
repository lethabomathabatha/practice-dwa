import { LitElement, html } from "./lit-html.js"

class App extends LitElement {
    render() {
        return html`
            <div>123</div> 
        `
    }
}

customElements.define('td-app')