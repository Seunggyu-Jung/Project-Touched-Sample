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

image.addEventListener("click", openpopup);
image2.addEventListener("click", openpopup2);
image3.addEventListener("click", openpopup3);
btnClose.addEventListener("click", closepopup);
btnClose2.addEventListener("click", closepopup2);
btnClose3.addEventListener("click", closepopup3);

// // YouTube IFrame API를 로드합니다.
// var tag = document.querySelector('script');
// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// var player;

// // YouTube 플레이어를 생성하고 설정합니다.
// function onYouTubeIframeAPIReady() {
//   player = new YT.Player('player', {
//     height: '0',
//     width: '0',
//     videoId: 'PsZtGZJS7Eg',
//     events: {
//       'onReady': onPlayerReady
//     },
//     playerVars: {
//       'autoplay': 1,
//       'loop': 1,
//       'controls': 0,
//       'showinfo': 0,
//       'autohide': 1,
//       'playlist': 'PsZtGZJS7Eg'
//     }
//   });
// }

// // 플레이어가 준비되면 재생을 시작합니다.
// function onPlayerReady(event) {
//   event.target.playVideo();
// }