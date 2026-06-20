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

function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

// Outside click se menu close
document.addEventListener("click", function (event) {
    const navLinks = document.getElementById("navLinks");
    const menuBtn = document.querySelector(".menu-btn");

    if (
        !navLinks.contains(event.target) &&
        !menuBtn.contains(event.target)
    ) {
        navLinks.classList.remove("active");
    }
});
