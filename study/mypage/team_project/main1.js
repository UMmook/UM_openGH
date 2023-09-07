     
btn_status = "false";
document.getElementById("btn1").onclick = () => {
    if(btn_status == "true"){
        document.getElementById("btn1").setAttribute("src","img/toggle-off-solid.svg")
        document.getElementById("onoff").innerText = "OFF"
        btn_status = "false"
    }else{
        document.getElementById("btn1").setAttribute("src","img/toggle-on-solid.svg")
        document.getElementById("onoff").innerText = "ON"
        btn_status = "true"
    }
}

     
btn_status = "false";
document.getElementById("btn2").onclick = () => {
    if(btn_status == "true"){
        document.getElementById("btn2").setAttribute("src","img/toggle-off-solid.svg")
        document.getElementById("onoff2").innerText = "OFF"
        btn_status = "false"
    }else{
        document.getElementById("btn2").setAttribute("src","img/toggle-on-solid.svg")
        document.getElementById("onoff2").innerText = "ON"
        btn_status = "true"
    }
}


let big = document.getElementById("dining_big");
big.addEventListener("mouseover",()=>{big.style.width='100px';})
big.addEventListener("mouseout",()=>{big.style.width='70px';})

let big2 = document.getElementById("office_big");
big2.addEventListener("mouseover",()=>{big2.style.width='100px';})
big2.addEventListener("mouseout",()=>{big2.style.width='70px';})


// 음악 재생 컨트롤 버튼
function nextSong(){
    document.getElementById("song").innerText ="Next Song"
}

function previousSong(){
    document.getElementById("song").innerText ="Previous Song"
}

stop_status ="false"
document.getElementById("stop").onclick = () => {
    if(stop_status == "true"){
        document.getElementById("stop").setAttribute("src","img/stop.png")
        document.getElementById("song").innerText = "Playing"
        stop_status = "false"
    }else{
        document.getElementById("stop").setAttribute("src","img/play.png")
        document.getElementById("song").innerText = "Stop"
        stop_status = "true"
    }
}

// 온도 증가,감소 버튼 
let count = 17;
function up_btn(){
    if(count < 30){
        count++;
        document.getElementById("count").innerText = count;
    }else {
        (count ==30);{
            alert("온도범위초과")
        } 
    
    }
}

// 온도 범위 초과 알림창 
function down_btn(){
    if(count > 17){
        count--;
        document.getElementById("count").innerText = count;
    }else {
        (count ==17);{
            alert("온도범위초과")
        } 
    
    }
}

//footer 컬러 변경

let color = document.getElementById("toggle");
color.addEventListener("mouseover",()=>{color.style.color="pink";})
color.addEventListener("mouseout",()=>{color.style.color="gray";})

let color2 = document.getElementById("mic");
color2.addEventListener("mouseover",()=>{color2.style.color="pink";})
color2.addEventListener("mouseout",()=>{color2.style.color="gray";})

let color3 = document.getElementById("plus");
color3.addEventListener("mouseover",()=>{color3.style.color="pink";})
color3.addEventListener("mouseout",()=>{color3.style.color="gray";})

let color4 = document.getElementById("video");
color4.addEventListener("mouseover",()=>{color4.style.color="pink";})
color4.addEventListener("mouseout",()=>{color4.style.color="gray";})

let color5 = document.getElementById("chart");
color5.addEventListener("mouseover",()=>{color5.style.color="pink";})
color5.addEventListener("mouseout",()=>{color5.style.color="gray";})
