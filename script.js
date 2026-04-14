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

// Troca o slide a cada 5 segundos
setInterval(autoSlide, 5000);

// Atalhos de Teclado (Lógica original preservada)
document.addEventListener('keydown', (e) => {
    const keyLinks = {
        "1": "https://juniorcriste.github.io/QuizCapixaba/",
        "2": "#", 
        "3": "#", 
        "4": "#", 
        "5": "apps/opentictactoe/play.html",
        "6": "#", 
        "7": "#", 
        "8": "#", 
        "9": "apps/geniomatematico/play.html"
    };

    if (keyLinks[e.key]) {
        const btn = document.querySelector(`[data-key="${e.key}"]`);
        if (btn) {
            // Efeito visual de clique suave
            btn.style.transform = "scale(0.95)";
            setTimeout(() => {
                window.location.href = keyLinks[e.key];
            }, 100);
        }
    }
});