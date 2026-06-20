const typed = new Typed("#typing", {
    strings: [
        "Aspiring Data Analyst",
        "Python Enthusiast",
        "SQL Developer",
        "Power BI Learner"
    ],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
});
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
