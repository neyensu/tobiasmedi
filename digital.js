const detailsButton = document.getElementById("detailsButton");
const details = document.getElementById("details");

detailsButton.addEventListener("click", () => {

    const open = details.classList.contains("open");

    if (open) {

        details.classList.remove("open");
        detailsButton.classList.remove("active");

    } else {

        details.classList.add("open");
        detailsButton.classList.add("active");

    }

});


// ============================
// FECHA DE ACTUALIZACIÓN
// ============================

const dateElement = document.getElementById("date");

const now = new Date();

const day = String(now.getDate()).padStart(2, "0");
const month = String(now.getMonth() + 1).padStart(2, "0");
const year = now.getFullYear();

const hours = String(now.getHours()).padStart(2, "0");
const minutes = String(now.getMinutes()).padStart(2, "0");

dateElement.textContent =
    `${day}/${month}/${year} ${hours}:${minutes} hs`;


    // ============================
// VERIFICACIÓN - ABRIR/CERRAR
// ============================

const verificationButton =
    document.getElementById("verificationButton");

const verificationContent =
    document.getElementById("verificationContent");


verificationButton.addEventListener("click", () => {

    const isOpen =
        verificationContent.classList.contains("open");


    if (isOpen) {

        // CERRAR
        verificationContent.classList.remove("open");

        verificationButton.classList.remove("active");

    } else {

        // ABRIR
        verificationContent.classList.add("open");

        verificationButton.classList.add("active");

    }

});