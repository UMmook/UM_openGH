// 5/3 = 몫 : 1, 나머지 : 2
// 5/3 = 1.666...
let number369 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
if (number369[0] % 3 == 1) { // 1, 4, 7, 10 : 3으로 나눈 나머지가 1
    console.log(number369[0]);
} else if (number369[1] % 3 == 2) { // 2, 5, 8 : 3으로 나눈 나머지가 2
    console.log(number369[1]);
} else if (number369[2] % 3 == 0) { // 3, 6, 9 : 3으로 나눈 나머지가 0
    console.log(number369[2]);
}