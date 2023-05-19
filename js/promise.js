function 摇骰子(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const n=Math.floor(Math.random()*6)+1
            resolve(n)//成功
            // reject(n)//失败
        },2000)
    })
}
const f1=()=>{console.log('f1',1)}
const f2=()=>{console.log('f2',2)}
// 摇骰子().then(success,fail).then(f1,f2)
// 摇骰子().then(success,fail).catch(f2)
摇骰子().finally(success)
摇骰子().finally(fail)
function success(data){
    console.log('成功，点数为'+data)
    // throw error//成功时报错
}
function fail(reason){
    console.log(`失败，原因为${reason}`)
}