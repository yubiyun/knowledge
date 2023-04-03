function isAndroid() {
  return /android/i.test(navigator.userAgent);
}
console.log(isAndroid()); //安卓手机打印true，反之false