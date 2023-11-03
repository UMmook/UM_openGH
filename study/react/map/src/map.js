const numbers = [10, 20, 30, 40, 50];
const mapped = numbers.map(
    (num) => { return num * 2; } // num 10, 20, 30, 40, 50
)
console.log(mapped);

const mapIndex = numbers.map(
    (num, idx) => { return num * idx; } // num 10, 20, 30, 40, 50
)
console.log(mapIndex);

const names = ['사과', '망고', '토마토', '오렌지'];
const nameList = names.map(name => `<li>${name}</li>`);
console.log(nameList);