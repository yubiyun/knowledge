function EventEmitter() {
  if (!(this instanceof EventEmitter)) {
    return new EventEmitter();
  }
  this.array = [];
}
EventEmitter.prototype = {
  constructor: EventEmitter,
  addEventListener(fn) {
    this.array.push(fn);
  },
  dispatchEvent(event) {
    this.array.forEach((fn) => fn.call(null, event));
  },
  removeEventListener(fn) {
    const index = this.array.indexOf(fn);
    this.array.splice(index, 1);
  },
};
const api = EventEmitter();
const f1 = () => {
  console.log(1);
};
const f2 = () => {
  console.log(2);
};
api.addEventListener(f1);
api.addEventListener(f2);
api.removeEventListener(f1);
api.dispatchEvent(new Event("click"));
