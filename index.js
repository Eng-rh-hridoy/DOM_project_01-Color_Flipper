const normalColor = ["red", "blue", "green", "rgb(224,255,255)", "rgb(50,205,50)", "#FF00FF"];

const colorSpan = document.getElementById("color");
const body = document.body;
const simpleBtn = document.getElementById("simple_btn");

// simpleColor
simpleBtn.addEventListener("click", function(){
    let randomNum = randNumFornormalColor();
    body.style.backgroundColor = normalColor[randomNum];
    colorSpan.innerText = normalColor[randomNum];
});

// function for generate random number for normal color
function randNumFornormalColor(){
    return Math.floor(Math.random() * normalColor.length);
}
