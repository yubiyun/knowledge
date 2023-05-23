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
  if (path === "/validation_codes") {
    mock(response, { verb: "POST", status: 200, data: {} });
  } else if (path === "/style.css") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/css;charset=utf-8");
    response.write(`body {color: red;}`);
    response.end();
  } else {
    response.statusCode = 404;
    response.setHeader("Content-Type", "text/html;charset=utf-8");
    response.write(`你输入的路径不存在对应的内容`);
    response.end();
  }
  function mock(response, { verb, status, data }) {
    if (method === "OPTIONS") {
      response.statusCode = 200;
      response.setHeader(
        "Access-Control-Allow-Origin",
        "http://localhost:5173"
      );
      response.setHeader("Access-Control-Allow-Headers", "Content-Type");
      response.setHeader("Access-Control-Allow-Methods", verb);
      response.end();
    } else if (method === verb) {
      response.statusCode = status;
      response.setHeader(
        "Access-Control-Allow-Origin",
        "http://localhost:5173"
      );
      response.setHeader("Content-Type", "text/json;charset=utf-8");
      response.write(JSON.stringify({data}));
      response.end();
    }
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
