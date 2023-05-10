//数字为打印顺序
setTimeout(() => {
  console.log("我是任务0");//3
  setTimeout(() => {
    console.log("我是任务3");//7
    queueMicrotask(() => {
      console.log("我是微任务0");//8
      setTimeout(() => {
        console.log("我是任务2");//10
      });
    });
  });
});
setTimeout(() => {
  console.log("我是任务1");//4
  setTimeout(() => {
    console.log("我是任务4");//9
  });
});
queueMicrotask(() => {
  console.log("我是微任务1");//1
  setTimeout(() => {
    console.log("我是任务5");//5
  });
  queueMicrotask(() => {
    console.log("我是微任务2");//2
    setTimeout(() => {
      console.log("我是任务6");//6
    });
  });
});
