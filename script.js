// ================================
// ACORDEÓN DNI
// ================================

const dniButton = document.getElementById("dniButton");
const dniContent = document.getElementById("dniContent");
const dniArrow = document.getElementById("dniArrow");

dniButton.addEventListener("click", () => {

    const isOpen = dniContent.classList.contains("open");

    if (isOpen) {

        dniContent.classList.remove("open");
        dniButton.classList.remove("active");

    } else {

        dniContent.classList.add("open");
        dniButton.classList.add("active");

    }

});


// ================================
// ACORDEÓN LICENCIA
// ================================

const licenseButton = document.getElementById("licenseButton");
const licenseContent = document.getElementById("licenseContent");
const licenseArrow = document.getElementById("licenseArrow");

licenseButton.addEventListener("click", () => {

    const isOpen = licenseContent.classList.contains("open");

    if (isOpen) {

        licenseContent.classList.remove("open");
        licenseButton.classList.remove("active");

    } else {

        licenseContent.classList.add("open");
        licenseButton.classList.add("active");

    }

});


// ================================
// BOTÓN VOLVER
// ================================

const backButton = document.querySelector(".back-button");

backButton.addEventListener("click", () => {

    window.history.back();

});
