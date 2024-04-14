// let arr = [2, 3, -2, 2, 6]
// let sumofSquare = 0
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         sumofSquare = sumofSquare + arr[i] ** 2
//     }

// }
// console.log(sumofSquare)

person = "jack";
age = 18;
function myTag(strings, personExp, ageExp) {
  let str0 = strings[0];
  let str1 = strings[1];
  let str2 = strings[2];

  let ageStr;
  if (ageExp > 99) {
    ageStr = "old";
  } else {
    ageStr = "young";
  }
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}
let output = myTag`That ${person} is a ${age}.`;
console.log(output);
