class EventEmitter {
  constructor() {
    this.array = [];
  }
  addEventListener(fn) {
    this.array.push(fn);
  }
  dispatchEvent(event) {
    this.array.forEach((fn) => fn.call(null, event));
  }
  removeEventListener(fn) {
    const index = this.array.indexOf(fn);
    this.array.splice(index, 1);
  }
}
const api = new EventEmitter();
api.addEventListener(() => {
  console.log(1);
});
api.dispatchEvent(new Event("click"));
