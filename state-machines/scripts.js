import { LitElement, css, html } from "./lit-html.js"
import globalStyles from "./global-styles.js";


class SimpleGreeting extends LitElement {

    static styles = [ globalStyles, 
     css`
        h1 {
            color: red;
        }
    `];
  
    render() {
        
        return html `
            <h1 class="text-center">Hello World!</h1>
        `
    }
}

window.customElements.define("simple-greeting", SimpleGreeting)

