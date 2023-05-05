function jQuery(选择器字符串) {
  const 所有标签 = document.querySelectorAll(选择器字符串);
  return {
    addClass(className) {
      for (let i = 0; i < 所有标签.length; i++) {
        const 标签 = 所有标签[i];
        标签.classList.add(className);
      }
    },
  };
}
const $ = jQuery;
$(".red").addClass("green");