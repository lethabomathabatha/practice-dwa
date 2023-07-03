type Elements = {
  count: HTMLSpanElement;
  add: HTMLButtonElement;
  subtract: HTMLButtonElement;
  reset: HTMLButtonElement;
}


const app = document.querySelector('#app')

const createElements = () => {
  const attrs = ['count', 'add', 'subtract', 'reset']

  const result = attrs.map(singleAttr => {
    return document.querySelector(`[data-${singleAttr}]`)
  })

  console.log(result)
}

let count: number = 0;
