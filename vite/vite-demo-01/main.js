import "./style.css";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8888";

// axios
//   .get("https://mock.apifox.cn/m1/2758806-0-default/me")
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function(){
//   })


//实现发送登录请求
const signInForm = document.querySelector("#signInForm");
signInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("要提交咯");
});
const sendCodeBtn = document.querySelector("#sendCodeBtn");
sendCodeBtn.addEventListener("click", () => {
  const emailInput = document.querySelector("#emailInput");
  if (emailInput === undefined) {
    return;
  }
  const email = emailInput.value;
  axios.post("/validation_codes", { email }).then(
    () => {
      window.alert("发送成功");
    },
    () => {
      window.alert("发送失败");
    }
  );
});
