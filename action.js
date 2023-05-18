const image = document.querySelector(".img");
const text = document.querySelector(".img-msg");
const btnClose = document.querySelector(".btn-close");

function openpopup(){
    image.classList.add("clicked");
    text.classList.add("active");
    
}

function closepopup(){
    text.classList.remove("active");
    image.classList.remove("clicked");
}

image.addEventListener("click", openpopup);
btnClose.addEventListener("click", closepopup);