const $ = (s) => document.querySelector(s);
      const $$ = (s) => document.querySelectorAll(s);
      function show(i) {
        $$("section").forEach(($page) => $page.classList.remove("show"));
        $$("section")[i].classList.add("show");
      }
      $(".btn1").onclick = function () {
        history.pushState({ page: 1 }, "", "/b"); //点击后跳转到{ page: 1 }
        show(1);
      };
      $(".btn2").onclick = function () {
        history.pushState({ page: 2 }, "", "/c"); //点击后跳转到{ page: 2 }，点击返回跳转到{ page: 1 }
        show(2);
      };
      $(".btn3").onclick = function () {
        history.replaceState({ page: 2 }, "", "/c"); //点击后将{ page: 1 }更改为{ page: 2 }，点击返回跳转到{ page: 0 }
        show(2);
      };
      window.onpopstate = function () {
        show(history.state ? history.state.page : 0);
      };