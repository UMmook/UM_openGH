// Map 자료형 (이터러블o) for of 구문
// JS의 객체와 비슷 (이터러블x) for in 구문
let bag = new Map();
bag.set("color", "red");    // bag = { color: "red" }
console.log(bag);

let bag2 = { color: "red" };
console.log(bag2);

let cup = new Map([
    ["color", "red"],
    ["handle", true],
    ["material", "ceramic"],
    ["size", "500ml"]
]);
console.log(cup);
cup.set("owner", "js");
console.log(cup);
cup.set("brand", "bone").set("price", 10000);
console.log(cup);

console.log("size: " + cup.size);
console.log("price: " + cup.get("price"));
console.log("material?: " + cup.has("material"));
console.log("material2?: " + cup.has("material2"));
console.log("material delete?: " + cup.delete("material"));
console.log("material delete?: " + cup.delete("material"));

for (let key of cup.keys()) {
    console.log("keys: " + key);
}
for (let value of cup.values()) {
    console.log("values: " + value);
}
for (let entry of cup.entries()) {
    console.log("entrys: " + entry);
}
cup.clear();
console.log(cup);