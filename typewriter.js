var i = 0;
var txt = 'By neighbors, for neighbors.';
var speed = 90; // Increased speed of the effect

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("title").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        // Hide the placeholder once the typing is finished
        document.querySelector(".title-placeholder").style.display = 'none';
    }
}

// Call the function
typeWriter();