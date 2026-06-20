const navLinks = document.getElementById("navLinks");
const menuBtn = document.querySelector(".menu-btn");

// Menu toggle
menuBtn.addEventListener("click", function (e) {
    e.stopPropagation(); // click ko document tak mat jane do
    navLinks.classList.toggle("active");
});

// Bahar click karne par menu band
document.addEventListener("click", function () {
    navLinks.classList.remove("active");
});

// Menu ke andar click ho to band na ho
navLinks.addEventListener("click", function (e) {
    e.stopPropagation();
});
