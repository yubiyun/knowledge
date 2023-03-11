let arr = [2, 3, -2, 2, 6]
let sumofSquare = 0
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        sumofSquare = sumofSquare + arr[i] ** 2
    }

}
console.log(sumofSquare)