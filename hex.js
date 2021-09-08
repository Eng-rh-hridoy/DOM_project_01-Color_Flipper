const hexColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const colorSpan = document.getElementById("color");
const body = document.body;
const hexBtn = document.getElementById("hexBtn");

hexBtn.addEventListener("click", function(){
    let hexCol = "#";
    for(var i = 0; i < 6; i++){
        hexCol += hexColor[randNumForHexColor()];
    }
    colorSpan.innerText = hexCol;
    body.style.backgroundColor = hexCol;
});

// function for generate random number for HEX color
function randNumForHexColor(){
    return Math.floor(Math.random() * hexColor.length);
}