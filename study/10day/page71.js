/*
x = "10";

if (x == 10) {
    console.log("정답");
    res = x + 1;
    console.log(res);
}
*/

x = "10";

if (x === 10) {
    console.log("정답");
    res = x + 1;
    console.log(res);
} else {
    console.log("10아니네");
}

if ("a" > "A") {    // 97 > 65
    console.log("a(97)가 A(65)보다 크다")
}

if ("apple" > "Apple") {
    console.log("apple가 Apple보다 크다")
}

// or 또는 ||
// and 그리고 &&
// not 반대 !

let test_num = 10;
if (test_num < 20) {
    console.log("20보다 작네");
} else if (test_num > 20) {
    console.log("20보다 크네")
}