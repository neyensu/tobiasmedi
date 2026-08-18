const qrButton = document.getElementById("qrButton");
const qrContent = document.getElementById("qrContent");

qrButton.addEventListener("click", function () {

    qrContent.classList.toggle("open");

    qrButton.classList.toggle("active");

});

const documentFlip =
    document.getElementById("documentFlip");

const statusDots =
    document.querySelector(".status-dots");


documentFlip.addEventListener("click", function () {

    // Gira el documento
    documentFlip.classList.toggle("flipped");

    // Invierte los colores de las bolitas
    statusDots.classList.toggle("inverted");

});