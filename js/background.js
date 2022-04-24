const leftBottom = document.querySelector(".left-bottom");
const images = ["00.jpg", "11.jpg", "33.jpg", "44.jpg", "55.jpg", "66.jpg", "77.jpg", "88.jpg", "99.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

leftBottom.style.background = `url(img/${chosenImage}) no-repeat 100% 100% / cover`;


// document.body.appendChild(bgImage);