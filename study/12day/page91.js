// 전역 vs 지역 변수
/*
function addNumber() {
    var sum = 10 + 20;  // var : 지역 (local) 변수 - 함수 안에서만 쓰임
    sum2 = 10 + 30      // var 없는 변수 : 전역 (global) 변수
}
//addNumber();

//console.log("sum2 = " + sum2);

//console.log("sum = " + sum);


// 호이스팅
var x = 10;
function test_hoist() {
    var z = 5;
    console.log("z = " + z);
    console.log("x = " + x);
}

//test_hoist();


// let : 블록 단위, var : 함수 단위
function calcSum(n) {   // n : 매개변수 (parameter)
    let sumVal = 0;
    for (var i=1; i<=n; i++) {
        sumVal += i;
    }
    console.log("i: " + i);
    console.log("sumVal(1): " + sumVal);
}
calcSum(10);    // 10 : 인수 (argument)
// console.log("sumVal(2): " + sumVal);


function calcSum2(n) {   // n : 매개변수 (parameter)
    let sumVal = 0;
    for (var i=1; i<=n; i++) {
        sumVal += i;
        return sumVal;
    }
}
let retVal = calcSum2(10);    // 10 : 인수 (argument)
console.log("sum : " + retVal);


// insertStudentInfo : IT학과 신입생들 인적 사항 등록
function insertStudentInfo(name, hacbun, juso, jeongong="IT", hangnyun=1) {

}
insertStudentInfo("지니", 1234, "한국", "전산", 3);
insertStudentInfo("자니", 1234, "한국");


function multiple(b=5, c=10, a) {
    return a + b + c;
}
console.log(multiple(1, 3, 5));
console.log(multiple(1));

function multiple2(a, b=5, c=10) {
    return a + b + c;
}
console.log(multiple2(1, 3, 5));
console.log(multiple2(1));


// 익명함수
let sum_func = function(a, b) {
    return a + b;
}
console.log(sum_func(1, 2));


// 즉시실행함수
(function(a, b) {
    sum = a + b;
}(1, 2))
console.log(sum);


let sum_func = (a, b) => {
    return a + b;
}
*/

// 화살표 함수 (ES6) 매개변수 0개
// 같은 방식 [hi : 옛날 / hi2, hi3 : 요즘]
const hi = function() {
    return "hi"
};
const hi2 = () => function() {
    return "hi"
};
const hi3 = () => "hi";


// 화살표 함수 (ES6) 매개변수 1개
const hi4 = function(user) {
    console.log("hi" + user);
}
const hi5 = (user) => {
    console.log("hi" + user);
}
const hi6 = user => {
    console.log("hi" + user);
}


// 화살표 함수 (ES6) 매개변수 2개 이상
const hi7 = function(a, b) {
    return a + b;
}
const hi8 = (a, b) => {
    return a + b;
}