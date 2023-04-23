/*顺序调用 */
// const f1 = function(){
//     const a = 1
//     console.log(a)
//     return 'haha'
//   }
//   const f2 = function(){
//     const b = 2
//     console.log(b)
//     return b
//   }
//   f1()
//   f2()

/*p和p2的sayHi是不同地址 */
// function Person(name = "匿名", age = 1) {
//   return {
//     name,
//     age,
//     sayHi() {
//       console.log(`你好，我是${this.name}`);
//     },
//   };
// }
// const p = Person("frank", 18);
// console.dir(p);
// const p2 = Person("jack", 19);
// console.dir(p2);

/*p和p2的sayHi是同一地址 */
// function sayHi() {
//   console.log(`你好，我是${this.name}`);
// }
// function Person(name = "匿名", age = 1) {
//   return {
//     name,
//     age,
//     sayHi,
//   };
// }
// const p = Person("frank", 18);
// console.dir(p);
// const p2 = Person("jack", 19);
// console.dir(p2);

/*用变量承载两个函数*/
// const Person共有属性 = {
//   sayHi() {
//     console.log(`你好，我是${this.name}`);
//   },
//   run() {
//     console.log(`我会小跑`);
//   },
// };
// function Person(name = "匿名", age = 1) {
//   return {
//     name,
//     age,
//     // sayHi: Person共有属性.sayHi,
//     // run: Person共有属性.run,
//     //等价于
//     ...Person共有属性
//   };
// }
// const p = Person("frank", 18);
// console.dir(p);
// const p2 = Person("jack", 19);
// console.dir(p2);

/*用一个全局变量 */
//   function Person(name = "匿名", age = 1) {
//     return {
//       name,
//       age,
//     //   sayHi: Person.共有属性.sayHi,
//     //   run: Person.共有属性.run,
//       //等价于
//       ...Person.共有属性
//     };
//   }
//   Person.共有属性 = {
//     sayHi() {
//       console.log(`你好，我是${this.name}`);
//     },
//     run() {
//       console.log(`我会小跑`);
//     },
//   };
//   const p = Person("frank", 18);
//   console.dir(p);
//   const p2 = Person("jack", 19);
//   console.dir(p2);

/*利用隐藏属性 */
// function Person(name = "匿名", age = 1) {
//   //   const temp = {};
//   //   temp.__proto__ = Person.共有属性;
//   //以上为构思步骤
//   const temp = Object.create(Person.共有属性); //以 Person.共有属性 为隐藏属性的值，构造一个空对象
//   temp.name = name;
//   temp.age = age;
//   return temp;
// }
// Person.共有属性 = {
//   sayHi() {
//     console.log(`你好，我是${this.name}`);
//   },
//   run() {
//     console.log(`我会小跑`);
//   },
// };
// const p = Person("frank", 18);
// console.dir(p);
// console.dir(p.sayHi());
// console.dir(p.run());
// const p2 = Person("jack", 19);
// console.dir(p2);

// p.run = function () {
//   console.log(`我会大跑`);
// };
// console.dir(p);
// console.dir(p.run());

/*constructor */
// function Person(name = "匿名", age = 1) {
//   const temp = Object.create(Person.共有属性);
//   //以 Person.共有属性 为隐藏属性的值，构造一个空对象
//   temp.name = name;
//   temp.age = age;
//   return temp;
// }
// Person.共有属性 = {
//   constructor: Person,
//   sayHi() {
//     console.log(`你好，我是${this.name}`);
//   },
//   run() {
//     console.log(`我会小跑`);
//   },
// };
// const p = Person("frank", 18);
// const p2 = Person("jack", 19);
// console.dir(p);
// console.dir(p2);
// if (p.constructor === Person) {
//   console.log(`你是人类,不是 Object 实例,也不是 Array 实例`);
// }

/*用new */
// function Person(name = "匿名", age = 1) {
//   this.name = name; //用 this 代表这个对象
//   this.age = age;
//   // return temp;//不用return
// }
// //把中文改成英文
// Person.prototype = {
//   constructor: Person, //已经加了，但是如果此处不写会被下面的覆盖，所以还是要加
//   sayHi() {
//     console.log(`你好，我是${this.name}`);
//   },
//   run() {
//     console.log(`我会小跑`);
//   },
// };
// const p = new Person("frank", 18);
// console.dir(p);

/*class */
// class Person {
//     static kind='human'
//   constructor(name = "匿名", age = 1) {
//     this.name = name;
//     this.age = age;
//   }
//   sayHi() {
//     console.log(`你好，我是${this.name}`);
//   }
//   run() {
//     console.log(`我会小跑`);
//   }
// }
// const p = new Person("frank", 18);
// console.dir(p);

// function Person(name, age) {
//   // 自有属性
//   var id = Math.random();
//   this.name = name;
//   this.age = age;
//   // 公有属性
//   Person.count++;
// }
// // 公有属性
// Person.count = 0;
// // 公有方法
// Person.prototype.sayHello = function () {
//   console.log("Hello, my name is " + this.name);
// };

// var p1 = new Person("Tom", 25);
// var p2 = new Person("Jerry", 21);

// console.log(p1.id); // undefined：id 是构造函数的自有属性，只能在构造函数内调用
// console.log(p1);
// console.log(p1.name); // "Tom"：name 是构造函数的自有属性，并在实例化对象后能被调用
// console.log(Person.count); // 2：count 是构造函数的共有属性，在所有实例化对象间共享
// p1.sayHello(); // "Hello, my name is Tom"：sayHello 是构造函数的共有方法，被所有实例化对象调用
