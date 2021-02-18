var i = 0;
var txt = "DESENVOLVIMENTO";
var speed = 200;
let words = txt.charAt(i).split("")

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("dev-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } 
}

typeWriter()