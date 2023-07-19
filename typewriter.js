var i = 0;
var txt = 'By neighbors, for neighbors.';
var speed = 100; // Speed of the effect

function typeWriter() {
    if (i < txt.length) {
        var span = document.createElement("span");
        span.innerText = txt.charAt(i);
        if (txt.charAt(i) === ".") {
            span.className = "end-period"; // Add a specific class to the period
        }
        document.getElementById("title").appendChild(span);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// Call the function
typeWriter();
