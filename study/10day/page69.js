var currentYear;

var a, b, c;

a = 1;
b = 2;
c = 3;

var d = 4;

/* c/java 정수 : 부호 유무, 길이 (int, short, long) */
// 기본형 (단일값)
var e = 5;          // 숫자형 - 정수형
var e2 = 5.2;       // 숫자형 - 실수형
var f = 'hello';    // 문자형
var g = true;       // true 참 / false 거짓

// 복합형 (여러개)
var season = ["봄", "여름", "가을", "겨울"];    // 문자형 단일
var season2 = ["", "봄", "여름", "가을", "겨울"];
console.log(season[1]);
var student = {stu_name : "김진수", gpa : 4.5}; // 문자형, 숫자형 여러 타입
//var seasonFood = {"봄" : "딸기", "여름" : "수박", "가을" : "감", "겨울" : "귤"};
console.log(student[1]);
console.log(student.gpa);

// 특수 유형
// undefined : 공간은 있는데 아무것도 없다
// null : 값이 없다

// 모던 웹 (ES6)
let h = 10;
const k = 20;

var a_var = 200;
console.log(a_var);

var a_var = "hello";
console.log(a_var);

/*
let a_let = 200;
console.log(a_let);

let a_let = "hello";
console.log(a_let);
*/

var my_pi = 3.14;
console.log(my_pi);

my_pi = 2 * my_pi * 3;
console.log(my_pi);

/*
const my_pi_const = 3.14;
console.log(my_pi_const);

my_pi_const = 2 * my_pi_const * 3;
console.log(my_pi_const);
*/

var auth_num = 120;

auth_num = 100; // 해킹 [var 변수는 중간에 값이 변경하면 변경이 됨]

if (auth_num == 100) {
    console.log("유료 버전 동작");
} else {
    console.log("본 기능은 유료 버전에서 지원되요");
}

const auth_num_const = 120;

// auth_num_const = 100;
// const 변수는 중간 수정을 못함

if (auth_num_const == 100) {
    console.log("유료 버전 동작");
} else {
    console.log("본 기능은 유료 버전에서 지원되요");
}