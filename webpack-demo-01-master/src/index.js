import "./reset.css";
import "./style.css";
import png from "./images/1.png";
import axios from "axios";
import Print from "./print";

const button = document.createElement("button");
button.innerText = "懒加载";

button.addEventListener("click", () => {
  import("./a.js").then(
    ({ a }) => {
      console.log(a);
    },
    () => {}
  );
});

document.body.appendChild(button);
console.log(axios,Print);