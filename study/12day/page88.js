// 우물안 개구리 탈출까지 최소 며칠
// 낮 3m 오름 / 밤 2m 내려감 / 우물 깊이 19.4m

// my 풀이식 (우물 높이에서 빼는 식)
let holl = 19.4;
let day = 0;
while (true) {
    holl = holl - 3;        // 낮
    if (holl <= 0) {
        break;
    } else {
        holl = holl + 2;    // 밤
        day = day + 1;
    }
}
console.log("day = " + day);

console.log("-------------------------");

// 교수님 풀이식 (우물 높이만큼 올라가는 식)
let flog = 0;
let count = 0;
while (true) {
    flog = flog + 3;        // 낮
    if (flog > 19.4) {
        break;
    } else {
        flog = flog - 2;    // 밤
        count = count + 1;
    }
}
console.log("count = " + count);