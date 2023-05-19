const image = document.querySelector(".img");
const image2 = document.querySelector(".img2");
const image3 = document.querySelector(".img3");
const text = document.querySelector(".img-msg");
const text2 = document.querySelector(".img-msg2");
const text3 = document.querySelector(".img-msg3");
const btnClose = document.querySelector(".btn-close");
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

image.addEventListener("click", openpopup);
image2.addEventListener("click", openpopup2);
image3.addEventListener("click", openpopup3);
btnClose.addEventListener("click", closepopup);