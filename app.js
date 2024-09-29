const button1=document.getElementById("btn1");
const button2=document.getElementById("btn2");
const resetBtn=document.getElementById("reset");

const p1Display=document.getElementById("p1Display");
const p2Display=document.getElementById("p2Display");
var dropDown=document.getElementById("playto");

var p1Score=0;
var p2Score=0;
var finalScore=5;

button1.addEventListener('click' , function() {
    p1Score+=1;
    p1Display.textContent=p1Score;
    if(p1Score==finalScore) {
        p1Display.style.color="green";
        p2Display.style.color="red";
        button1.disabled=true;
        button2.disabled=true;

    } 
})

button2.addEventListener('click' , function() {
    p2Score+=1;
    p2Display.textContent=p2Score;
    if(p2Score==finalScore) {
        p1Display.style.color="red";
        p2Display.style.color="green";
        button1.disabled=true;
        button2.disabled=true;
    }
})

resetBtn.addEventListener('click', function(){
    p1Score=0;
    p2Score=0;
    p1Display.textContent=p1Score;
    p2Display.textContent=p2Score;
    button1.disabled=false;
    button2.disabled=false;
    p1Display.style.color="black";
    p2Display.style.color="black";
})

function resetGame() {
    p1Score=0;
    p2Score=0;
    p1Display.textContent=p1Score;
    p2Display.textContent=p2Score;
}

dropDown.addEventListener('change' , function() {
    var selectedValue=dropDown.value;
    finalScore=selectedValue;
    p1Score=0;
    p2Score=0;
    p1Display.textContent=p1Score;
    p2Display.textContent=p2Score;
    button1.disabled=false;
    button2.disabled=false;
    p1Display.style.color="black";
    p2Display.style.color="black";
})
  