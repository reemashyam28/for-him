const CORRECT_CODE = "031026";

const input = document.getElementById("code");
const dots = document.querySelectorAll(".dots div");
const unlock = document.getElementById("unlock");
const error = document.getElementById("error");
const card = document.querySelector(".login-card");
const transition = document.getElementById("transition");

input.focus();

document.body.addEventListener("click", () => input.focus());

input.addEventListener("input", () => {

let value = input.value;

dots.forEach((dot,i)=>{

dot.style.background =
i<value.length
? "#ff4f87"
: "#ffd1df";

});

if(value.length===6){

check();

}

});

unlock.onclick = check;

function check(){

if(input.value===CORRECT_CODE){

transition.classList.add("show");

setTimeout(()=>{

alert("🎉 It worked! Next we're going to build the birthday page ❤️");

},1800);

}else{

error.innerHTML="Wrong code ❤️";

card.classList.add("shake");

navigator.vibrate?.(100);

setTimeout(()=>{

card.classList.remove("shake");

},500);

input.value="";

dots.forEach(dot=>{

dot.style.background="#ffd1df";

});

}

}

const hearts=document.querySelector(".hearts");

setInterval(()=>{

const heart=document.createElement("span");

heart.innerHTML=Math.random()>.5?"❤":"♡";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=6+Math.random()*6+"s";

heart.style.fontSize=16+Math.random()*18+"px";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},12000);

},350);
