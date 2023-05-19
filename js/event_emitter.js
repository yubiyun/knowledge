// const eventEmitter = () => {
//   const array = [];
//   return {
//     addEventListener: (fn) => {
//       array.push(fn);
//     },
//     dispatchEvent: (event) => {
//       array.forEach((fn) => fn.call(null, event));
//     },
//     //第一种 找下标，删除该下标的内容（最省内存）
//     removeEventListener: (fn) => {
//       const index = array.indexOf(fn);
//       array.splice(index, 1);
//     },
//     //第二种 过滤不等于fn
//     // removeEventListener: (fn) => {
//     //     array=array.filter(f=>f!==fn)
//     //   },
//     //第三种 遍历，将不等于fn的push进新数组
//     //   removeEventListener: (fn) => {
//     //     const result=[]
//     //     for(let i=0;i<array.length;i++){
//     //         if(array[i]!==fn){
//     //             result.push(array[i])
//     //         }
//     //     }
//     //   },
//   };
// };
// const api = eventEmitter();
// const f1 = () => console.log(1);
// const f2 = () => console.log(2);
// api.addEventListener(f1);
// api.addEventListener(f2);
// api.removeEventListener(f1);
// api.dispatchEvent(new Event("click"));

//考虑事件名eventName
// const eventEmitter = () => {
//   const hash = {};
//   return {
//     addEventListener: (eventName, fn) => {
//       hash[eventName] = hash[eventName] || [];
//       hash[eventName].push(fn);
//     },
//     dispatchEvent: (eventName, event) => {
//       hash[eventName]?.forEach((fn) => fn.call(null, event));
//     },
//     removeEventListener: (eventName, fn) => {
//       if (hash[eventName] === undefined) return;
//       const index = hash[eventName].indexOf(fn);
//       if (index < 0) return;
//       hash[eventName].splice(index, 1);
//     },
//   };
// };
// const api = eventEmitter();
// const f1 = () => console.log(1);
// const f2 = () => console.log(2);
// api.addEventListener("click", f1);
// api.addEventListener("click", f2); //2
// api.addEventListener("mouseover", () => {
//   console.log("mouseover"); //mouseover
// });
// api.removeEventListener("click", f1);
// api.dispatchEvent("click", new Event("xxx"));
// api.dispatchEvent("mouseover", new Event("yyy"));

//考虑fn参数
// const eventEmitter = () => {
//   const hash = {};
//   return {
//     addEventListener: (eventName, fn) => {
//       hash[eventName] = hash[eventName] || [];
//       hash[eventName].push(fn);
//     },
//     dispatchEvent: (eventName, ...dataList) => {
//       hash[eventName]?.forEach((fn) => fn.apply(null, dataList)); //apply接受数组，call不接受数组
//     },
//     //   //等价于
//     //   dispatchEvent: (eventName,data1,data2,data3,data4) => {
//     //     const dataList=[data1,data2,data3,data4]
//     //     hash[eventName]?.forEach((fn) => fn.apply(null, dataList));
//     //   },
//     //   //等价于
//     //   dispatchEvent: (eventName, ...dataList) => {
//     //     hash[eventName]?.forEach((fn) => fn.call(null, ...dataList));
//     //   },
//     removeEventListener: (eventName, fn) => {
//       if (hash[eventName] === undefined) return;
//       const index = hash[eventName].indexOf(fn);
//       if (index < 0) return;
//       hash[eventName].splice(index, 1);
//     },
//   };
// };
// const api = eventEmitter();
// const f1 = (a, b) => console.log("f1", a, b);
// const f2 = (a, b) => console.log("f2", a, b);
// api.addEventListener("click", f1); //'f1' {name:'jack'} {age:18}
// api.addEventListener("click", f2); //'f2' {name:'jack'} {age:18}
// api.addEventListener("mouseover", (a, b) => {
//   console.log("mouseover", a, b); //'mouseover' Event{} undefined
// });
// api.removeEventListener("click", f1);
// api.dispatchEvent("click", { name: "jack" }, { age: 18 });
// api.dispatchEvent("mouseover", new Event("yyy"));

//不单独创建对象
// const hash = {};
// Object.prototype.addEventListener = function (eventName, fn) {
//   this.hash = this.hash || {};
//   this.hash[eventName] = this.hash[eventName] || [];
//   this.hash[eventName].push(fn);
// };
// Object.prototype.removeEventListener = function (eventName, fn) {
//   if (this.hash === undefined) return;
//   if (this.hash[eventName] === undefined) return;
//   const index = this.hash[eventName].indexOf(fn);
//   if (index < 0) return;
//   this.hash[eventName].splice(index, 1);
// };
// Object.prototype.dispatchEvent = function (eventName, ...dataList) {
//   this.hash?.[eventName]?.forEach((fn) => fn.apply(null, dataList));
// };
// const api = {};
// const f1 = (a, b) => console.log("f1", a, b);
// const f2 = (a, b) => console.log("f2", a, b);
// api.addEventListener("click", f1); //'f1' {name:'jack'} {age:18}
// api.addEventListener("click", f2); //'f2' {name:'jack'} {age:18}
// api.addEventListener("mouseover", (a, b) => {
//   console.log("mouseover", a, b); //'mouseover' Event{} undefined
// });
// api.removeEventListener("click", f1);
// api.dispatchEvent("click", { name: "jack" }, { age: 18 });
// api.dispatchEvent("mouseover", new Event("yyy"));

//用ajax
const hash = {};
Function.prototype.addEventListener = function (eventName, fn) {
  this.hash = this.hash || {};
  this.hash[eventName] = this.hash[eventName] || [];
  this.hash[eventName].push(fn);
};
Function.prototype.removeEventListener = function (eventName, fn) {
  if (this.hash === undefined) return;
  if (this.hash[eventName] === undefined) return;
  const index = this.hash[eventName].indexOf(fn);
  if (index < 0) return;
  this.hash[eventName].splice(index, 1);
};
Function.prototype.dispatchEvent = function (eventName, ...dataList) {
  this.hash?.[eventName]?.forEach((fn) => fn.apply(null, dataList));
};
const ajax = function (method, url, options) {
  const { data } = options;
  const xhr = XMLHttpRequest();
  xhr.open(method, url);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      //下载成功
      if (xhr.status >= 200 && xhr.status < 300) {
        //调用后端接口成功
        ajax.dispatchEvent("success", xhr.responseText, xhr);
      } else {
        ajax.dispatchEvent("fail", xhr); //调用后端接口失败
      }
    }
  };
  xhr.send(data);
};
const f1 = (a, b) => console.log("f1", a, b);
const f2 = (a, b) => console.log("f2", a, b);
ajax.addEventListener("success", f1); //'f1' {name:'jack'} {age:18}
ajax.addEventListener("fail", f2); //'f2' {name:'jack'} {age:18}
ajax.removeEventListener("click", f1);
ajax.dispatchEvent("success", { name: "jack" }, { age: 18 });
ajax.dispatchEvent("mouseover", new Event("yyy"));
