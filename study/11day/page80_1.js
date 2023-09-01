// for문 딜레이 추가
function sleep(ms) {
    const t1 = Date.now() + ms;
    while(Date.now() < t1) {}
}
for (let count=60; count>=0; count--) {
    console.log(count + "  ");
    sleep(1000); //ms
}
console.log("발사!");

// console.log("ㅋㅋ");
// sleep(2000);
// console.log("ㅋㅋㅋ");