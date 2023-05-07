// function jQuery(选择器字符串) {
//   const 所有标签 = document.querySelectorAll(选择器字符串);
//   return {
//     addClass(className) {
//       for (let i = 0; i < 所有标签.length; i++) {
//         const 标签 = 所有标签[i];
//         标签.classList.add(className);
//       }
//     },
//   };
// }
// const $ = jQuery;
// $(".red").addClass("green");

// function jQuery(选择器) {
//   const 标签伪数组 = document.querySelectorAll(选择器);
//   const 标签数组 = Array.from(标签伪数组);
//   return {
//     addClass(className) {
//       标签数组.forEach((标签) => {
//         标签.classList.add(className);
//       });
//     },
//     removeClass(className) {
//       标签数组.forEach((标签) => {
//         标签.classList.add(className);
//       });
//     },
//   };
// }
// const $ = jQuery;
// $(".red").addClass("green");

//以上多次调用$造成内存冗余
//方案一：使用隐藏属性+共有属性
// function jQuery(选择器) {
//   const 标签伪数组 = document.querySelectorAll(选择器);
//   this.标签数组 = Array.from(标签伪数组);
// }
// jQuery.prototype = {
//   constructor: jQuery,
//   addClass(className) {
//     this.标签数组.forEach((标签) => {
//       标签.classList.add(className);
//     });
//   },
//   removeClass(className) {
//     this.标签数组.forEach((标签) => {
//       标签.classList.add(className);
//     });
//   },
// };
// const $ = jQuery;
// new $(".red").addClass("green");

//不加new
// function jQuery(选择器) {
//   if (!(this instanceof jQuery)) {
//     //this是由jQuery构造的实例
//     return new jQuery(选择器);
//   }
//   //或者
//   // if(!this.constructor===jQuery){
//   //   return new jQuery(选择器)
//   // }
//   const 标签伪数组 = document.querySelectorAll(选择器);
//   this.标签数组 = Array.from(标签伪数组);
// }
// jQuery.prototype = {
//   constructor: jQuery,
//   addClass(className) {
//     this.标签数组.forEach((标签) => {
//       标签.classList.add(className);
//     });
//   },
//   removeClass(className) {
//     this.标签数组.forEach((标签) => {
//       标签.classList.add(className);
//     });
//   },
// };
// const $ = jQuery;
// $(".red").addClass("green");

//class
// class jQuery{
//   constructor(选择器){
//     const 标签伪数组 = document.querySelectorAll(选择器);
//     this.标签数组 = Array.from(标签伪数组);
//   }
//   addClass(className) {
//     this.标签数组.forEach((标签) => {
//       标签.classList.add(className);
//     });
//   }
//   removeClass(className) {
//     this.标签数组.forEach((标签) => {
//       标签.classList.add(className);
//     });
//   }
// };
// const $ = jQuery;
// new $(".red").addClass("green");

//实现链式调用$(".red").addClass("green").addClass("big");
// function jQuery(选择器) {
//   if (!(this instanceof jQuery)) {
//     return new jQuery(选择器);
//   }
//   const 标签伪数组 = document.querySelectorAll(选择器);
//   this.标签数组 = Array.from(标签伪数组);
// }
// jQuery.prototype = {
//   constructor: jQuery,
//   addClass(className) {
//     this.标签数组.forEach((标签) => {
//       标签.classList.add(className);
//     });
//     return this; //新增return
//   },
//   removeClass(className) {
//     this.标签数组.forEach((标签) => {
//       标签.classList.add(className);
//     });
//   },
// };
// const $ = jQuery;
// $(".red").addClass("green").addClass("big");

//用箭头函数实现链式调用
// function jQuery(选择器) {
//   const 标签伪数组 = document.querySelectorAll(选择器);
//   const 标签数组 = Array.from(标签伪数组);
//   const api = {
//     addClass: (className) => {
//       标签数组.forEach((标签) => {
//         标签.classList.add(className);
//       });
//       return api;
//     },
//   };
//   return api;
// }
// const $ = jQuery;
// $(".red").addClass("green").addClass("big");

//函数重载
// function jQuery(选择器或节点或节点集) {
//   let 标签数组 = [];
//   if (typeof 选择器或节点或节点集 === "string") {
//     const 标签伪数组 = document.querySelectorAll(选择器或节点或节点集);
//     标签数组 = Array.from(标签伪数组);
//   } else if (选择器或节点或节点集 instanceof Node) {
//     标签数组 = [选择器或节点或节点集];
//   } else if (选择器或节点或节点集 instanceof NodeList) {
//     标签数组 = Array.from(选择器或节点或节点集);
//   } else {
//     throw new Error("你传的什么鬼东西");
//   }
//   const api = {
//     addClass: (className) => {
//       标签数组.forEach((标签) => {
//         标签.classList.add(className);
//       });
//       return api;
//     },
//     removeClass: (className) => {
//       标签数组.forEach((标签) => {
//         标签.classList.remove(className);
//       });
//       return api;
//     },
//   };
//   return api;
// }
// const $ = jQuery;
// $(".red").addClass("green").addClass("big").removeClass("red");//选择器
// const div=document.querySelector('div')
// $(div).addClass("green")//节点
// const divList = document.querySelectorAll("div");
// $(divList).addClass("green");//节点集

//需要对某个范围进行操作
// function jQuery(选择器或节点或节点集, 范围) {
//   范围 = 范围 || document;
//   let 标签数组 = [];
//   if (typeof 选择器或节点或节点集 === "string") {
//     const 标签伪数组 = 范围.querySelectorAll(选择器或节点或节点集);
//     标签数组 = Array.from(标签伪数组);
//   } else if (选择器或节点或节点集 instanceof Node) {
//     标签数组 = [选择器或节点或节点集];
//   } else if (选择器或节点或节点集 instanceof NodeList) {
//     标签数组 = Array.from(选择器或节点或节点集);
//   } else {
//     throw new Error("你传的什么鬼东西");
//   }
//   const api = {
//     addClass: (className) => {
//       标签数组.forEach((标签) => {
//         标签.classList.add(className);
//       });
//       return api;
//     },
//     removeClass: (className) => {
//       标签数组.forEach((标签) => {
//         标签.classList.remove(className);
//       });
//       return api;
//     },
//   };
//   return api;
// }
// const $ = jQuery;
// const div = document.querySelector("#first");
// $(".green", div).addClass("big");//在id为first 下找'.green'

//getter setter
// function jQuery(选择器或节点或节点集, 范围) {
//   范围 = 范围 || document;
//   let 标签数组 = [];
//   if (typeof 选择器或节点或节点集 === "string") {
//     const 标签伪数组 = 范围.querySelectorAll(选择器或节点或节点集);
//     标签数组 = Array.from(标签伪数组);
//   } else if (选择器或节点或节点集 instanceof Node) {
//     标签数组 = [选择器或节点或节点集];
//   } else if (选择器或节点或节点集 instanceof NodeList) {
//     标签数组 = Array.from(选择器或节点或节点集);
//   } else {
//     throw new Error("你传的什么鬼东西");
//   }
//   const api = {
//     addClass: (className) => {
//       标签数组.forEach((标签) => {
//         标签.classList.add(className);
//       });
//       return api;
//     },
//     removeClass: (className) => {
//       标签数组.forEach((标签) => {
//         标签.classList.remove(className);
//       });
//       return api;
//     },
//     text: (newText) => {
//       if (newText === undefined) {
//         return 标签数组[0].textContent; //gettr
//       } else {
//         标签数组[0].textContent = newText; //setter
//         return api;
//       }
//     },
//   };
//   return api;
// }
// const $ = jQuery;
// const x = $(".red").text(); //getter
// console.dir(x); //1 1.1 1.2
// const y = $(".red").text("456").text(); //setter
// console.dir(y); //456

function jQuery(选择器) {
  const 伪标签数组 = document.querySelectorAll(选择器);
  const 标签数组 = Array.from(伪标签数组);
  const api = {
    index: () => {
      const element = 标签数组[0];
      const parent = element.parentNode;
      const siblings = parent.children;
      for (let i = 0; i < siblings.length; i++) {
        if (siblings[i] === element) {
          return i;
        }
      }
    },
  };
  return api;
}
const $ = jQuery;
const y = $("#x").index();
console.dir(y);//5
