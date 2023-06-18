import { createElement } from "./helper";

export class Module {
  data = { name: "frank" };
  Element = null;
  container = null;
  constructor(container) {
    this.container = container;
    this.element = this.render();
    this.mount();
  }
  render() {
    const element = createElement(`
  <div class="module2">
    <h1>模块2</h1>
    <div><span>用户名</span><input value="${this.data.name}" /></div>
    <div>你输入的是：<span id="output">${this.data.name}<span></div>
  </div>
`);
    this.bindEvents(element);
    return element;
  }
  bindEvents(element) {
    element = element || this.element;
    const input = element.querySelector("input");
    input.addEventListener("input", (e) => {
      this.data.name = e.target.value;
      this.element.querySelector("#output").textContent = this.data.name;
    });
  }
  mount(container) {
    this.container.append(this.element);
  }
}
