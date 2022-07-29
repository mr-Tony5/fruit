var head = document.querySelector(".order");




var a = document.querySelector(".home .container .home-text a");

// a.onclick = () => {
 
// }

function run(){
    head.style.backgroundColor = "red";
    head.textContent = "hello world";
head.innerHTML = "<marquee>word</marque>";
}

var input = document.querySelector("input");


var msg =document.querySelector("#message");

input.addEventListener("keyup", function(){
    var inputvalue = document.querySelector("input").value;
    msg.innerHTML = inputvalue;
})

input.addEventListener("keyup", sav)

function  sav(){
    console.log("moved down")
}

var icon = document.querySelector(".fa-bars");
var nav = document.querySelector(".nav");
icon.onclick = () => {
    nav.classList.toggle("active");
}

window.onscroll = () => {
    nav.classList.remove("active");
}



