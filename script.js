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
            soundButton.play()
            btn.style.transform = "scale(0.95)";
            setTimeout(() => {
                window.location.href = keyLinks[e.key];
            }, 100);
        }
    }
});

const soundLoaded = new Audio('sounds/loaded.mp3');
const soundButton = new Audio('sounds/button.mp3');

// Garantir que o áudio esteja pré-carregado
soundButton.load();

window.addEventListener('load', () => {
    soundLoaded.play().catch(() => {
        console.log("Autoplay bloqueado: aguardando interação.");
    });
});

// Evento de tecla com reset forçado
document.addEventListener('keydown', (event) => {
    // Evita que o som se repita infinitamente se a tecla for mantida pressionada
    if (event.repeat) return;

    // Pausa e reseta para o início (essencial para repetir a mesma tecla)
    soundButton.pause();
    soundButton.currentTime = 0;
    
    // Toca o som
    soundButton.play().catch(e => console.error("Erro ao reproduzir:", e));
});