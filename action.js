const dog = document.querySelector(".top-dog");
const talk = document.querySelector(".speak");
const clickedDog = document.querySelector(".top-dog.clicked");
const image = document.querySelector(".img");
const image2 = document.querySelector(".img2");
const image3 = document.querySelector(".img3");
const text = document.querySelector(".img-msg");
const text2 = document.querySelector(".img-msg2");
const text3 = document.querySelector(".img-msg3");
const btnClose = document.querySelector(".btn-close");
const btnClose2 = document.querySelector(".btn-close2");
const btnClose3 = document.querySelector(".btn-close3");
const dim = document.querySelector(".dim");


function dogSpeak() {
    const randomSpeak = function () {
        const speak = ["멍멍!! 사랑해요!", "멍멍!! 놀아줘요!", "멍멍!! 안아줘요!", "멍멍!! 항상 고마워요!" , "멍멍!! 앞으로도 잘 부탁해요!", "멍멍!!"];
            
            return speak[parseInt(Math.random() * 6)]
            
    }
    talk.textContent = randomSpeak();
}


function openpopup(){
    image.classList.add("clicked");
    text.classList.add("active");
}

function openpopup2(){
    image2.classList.add("clicked");
    text2.classList.add("active");
}

function openpopup3(){
    image3.classList.add("clicked");
    text3.classList.add("active");
}



function closepopup(){
    text.classList.remove("active");
    image.classList.remove("clicked");
}

function closepopup2(){
    text2.classList.remove("active");
    image2.classList.remove("clicked");
}

function closepopup3(){
    text3.classList.remove("active");
    image3.classList.remove("clicked");
}


dog.addEventListener("click", dogSpeak);
image.addEventListener("click", openpopup);
image2.addEventListener("click", openpopup2);
image3.addEventListener("click", openpopup3);
btnClose.addEventListener("click", closepopup);
btnClose2.addEventListener("click", closepopup2);
btnClose3.addEventListener("click", closepopup3);



// 음악 자동 재생 및 멈춤 버튼
    var btn = document.querySelector(".btn");
    var audioElement = document.querySelector("audio");
    var isPlaying = true; // 재생 상태를 추적하는 변수

    btn.addEventListener('click', () => {
      if(isPlaying) {
        audioElement.pause();
        isPlaying = false;
        btn.textContent = "재생";
      } else {
        audioElement.play(); // 재생
        isPlaying = true;
        btn.textContent = "일시정지";
      }
    });
    // 음성 플레이어 제어
    // audioElement.pause(); // 일시 정지
    // audioElement.volume = 0.5; // 볼륨 설정 등


// 맨 위로 올라가기 버튼
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


