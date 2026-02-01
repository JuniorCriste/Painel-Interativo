// Configuração do Slider
let currentSlide = 0;
const totalSlides = 5;
const slideTrack = document.getElementById('slide-track');

function moveSlide() {
    currentSlide++;
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    const offset = currentSlide * -20; // -20% para cada um dos 5 slides
    slideTrack.style.transform = `translateX(${offset}%)`;
}

// Troca automática a cada 6 segundos
setInterval(moveSlide, 6000);

// Atalhos de Teclado e Efeito Visual
document.addEventListener('keydown', (e) => {
    const keyLinks = {
        "1": "https://juniorcriste.github.io/QuizCapixaba/",
        "2": "#", "3": "#", "4": "#", "5": "#",
        "6": "#", "7": "#", "8": "#", "9": "#"
    };

    if (keyLinks[e.key]) {
        const btn = document.querySelector(`[data-key="${e.key}"]`);
        if (btn) {
            // Efeito visual de clique ao apertar tecla
            btn.style.transform = "scale(0.9)";
            setTimeout(() => {
                window.location.href = keyLinks[e.key];
            }, 150);
        }
    }
});