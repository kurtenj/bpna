// Typewriter effect
var i = 0;
var txt = 'By neighbors, for neighbors.';
var speed = 90;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
    typeWriter();
});
