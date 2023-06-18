import { createElement } from "./helper";
export const module = {
  data: { count: 1 },
  element: null,
  container: null,
  init(container) {
    this.container = container;
    this.element = this.render();
    this.bindEvents();
    this.mount();
  },
  render() {
    //html+数据=>有数据的html
    return createElement(`
    <div class="module1">
      <h1>模块1</h1>
      <div id="count">${this.data.count}</div>
      <div><button>+1</button></div>
    </div>
  `);
  },
  bindEvents() {
    const button = this.element.querySelector("button");
    button.addEventListener("click", () => {
      this.data.count += 1;
      // this.element.querySelector("#count").textContent = this.data.count; // 局部更新
      this.update();
    });
  },
  mount(container) {
    this.container.append(this.element);
  },
  update() {
    const newElement = this.render();
    this.element.replaceWith(newElement);
    this.element = newElement;
    this.bindEvents();
  },
};
