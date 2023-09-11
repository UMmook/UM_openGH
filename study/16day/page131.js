// 이터레이터
// 이터러블(Iterable): 순서가 있어서 순차적으로 처리 가능
// Iterable Object: Array, Map, Set
// for of(Iterable) vs for in(Iterable x)

let mes_hi = "hello";
for (let char of mes_hi) {
    console.log(char);
}

let chArr = [...mes_hi];
console.log(chArr.length + chArr[1]);

let [ch0, ch1, ch2] = mes_hi;
console.log(ch0 + ", " + ch1 + ", " + ch2);

arr = [1, 2, 3];
let it = arr[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// 제너레이터: 일반 객체 (이터러블X)를 이터러블하게 만드는 것
// yield

const fn1 = () => {
    console.log(1);
    console.log(2);
    console.log(3);
}

fn1();

function* gen1() {
    yield 1;
    yield 2;
    yield 3;
}
let g1 = gen1();
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());

let g2 = gen1();
for (let i of g2) {
    console.log(i);
}