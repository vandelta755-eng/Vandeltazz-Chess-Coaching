// Goal Planner

function calculateGoal() {

    const rating = parseInt(document.getElementById("rating").value);
    const hours = parseInt(document.getElementById("hours").value);

    const result = document.getElementById("plannerResult");

    if (isNaN(rating) || isNaN(hours)) {
        result.innerHTML = "Please enter valid numbers.";
        return;
    }

    if (rating < 0) {
        result.innerHTML = "Rating cannot be negative.";
        return;
    }

    if (hours <= 0) {
        result.innerHTML = "Hours must be greater than 0.";
        return;
    }

    let estimate;

    if (hours <= 2) {
        estimate = rating + 50;
    } else if (hours <= 5) {
        estimate = rating + 100;
    } else if (hours <= 8) {
        estimate = rating + 150;
    } else {
        estimate = rating + 200;
    }

    result.innerHTML =
        `Suggested short-term goal: <strong>${estimate}</strong> Elo.<br>
        Consistent practice and game analysis matter more than raw study time.`;
}


// Fade-in Animation

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});


const animatedElements = document.querySelectorAll(
    ".feature-card, .card, .roadmap-card, .price-card, .faq-item"
);

animatedElements.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});


// Hero Entrance Animation

window.addEventListener("load", () => {

    const hero = document.querySelector(".hero-content");

    if (hero) {
        hero.style.opacity = "0";
        hero.style.transform = "translateY(20px)";

        setTimeout(() => {
            hero.style.transition = "all 0.8s ease";
            hero.style.opacity = "1";
            hero.style.transform = "translateY(0)";
        }, 100);
    }

});


// Current Year Auto Update

const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML =
        `© ${new Date().getFullYear()} Vandelta Chess Coaching`;
}


// Console Easter Egg 😭♟️

console.log(
`♟️ Vandelta Chess Coaching

Keep improving.
One move at a time.

Built by Neru 🚀`
);