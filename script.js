// ------------------------
// Smooth Scrolling for Nav Links
// ------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// ------------------------
// Back to Top Button
// ------------------------
const backToTop = document.createElement("button");
backToTop.innerText = "↑";
backToTop.id = "backToTopBtn";
document.body.appendChild(backToTop);

backToTop.style.position = "fixed";
backToTop.style.bottom = "25px";
backToTop.style.right = "25px";
backToTop.style.padding = "10px 15px";
backToTop.style.fontSize = "20px";
backToTop.style.borderRadius = "50%";
backToTop.style.border = "none";
backToTop.style.display = "none";
backToTop.style.cursor = "pointer";

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) backToTop.style.display = "block";
    else backToTop.style.display = "none";
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ------------------------
// Page Fade-in Animation
// ------------------------
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = 0;
    document.body.style.transition = "opacity 1s ease-in-out";
    setTimeout(() => {
        document.body.style.opacity = 1;
    }, 100);
});

// ------------------------
// Mobile Menu Toggle (if needed later)
// ------------------------
const mobileMenu = document.getElementById("mobileMenu");
const toggleBtn = document.getElementById("menuToggle");

if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("open");
    });
}
