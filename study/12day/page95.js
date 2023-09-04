// page 69 참고
var numbers = new Array();  // numbers = [];
numbers2 = new Array(4);    // 배열의 갯수를 제한할 때 사용
numbers3 = [1, 2, 3, 4, 5];
numbers4 = Array(1, 2, 3, 4, 5);
console.log(numbers4.length);

let num = ["일", "이", "삼", "사"];
for (let i=0; i<num.length; i++) {
    console.log(num[i]);
}

a = [1, 2, 3];
b = [7, 8, 9];
console.log(a + b); // 1, 2, 37, 8, 9 == [1, 2, 3][7, 8, 9]
c = a.concat(b);
console.log(c);     // [1, 2, 3, 7, 8, 9]

// join : 배열요소 -> 문자열 하나
a = ['010', '1234', '5678'];
let a_join = a.join();
console.log(a_join);
let a_join2 = a.join('-');
console.log(a_join2);

// push : 배열 뒤에 추가
a = [1, 2, 3];
a2 = a.push(4, 5);
console.log(a2);
console.log(a);

// unshift : 배열 앞에 추가
a3 = a.unshift(0);
console.log(a3 + "개, a = " + a);

// pop : 배열 뒤에 꺼내기
chars = ["a", "b", "c", "d"];
popped = chars.pop();
console.log(popped + "가 나오고 " + chars + "가 남았다.");

// shift : 배열 앞에 꺼내기
chars = ["a", "b", "c", "d"];
popped = chars.shift();
console.log(popped + "가 나오고 " + chars + "가 남았다.");

// splice : 임의 조작
// case1 : 인수 1개일 때
numbers = [1, 2, 3, 4, 5];
a = numbers.splice(2);  // 2번 인덱스 이후로 전부 추출
console.log("얻은 것 : " + a + " / 남은 것 : " + numbers);

// case2 : 인수 2개일 때
numbers = [1, 2, 3, 4, 5];
a = numbers.splice(2, 1);  // 2번 인덱스 이후로 1개 추출
console.log("얻은 것 : " + a + " / 남은 것 : " + numbers);

// case3 : 인수 3개일 때
numbers = [1, 2, 3, 4, 5];
a = numbers.splice(2, 1, 30);  // 2번 인덱스 이후로 1개 추출, 추출한 자리에 채움
console.log("얻은 것 : " + a + " / 남은 것 : " + numbers);

// slice : 원본 유지
numbers = [1, 2, 3, 4, 5];
a = numbers.slice(2);  // 2번 인덱스 이후로 전부 추출 / 원본은 유지
console.log("얻은 것 : " + a + " / 남은 것 : " + numbers);

numbers = [1, 2, 3, 4, 5];
a = numbers.slice(2, 4);  // 2 이상 ~ 4 미만 인덱스 추출 / 원본은 유지
console.log("얻은 것 : " + a + " / 남은 것 : " + numbers);