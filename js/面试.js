// const obj = {
//   name: "obj",
//   fn() {
//     console.log("this:" + this.name);
//   },
// };
// obj.fn(); //this==='obj'
// const fn = obj.fn;
// fn(); //this===window，this.name为空字符串''
// //如果加上var name = 'hi'，this.name==='hi',因为var声明的变量自动成为window的属性
// //如果加上let name = 'hi'，this.name==='',因为let声明的全局变量不会自动成为window的属性
// [obj.fn][0](); //this===undefined
// //obj.x.fn() 等价于 obj['x']['fn']() ,const array=[obj.fn] array[0]() 等价于 array.0()
// let f;
// (f = obj.fn)(); //this===window，this.name为空字符串''
// //等价于 let f ;f=obj.fn;f()

var fn = function () {
  console.log(this.name);
};
var name = "hi";
var a = {
  name: "a",
  say: function () {
    console.log(this.name);
  },
};
var b = {
  name: "b",
  say: function (fn) {
    fn(); //this===window
  },
};
b.say(a.say); //'hi'
//a.say为地址，执行b.say，最终执行fn()，this===window
b.say = a.say;
b.say(); //'b'
//最终打印this.name，this===b
