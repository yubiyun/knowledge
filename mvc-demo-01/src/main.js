import "./style.scss";
// import { module as module1 } from './1对象写法.js'
import { Module as Module1 } from "./1class写法.js";
import { Module as Module2 } from "./2.js";
import { Module as Module3 } from "./3.js";

const app = document.getElementById("app");

// module1.init(app)
new Module1(app);
new Module2(app);
new Module3(app);
