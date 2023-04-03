let obj = {a:1,b:[3,4,5]}
let str = JSON.stringify(obj)//将对象转换为JSON字符串
localStorage.setItem('obj',str)//存储在本地
console.log(localStorage.getItem('obj'))//获取到字符串
JSON.parse(localStorage.getItem('obj'))//将字符串转换为对象