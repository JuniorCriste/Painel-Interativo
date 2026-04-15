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
        "1": "apps/quizcapixaba/play.html",
        "2": "apps/goodnews/play.html", "3": "apps/charada/play.html", "4": "apps/erer/play.html", 
        "5": "apps/opentictactoe/play.html",
        "6": "apps/geniomatematico/play-dua.html", "7": "apps/radio/play.html", "8": "apps/info/cardapiododia.html"
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