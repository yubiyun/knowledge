//同步代码 先输出1， 3s后输出点数为2 和 2
// const 摇骰子 = () => {
//   const t = new Date();
//   while (new Date() - t < 3000) {}
//   const n = Math.floor(Math.random() * 6) + 1;
//   console.log(`点数为${n}`);
//   return n;
// };
// console.log(1);
// const result = 摇骰子();
// console.log(result);//5
// console.log(2);

//异步代码 先输出1 和 2，3s后输出点数为2
// const 摇骰子 = () => {
//   setTimeout(() => {
//     const n = Math.floor(Math.random() * 6) + 1;
//     console.log(`点数为${n}`);
//     return n;
//   }, 3000);
// };
// console.log(1);
// const result = 摇骰子();
// console.log(result); //undefined
// console.log(2);

//轮询
// const 摇骰子 = () => {
//   setTimeout(() => {
//     const n = Math.floor(Math.random() * 6) + 1;
//     globalThis.x = n; //node写法，相当于window.x
//   }, 3000);
// };
// console.log(1);
// 摇骰子();
// console.log(2);
// //轮询，每一秒询问一次
// const intervalId = setInterval(() => {
//   if (globalThis.x !== undefined) {
//     console.log("骰子的结果为：" + x);
//     clearInterval(intervalId);
//   }
// }, 1000);

//回调
const 摇骰子 = (f) => {
  setTimeout(() => {
    const n = Math.floor(Math.random() * 6) + 1;
    f(n);
  }, 3000);
};
console.log(1);
摇骰子((n) => console.log(`骰子的结果为${n}`));
console.log(2);
