let count = localStorage.getItem("a");
      if (count !== null) {
        count = parseInt(count, 10);
      } else {
        count = 0;
        localStorage.setItem("a", count);
      }
      const $ = (s) => document.querySelector(s);
      $(".h1").innerText = count;
      document.onclick = function () {
        count++;
        localStorage.setItem("a", count);
        $(".h1").innerText = count;
      };