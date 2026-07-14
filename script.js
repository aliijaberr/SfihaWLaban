// Navbar Shadow on Scroll

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
    } else {
        header.style.boxShadow = "none";
    }
});

// Smooth Scroll

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });

    });
});

// Welcome Message

window.addEventListener("load", () => {
    console.log("Welcome to Sfiha W Laban Restaurant!");
});

// Menu Card Hover Animation

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px) scale(1.05)";
        card.style.transition = "0.3s";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
    });

});

// Hero Text Animation

const heroTitle = document.querySelector(".hero-text h1");

window.addEventListener("load", () => {

    heroTitle.style.opacity = "0";
    heroTitle.style.transform = "translateY(-40px)";
    heroTitle.style.transition = "1s";

    setTimeout(() => {
        heroTitle.style.opacity = "1";
        heroTitle.style.transform = "translateY(0)";
    }, 300);

});