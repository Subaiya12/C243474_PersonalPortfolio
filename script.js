
const navLinks = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        const pageId = link.getAttribute("data-page");

        navLinks.forEach(function (button) {
            button.classList.remove("active");
        });

        pages.forEach(function (page) {
            page.classList.remove("active");
        });

        link.classList.add("active");
        document.getElementById(pageId).classList.add("active");
    });
});

document.getElementById("year").textContent = new Date().getFullYear();
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    window.location.href = "mailto:elahisuba@example.com";
});
