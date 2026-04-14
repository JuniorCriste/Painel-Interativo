let currentSlide = 0;
const totalSlides = 5;
const slideTrack = document.getElementById('slide-track');

function autoSlide() {
    currentSlide++;
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    const offset = currentSlide * -100;
    slideTrack.style.transform = `translateX(${offset}%)`;
}

setInterval(autoSlide, 5000);

document.addEventListener('keydown', (e) => {
    const keyLinks = {
        "1": "https://juniorcriste.github.io/QuizCapixaba/",
        "2": "#", "3": "#", "4": "#", 
        "5": "apps/opentictactoe/play.html",
        "6": "apps/geniomatematico/play.html", "7": "apps/geniomatematico/dua/play.html", "8": "#"
    };

    if (keyLinks[e.key]) {
        const btn = document.querySelector(`[data-key="${e.key}"]`);
        if (btn) {
            btn.style.transform = "scale(0.95)";
            setTimeout(() => {
                window.location.href = keyLinks[e.key];
            }, 100);
        }
    }
});