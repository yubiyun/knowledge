import { createElement } from "./helper"
import { compile } from 'handlebars'

const model = {
  data: { count: 1 },
}
export const view = {
  model: model,
  element: null,
  container: null,
  template: `
    <div class="module1">
      <h1>模块1</h1>
      <div id="count">{{count}}</div>
      <div><button>+1</button></div>
    </div>
  `,
  init(container) {
    this.model = model
    this.container = container
    this.element = this.render()
    this.mount()
  },
  render() {
    const html = compile(this.template)(this.model.data)
    const element = createElement(html)
    this.bindEvents(element)
    return element
  },
  bindEvents(element) {
    const button = element.querySelector('button')
    button.addEventListener('click', () => {
      this.model.data.count += 1
      this.update()
    })
  },
  mount() {
    this.container.append(this.element)
  },
  update() {
    const newElement = this.render()
    this.element.replaceWith(newElement)
    this.element = newElement
  }
}



