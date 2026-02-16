
var noBtn = document.getElementById("no");

var yesBtn = document.getElementById("yes");


yesBtn.onclick = function()
{

window.location.href = "love.html";

};


noBtn.onclick = function()
{

var x = Math.random() * window.innerWidth;

var y = Math.random() * window.innerHeight;

noBtn.style.left = x + "px";

noBtn.style.top = y + "px";

};
