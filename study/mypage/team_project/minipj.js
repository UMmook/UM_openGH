
window.onload = function (){
    const canvas = document.querySelector('#icon_background1');
    const ctx = canvas.getContext('2d');

    // 문
    ctx.fillStyle = '#399de2';
    ctx.beginPath();
    ctx.moveTo(80, 55);
    ctx.lineTo(80, 104);
    ctx.lineTo(135, 104);
    ctx.lineTo(135, 50);
    ctx.lineTo(80, 55);
    ctx.fill();
    ctx.strokeStyle = '#399de2';
    // 테두리
    ctx.fillRect(50, 99, 30, 6);
    ctx.fillRect(150, 55, 40, 6);
    ctx.fillRect(180, 55, 12, 50);
    ctx.fillRect(180, 99, 30, 6);
    // 손잡이
    ctx.fillStyle = '#fff';
    ctx.fillRect(120, 80, 8, 6);
    ctx.stroke();

    
    // 
    const canvas2 = document.querySelector('#icon_background2');
    const ctx2 = canvas2.getContext('2d');

    ctx2.fillStyle = '#e26052';
    ctx2.strokeStyle = '#e26052';
    ctx2.beginPath();
    ctx2.ellipse(150, 82, 60, 28, 0, 0, Math.PI, true);
    ctx2.fill();
    ctx2.closePath();
    ctx2.stroke();

    ctx2.beginPath();
    ctx2.ellipse(150, 86, 20, 8, 0, 0, Math.PI);
    // ctx2.arc(146, 100, 40, 0, (Math.PI)); 
    ctx2.fillRect(146, 40, 10, 15);
    ctx2.fill();
    ctx2.stroke();

    // 
    const canvas3 = document.querySelector('#icon_background3');
    const ctx3 = canvas3.getContext('2d');

    ctx3.fillStyle = '#33d56d';
    ctx3.strokeStyle = '#33d56d';
    ctx3.beginPath();
    ctx3.moveTo(70, 100);
    ctx3.lineTo(180, 100);
    ctx3.lineTo(180, 50);
    ctx3.lineTo(70, 50);
    ctx3.fill();
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(180, 75);
    ctx3.lineTo(230, 55);
    ctx3.lineTo(230, 95);
    ctx3.closePath();
    ctx3.fill();
    ctx3.stroke();


    // 
    const canvas4 = document.querySelector('#icon_background4');
    const ctx4 = canvas4.getContext('2d');

    ctx4.fillStyle = '#5e31c7';
    ctx4.strokeStyle = '#5e31c7';
    ctx4.beginPath();
    ctx4.moveTo(95, 60);
    ctx4.quadraticCurveTo(150, 35, 205, 60);
    ctx4.lineWidth = "4"
    ctx4.stroke();

    ctx4.beginPath();
    ctx4.moveTo(115, 75);
    ctx4.quadraticCurveTo(150, 60, 185, 75);
    ctx4.lineWidth = "4"
    ctx4.stroke();

    ctx4.beginPath();
    ctx4.ellipse(150, 92, 22, 9, 0, 0, 360);
    ctx4.fill();
    ctx4.stroke();


    
    const btn1 = document.getElementById("on_off_btn1")
    const btnChange1 = document.getElementById("change1")
    const icon1 = document.getElementById("icon_background1")


    btnChange1.addEventListener("click", function() {
        if(btn1.innerText === 'off') {
            btn1.innerText = 'on';
            icon1.style.backgroundColor = "#d5e6ed";
        }
        else {
            btn1.innerText ='off';
            icon1.style.backgroundColor = "#00000015";
        }
    });
    //
    const btn2 = document.getElementById("on_off_btn2")
    const btnChange2 = document.getElementById("change2")
    const icon2 = document.getElementById("icon_background2")
    
    btnChange2.addEventListener("click", function() {
        if(btn2.innerText === 'off') {
            btn2.innerText = 'on';
            icon2.style.backgroundColor = "#ece2e5";
        }
        else {
            btn2.innerText ='off';
            icon2.style.backgroundColor = "#00000015";
        }
    });
    //
    const btn3 = document.getElementById("on_off_btn3")
    const btnChange3 = document.getElementById("change3")
    const icon3 = document.getElementById("icon_background3")
    
    btnChange3.addEventListener("click", function() {
        if(btn3.innerText === 'off') {
            btn3.innerText = 'on';
            icon3.style.backgroundColor = "#d4ede4";
        }
        else {
            btn3.innerText ='off';
            icon3.style.backgroundColor = "#00000015";
        }
    });
    //
    const btn4 = document.getElementById("on_off_btn4")
    const btnChange4 = document.getElementById("change4")
    const icon4 = document.getElementById("icon_background4")
    
    btnChange4.addEventListener("click", function() {
        if(btn4.innerText === 'off') {
            btn4.innerText = 'on';
            icon4.style.backgroundColor = "#ddd6ee";
        }
        else {
            btn4.innerText ='off';
            icon4.style.backgroundColor = "#00000015";
        }
    });
    // 



    let on1Back = document.getElementById("on1");
    let on2Back = document.getElementById("on2");
    let on3Back = document.getElementById("on3");
    let on4Back = document.getElementById("on4");

    on1Back.addEventListener("click", function(){
        document.getElementById("on1").style.backgroundColor = "#fff";
    });
    on2Back.addEventListener("click", function(){
      document.getElementById("on2").style.backgroundColor = "#fff";
    });

    on3Back.addEventListener("click", function(){
      document.getElementById("on3").style.backgroundColor = "#fff";
    });

    on4Back.addEventListener("click", function(){
        document.getElementById("on4").style.backgroundColor = "#fff";
    });



}