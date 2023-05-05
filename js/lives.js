function f() {
  let lives = 3;
  return {
    getLives() {
      return lives;
    },
    addLives() {
      lives += 1;
      return lives;
    },
    die() {
      lives -= 1;
      return lives;
    },
  };
}
const api = f();
const lives1 = api.getLives(); //3
console.dir(lives1);
const lives2 = api.addLives(); //4
console.dir(lives2);
const lives3 = api.die(); //没有执行addLives时，结果为2，执行addLives后，结果为3
console.dir(lives3);