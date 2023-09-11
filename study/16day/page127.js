/*
let num = [];
num[0] = "일";
console.log(num);
// num[1] : 비워짐
num[2] = "삼";
console.log(num);
console.log(num.length);

// 배열용 foreach()
let numbers = ["피자", "치킨", "탕수육", "샐러드"];
for (let i=0; i<numbers.length; i++) {
    console.log(numbers[i]);
}
numbers.forEach(number => {
    console.log(number);
});

// 이터러블 (배열도 이터러블 중 하나) : for of 문으로도 가능
numbers.forEach(number => {
    console.log(number);
});
numbers.forEach((number, i) => {
    console.log(`${i}번째 데이터: ${number}`);
});

numbers.forEach(number => {
    // if (number == '탕수육') { break; } 
    // forEach는 break/continue 안 됨.
    // break/continue 쓰려면 for of문을 쓰자
    console.log(number);
});

a = [1, 2, 3];
b = [7, 8, 9];
c = [10, 11];
d = a.concat(b, c);
console.log(d);
e = a.concat(c, b);
console.log(e);
// 전개 연산자
let patty = ["닭", "소고기", "돼지", "생선"];
let vegitable = ["토마토", "양파", "양상추"];
// let bread = ["샌드위치 빵", "햄버거 빵", "핫도그 빵"];

let burger = ["햄버거 빵", patty, vegitable];
console.log("burger = " + burger);
console.log("burger = " + burger.length);
let burger2 = ["햄버거 빵", ...patty, ...vegitable];
console.log("burger2 = " + burger2);
console.log("burger2 = " + burger2.length);

let my_data = [1, 2, 3, 4, 5];
const data_sum = (a, b, c, d, e) => {
    return a + b + c + d + e;
}
console.log("data_sum = " + data_sum(my_data));
console.log("data_sum = " + data_sum(...my_data));

let fruit_basket = ["사과", "바나나", "배"];
fruit_basket2 = fruit_basket;               // 얕은 복사
fruit_basket2[1] = "망고";
console.log("fruit_basket2: " + fruit_basket2);
console.log("fruit_basket: " + fruit_basket);

let new_fruit_basket = ["사과", "바나나", "배"];
new_fruit_basket2 = [...new_fruit_basket];  // 깊은 복사
new_fruit_basket2[1] = "망고";
console.log("new_fruit_basket2: " + new_fruit_basket2);
console.log("new_fruit_basket: " + new_fruit_basket);

let my_data_rev = my_data.reverse();
console.log("my_data_rev: " + my_data_rev);

let my_data_not_sorted = [5, 2, 4, 1, 3];
console.log("sort: " + my_data_not_sorted.sort());
a_week = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
console.log("sort: " + a_week.sort());

let my_data_not_sorted2 = [52, 23, 4, 11, 3];
console.log("sort: " + my_data_not_sorted2.sort());
// 결과 : 11, 23, 3, 4, 52 (sort문자열 정렬)

console.log("sort: " + my_data_not_sorted2.sort(
    (a, b) => {return a-b;} // 정방향 정렬 함수
))
console.log("sort: " + my_data_not_sorted2.sort(
    (a, b) => {return b-a;} // 역방향 정렬 함수
))

// Symbol
const id = Symbol("id");
const tel = Symbol("tel");

const member = {
    name: "김진수",
    [id]: 1234,
    [tel]: 1012345678
}
for (item in member) {
    console.log(item + ": " + member[item]);
}
// name: 김진수 만 조회: 심볼은 조회가 안 됨
console.log(member[id]);
*/

// 구조 분해 할당(디스트럭팅, distructing)
let fruits = ["사과", "샤인머스켓"];
let apple = fruits[0];
let musket = fruits[1];

let [apple2, musket2] = fruits;
console.log(apple2 + "/" + musket2);

let [a, b] = [];
console.log(a + "/" + b);

let season = ["봄", "여름", "가을", "겨울"];
let [spring,,,winter] = season;
console.log(spring + "/" + winter);

let jo3 = ["김씨", "이씨", "박씨", "남씨", "전씨"];
let [jo_leader, ...jo_members] = jo3;
console.log(jo_leader);
console.log(jo_members);

// swap
let x = 10;
let y = 20;
let temp = 0;
temp = y;
y = x;
x = temp;
console.log(x + "/" + y);
[x, y] = [y, x];
console.log(x + "/" + y);

const student = {
    name: "김진수",
    gpa: 4.5
}
let s_name = student.name;
let gpa = student["gpa"];
console.log(s_name + "/" + gpa);
/*
let s_name2, gpa2;
{s_name2, gpa2} = {
    s_name2: "김진수",
    gpa2: 4.5
};
console.log(s_name2 + "/" + gpa2);
*/