// Mapbox
mapboxgl.accessToken = 'pk.eyJ1Ijoia3VydGVuaiIsImEiOiJjaXQ2OTdhaG0wMDNhMnRvMzFlZnNsdWI5In0.GpDWv3s4uwpgbnIEmoVbSw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v11',
    center: [-94.21016, 46.5997],
    zoom: 14.26,
    interactive: false
});

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

// Parallax settings
const parallaxFactor = 0.0005; // Adjust this to change the parallax effect strength.
let targetX = 0, targetY = 0;
let currentX = 0, currentY = 0;
const smoothFactor = 0.05; // Adjust this to change the smoothness of the parallax effect.

// Handle mouse move
document.addEventListener('mousemove', (event) => {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;

    targetX = x * parallaxFactor;
    targetY = y * parallaxFactor;
});

// Animate map movement
function animate() {
    currentX += (targetX - currentX) * smoothFactor;
    currentY += (targetY - currentY) * smoothFactor;

    map.setCenter([-94.21016 - currentX, 46.5997 - currentY]);

    requestAnimationFrame(animate);
}

animate();
