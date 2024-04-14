// import "./style.css";
// import png from "./images/1.png";

// const h1 = document.createElement("h1");
// h1.innerHTML = "hello world";
// document.body.appendChild(h1);

// const img = document.createElement("img");
// img.src = png;
// document.body.appendChild(img);

const button = document.createElement("button");
button.innerText = "懒加载";
button.addEventListener("click", () => {
  import("./a.js").then(
    (a) => {
      console.log(a);
    },
    () => {}
  );
});
document.body.appendChild(button)
