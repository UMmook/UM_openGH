// 전등
btn1_status = "red";
document.getElementById("btn1").onclick = () => {
    if (btn1_status == "red") {
        document.getElementById("btn1").setAttribute("src", "img/switch-blue.PNG");
        document.getElementById("box1_txt1").innerText = "On";
        document.getElementById("box1").style.cssText = 'height: 400px';
        document.getElementById("box1_hid").style.display = 'block';
        btn1_status = "blue";
    } else {
        document.getElementById("btn1").setAttribute("src", "img/switch-red.PNG");
        document.getElementById("box1_txt1").innerText = "Off";
        document.getElementById("box1").style.cssText = 'height: 300px';
        document.getElementById("box1_hid").style.display = 'none';
        btn1_status = "red";
    }
}

// 에어컨
btn2_status = "red";
document.getElementById("btn2").onclick = () => {
    if (btn2_status == "red") {
        document.getElementById("btn2").setAttribute("src", "img/switch-blue.PNG");
        document.getElementById("box2_txt1").innerText = "Heating";
        document.getElementById("box2").style.cssText = 'height: 400px';
        document.getElementById("box2_hid").style.display = 'block';
        btn2_status = "blue";
    } else {
        document.getElementById("btn2").setAttribute("src", "img/switch-red.PNG");
        document.getElementById("box2_txt1").innerText = "Off";
        document.getElementById("box2").style.cssText = 'height: 300px';
        document.getElementById("box2_hid").style.display = 'none';
        btn2_status = "red";
    }
}
let count = 17;
document.getElementById("btnTop").onclick = () => {
    if (count < 30) {
        count++;
        document.getElementById("count").innerText = count;
    }
}
document.getElementById("btnBottom").onclick = () => {
    if (count > 17) {
        count--;
        document.getElementById("count").innerText = count;
    }
}
document.getElementById("count").innerText = count;

// 스피커
btn3_status = "red";
document.getElementById("btn3").onclick = () => {
    if (btn3_status == "red") {
        document.getElementById("btn3").setAttribute("src", "img/switch-blue.PNG");
        document.getElementById("box3_txt1").innerText = "Playing";
        document.getElementById("box3").style.cssText = 'height: 400px';
        document.getElementById("box3_hid").style.display = 'block';
        btn3_status = "blue";
    } else {
        document.getElementById("btn3").setAttribute("src", "img/switch-red.PNG");
        document.getElementById("box3_txt1").innerText = "Off";
        document.getElementById("box3").style.cssText = 'height: 300px';
        document.getElementById("box3_hid").style.display = 'none';
        btn3_status = "red";
    }
}

const playBtn = document.getElementById("play");
const musicContainer = document.getElementById("box3_hid");
const audio = document.getElementById("audio");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById("title");

const music = ["1", "2", "3", "4", "5"];
let text_music = 0;

loadSong(music[text_music]);

function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
}
  
function playMusic() {
    musicContainer.classList.add("play");
  
    playBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
  
    audio.play();
}
  
function pauseMusic(){
    musicContainer.classList.remove('play');
    playBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
  
    audio.pause();
}
  
function playPrevSong() {
    text_music--;
  
    if (text_music < 0) {
        text_music = songs.length - 1;
    }
    
    loadSong(music[text_music]);
    playMusic();
}
  
function playNextSong (){
    text_music++;
  
    if(text_music > 4){
        text_music = 0;
    }
  
    loadSong(music[text_music]);
    playMusic();
}

function updateProgress(e){
    const {duration, currentTime} = e.srcElement;

    const progressPer = (currentTime / duration) * 100;

    progress.style.width = `${progressPer}%`;
}

function changeProgress(e){

    const width = e.target.clientWidth; // 전체 넓이

    const offsetX = e.offsetX; // 현재 x 좌표;

    const duration = audio.duration; // 재생길이

    audio.currentTime = (offsetX / width) * duration; 

}

playBtn.addEventListener("click", () => {
    const isPlaying = musicContainer.classList.contains('play');

    if(isPlaying){
        pauseMusic();
    } else{
        playMusic();
    }
});

prevBtn.addEventListener("click", playPrevSong);
nextBtn.addEventListener('click', playNextSong);
audio.addEventListener('ended', playNextSong);
audio.addEventListener('timeupdate', updateProgress);

progressContainer.addEventListener('click', changeProgress);

// TV
btn4_status = "red";
document.getElementById("btn4").onclick = () => {
    if (btn4_status == "red") {
        document.getElementById("btn4").setAttribute("src", "img/switch-blue.PNG");
        document.getElementById("box4_txt1").innerText = "Watching";
        document.getElementById("box4").style.cssText = 'height: 400px';
        document.getElementById("box4_hid").style.display = 'block';
        btn4_status = "blue";
    } else {
        document.getElementById("btn4").setAttribute("src", "img/switch-red.PNG");
        document.getElementById("box4_txt1").innerText = "Off";
        document.getElementById("box4").style.cssText = 'height: 300px';
        document.getElementById("box4_hid").style.display = 'none';
        btn4_status = "red";
    }
}
let sound = 1;
document.getElementById("btnTop2").onclick = () => {
    if (sound < 50) {
        sound++;
        document.getElementById("sound").innerText = sound;
    }
}
document.getElementById("btnBottom2").onclick = () => {
    if (sound > 0) {
        sound--;
        document.getElementById("sound").innerText = sound;
    }
}
document.getElementById("sound").innerText = sound;

let channel = 1;
document.getElementById("btnTop3").onclick = () => {
    if (channel < 100) {
        channel++;
        document.getElementById("channel").innerText = channel;
    }
}
document.getElementById("btnBottom3").onclick = () => {
    if (channel > 0) {
        channel--;
        document.getElementById("channel").innerText = channel;
    }
}
document.getElementById("channel").innerText = channel;