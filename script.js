
const no=document.getElementById("no");

const yes=document.getElementById("yes");


// YES CLICK → CINEMATIC TRANSITION

if(yes){

yes.onclick=()=>{

document.body.style.opacity="0";

setTimeout(()=>{

window.location="lover.html";

},1000);

};

}


// NO BUTTON ESCAPE

if(no){

no.onmouseover=()=>{

const x=Math.random()*(window.innerWidth-no.clientWidth);

const y=Math.random()*(window.innerHeight-no.clientHeight);

no.style.left=x+"px";

no.style.top=y+"px";

};

}


// FLOATING HEARTS

function createHeart(){

const heart=document.createElement("span");

heart.innerHTML="💖";

heart.style.left=Math.random()*100+"%";

heart.style.fontSize=(Math.random()*30+20)+"px";

heart.style.animationDuration=(Math.random()*5+5)+"s";

document.querySelector(".hearts").appendChild(heart);


setTimeout(()=>{

heart.remove();

},10000);

}


setInterval(createHeart,300);
