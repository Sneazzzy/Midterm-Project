
const images = ["pic 1.jpg", "pic 2.jpg"]; 
let currentIndex = 0;
const imageElement = document.getElementById('currentImage');

document.getElementById('button2').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
});

document.getElementById('button1').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    imageElement.src = images[currentIndex];
});

document.getElementById('button1').addEventListener('click', previousImage);
document.getElementById('button2').addEventListener('click', nextImage);