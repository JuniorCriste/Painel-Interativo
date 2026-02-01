let currentSlide = 0;
const totalSlides = 5;
const slideTrack = document.getElementById('slide-track');

function autoSlide() {
    currentSlide++;
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    const offset = currentSlide * -20;
    slideTrack.style.transform = `translateX(${offset}%)`;
}

// Troca a cada 5 segundos
setInterval(autoSlide, 5000);

// Atalhos de Teclado
document.addEventListener('keydown', (e) => {
    const keyLinks = {
        "1": "https://juniorcriste.github.io/QuizCapixaba/",
        "2": "#", "3": "#", "4": "#", "5": "#",
        "6": "#", "7": "#", "8": "#", "9": "#"
    };

    if (keyLinks[e.key]) {
        const btn = document.querySelector(`[data-key="${e.key}"]`);
        if (btn) {
            btn.style.transform = "scale(0.9)";
            setTimeout(() => {
                window.location.href = keyLinks[e.key];
            }, 100);
        }
    }
});