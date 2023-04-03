const Storage = {
  set(key, value, n) {
    let data = { value };
    if (seconds !== undefined) {
      data.expires = Date.now() + n * 1000;
    }
    localStorage.setItem(key, JSON.stringify(data));
  },
  get(key) {
    let text = localStorage.getItem(key);
    if (text) {
      let json = JSON.parse(text);
      if (json.expires === undefined || Date.now() <= json.expires) {
        return json.value;
      }
      localStorage.removeItem(key);
    }
  },
  remove(key) {
    localStorage.removeItem(key);
  },
};
Storage.set("name", "jirengu");
Storage.set("sex", "male", 3); //有效期3秒
console.log(Storage.get("name")); //"jirengu"
console.log(Storage.get("sex")); //"male"
setTimeout(function () {
  console.log(Storage.get("sex"));
}, 4000); //undefined 4s已过期
