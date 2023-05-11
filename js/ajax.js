let http = require("http");
let fs = require("fs");
let url = require("url");
let port = process.argv[2];

if (!port) {
  console.log("请指定端口号好不啦？\nnode server.js 8888 这样不会吗？");
  process.exit(1);
}

let server = http.createServer(function (request, response) {
  let parsedUrl = url.parse(request.url, true);
  let pathWithQuery = request.url;
  let queryString = "";
  if (pathWithQuery.indexOf("?") >= 0) {
    queryString = pathWithQuery.substring(pathWithQuery.indexOf("?"));
  }
  let path = parsedUrl.pathname;
  let query = parsedUrl.query;
  let method = request.method;

  /******** 从这里开始看，上面不要看 ************/

  console.log("有个傻子发请求过来啦！路径（带查询参数）为：" + pathWithQuery);

  if (path === "/") {
    //响应码 状态码
    response.statusCode = 200;
    //响应头
    response.setHeader("Content-Type", "text/html;charset=utf-8");
    //响应体 消息体
    // 符合 HTML 语法的字符串
    response.write(`
    <html>
      <head>
        <link rel=stylesheet href="/style.css" />
      </head>
      <body>
        <h1>hello</h1>
        <button id = 'btn'>点我</button>
        <div id = 'output'>
            <div>姓名 <span id = 'name2'></span></div>
            <div>年龄 <span id = 'age2'></span></div>
        </div>
        <script src="/main.js"></script>
      </body>
    </html>
    `);
    //响应结束，响应给用户
    response.end();
  } else if (path === "/style.css") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/css;charset=utf-8");
    // 符合 CSS 语法的字符串
    response.write(`body {color: red;}`);
    response.end();
  } else if (path === "/main.js") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/javascript;charset=utf-8");
    console.log("终端");
    // 符合 JS 语法的字符串
    response.write(`
    const ajax = (method,url,options) => {
        const {data,success,fail} = options
        //请求 /date json 数据
        //构造一个请求实例
        const xhr = new XMLHttpRequest()
        //配置请求
        xhr.open(method,url)
        //监听成功 2xx 和失败 4xx 5xx
        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4){
                if(xhr.status >= 200 && xhr.status < 300){
                    const type = xhr.getResponseHeader('content-type')
                    if(type.startsWith('application/json')||type.startaWith('text/json')){
                        //字符串转对象
                        success(JSON.parse(xhr.responseText),xhr)
                    }else{
                        success(xhr.responseText,xhr) 
                    }
                }else if(xhr.status >= 400){
                    fail(xhr)
                }
            }
        }
        xhr.send(data)
    }
    const btn = document.querySelector('#btn')
    btn.addEventListener('click',() => {
        ajax('GET','/data',{
            data:null,
            success:(data,xhr)=>{console.log('成功',data,xhr.status)},
            fail:(xhr)=>{console.log('失败',xhr.status)}  
        })
    })
    `);
    response.end();
  } else if (path === "/data") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json;charset=utf-8");
    // 符合 JSON 语法的字符串
    response.write(`{
      "name":"frank",
      "age":18
    }`);
    response.end();
  } else {
    response.statusCode = 404;
    response.setHeader("Content-Type", "text/html;charset=utf-8");
    response.write(`你输入的路径不存在对应的内容`);
    response.end();
  }

  /******** 代码结束，下面不要看 ************/
});

server.listen(port);
console.log(
  "监听 " +
    port +
    " 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:" +
    port
);
