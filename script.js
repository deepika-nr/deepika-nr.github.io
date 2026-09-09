/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton = document.getElementById("menuButton");

const navLinks = document.getElementById("navLinks");


menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("show");

});


/* =====================================================
   CLOSE MOBILE MENU AFTER CLICKING A LINK
===================================================== */

const navigationLinks =
    document.querySelectorAll(".nav-links a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");

    });

});


/* =====================================================
   ACTIVE NAVIGATION LINK
===================================================== */

const sections =
    document.querySelectorAll("section");

const links =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    links.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


/* =====================================================
   ADD ACTIVE LINK STYLE
===================================================== */

const style = document.createElement("style");

style.innerHTML = `

    .nav-links a.active {
        color: #6ff2ff;
    }

`;

document.head.appendChild(style);


/* =====================================================
   CLOSE MENU WHEN CLICKING OUTSIDE
===================================================== */

document.addEventListener("click", function (event) {

    const clickedInsideMenu =
        navLinks.contains(event.target);

    const clickedMenuButton =
        menuButton.contains(event.target);


    if (
        !clickedInsideMenu &&
        !clickedMenuButton
    ) {

        navLinks.classList.remove("show");

    }

});