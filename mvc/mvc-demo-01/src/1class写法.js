import { createElement } from "./helper";
export class Module {
  data = { count: 1 }; //给对象 module 添加一个 data 属性
  element = null;
  container = null;
  constructor(container) {
    //或者this.data = { count: 1 }
    this.container = container;
    this.element = this.render();
    this.mount();
  }
  render() {
    //html+数据=>有数据的html
    const element = createElement(`
    <div class="module1">
      <h1>模块1</h1>
      <div id="count">${this.data.count}</div>
      <div><button>+1</button></div>
    </div>
  `);
    this.bindEvents(element);
    return element;
  }
  bindEvents(element) {
    element = element || this.element;
    const button = element.querySelector("button");
    button.addEventListener("click", () => {
      this.data.count += 1;
      // this.element.querySelector("#count").textContent = this.data.count; // 局部更新
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
