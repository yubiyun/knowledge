import { compile } from "handlebars";
import { createElement } from "./helper";

export class Module {
  data = { count: 1 }; //给对象 module 添加一个 data 属性
  element = null;
  container = null;
  template = `
      <div class="module1" id="template1">
        <h1>模块1</h1>
        <div>{{count}}</div>
        <div><button>+1</button></div>
      </div>
  `;
  constructor(container) {
    //或者this.data = { count: 1 }
    this.container = container;
    this.element = this.render();
    this.mount();
  }
  render() {
    const html = compile(this.template)(this.data);
    const element = createElement(html);
    this.bindEvents(element);
    return element;
  }
  bindEvents(element) {
    element = element || this.element;
    const button = element.querySelector("button");
    button.addEventListener("click", () => {
      this.data.count += 1;
      this.update();
    });
  }
  mount(container) {
    this.container.append(this.element);
  }
  update() {
    const newElement = this.render();
    this.element.replaceWith(newElement);
    this.element = newElement;
  }
}
