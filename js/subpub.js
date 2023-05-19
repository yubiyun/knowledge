// const button = document.getElementById("x");
// const fn = () => console.log("hi");
// const fn2 = () => console.log("hello");
// button.addEventListener("click", fn); //订阅
// button.addEventListener("mouseover", fn2);
// setTimeout(() => {
//   button.click(); //发布一个 click 事件
//   button.dispatchEvent(new Event("mouseover")); //派发 mouseover 事件
// }, 5000);

//取消订阅
const button = document.getElementById("x");
const fn = () => console.log("hi");
const fn2 = () => console.log("hello");
button.addEventListener("click", fn); //订阅
button.addEventListener("mouseover", fn2); //订阅
button.removeEventListener("mouseover", fn2); //取消订阅
setTimeout(() => {
  button.click(); //发布一个 click 事件
  button.dispatchEvent(new Event("mouseover")); //派发 mouseover 事件
}, 5000);
