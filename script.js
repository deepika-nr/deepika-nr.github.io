// ======================================
// SMOOTH SCROLLING
// ======================================

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const targetId = this.getAttribute("href");

        const targetSection = document.querySelector(targetId);

        if (targetSection) {

            targetSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ======================================
// SCROLL REVEAL ANIMATION
// ======================================

const animatedElements = document.querySelectorAll(
    ".section-title, .about-content, .skill-card, .project-card, .internship-card, .education-card, .certification-card, .contact-container"
);


// Add animation class
animatedElements.forEach(function (element) {
    element.classList.add("animate");
});


// Check which elements are visible
function revealElements() {

    animatedElements.forEach(function (element) {

        const elementTop = element.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {

            element.classList.add("show");

        }

    });

}


// Run when scrolling
window.addEventListener("scroll", revealElements);


// Run when page loads
window.addEventListener("load", revealElements);


// ======================================
// RESUME BUTTON
// ======================================

const resumeButton = document.querySelector(".resume-btn");

if (resumeButton) {

    resumeButton.addEventListener("click", function () {

        console.log("Resume download started");

    });

}