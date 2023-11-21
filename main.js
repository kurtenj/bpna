// Typewriter effect
var i = 0;
var txt = 'By neighbors,<br>for neighbors.';
var speed = 80;

function typeWriter() {
  if (i < txt.length) {
    // Check for the line break and insert it accordingly
    if (txt.substring(i, i + 4) === "<br>") {
      document.getElementById("title").innerHTML += "<br>";
      i += 4; // Skip the <br> tag length
    } else {
      document.getElementById("title").innerHTML += txt.charAt(i);
      i++;
    }
    setTimeout(typeWriter, speed);
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
    typeWriter();
});