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
const soundAlert = new Audio('sounds/alert.mp3');
const soundClock = new Audio('sounds/clock.mp3');

// Função para o narrador falar a hora
function narrarHora() {
    const agora = new Date();
    const horas = agora.getHours();
    
    // Configura a frase (ex: "Agora são 14 horas")
    const mensagem = new SpeechSynthesisUtterance(`Agora são ${horas} horas.`);
    
    // Define o idioma para Português do Brasil
    mensagem.lang = 'pt-BR';
    mensagem.rate = 1; // Velocidade da fala
    
    window.speechSynthesis.speak(mensagem);
}

// 1. Som ao carregar
window.addEventListener('load', () => {
    soundLoaded.play().catch(() => console.log("Aguardando interação."));
});

// 2. Som ao pressionar teclas
document.addEventListener('keydown', (event) => {
    if (event.repeat) return;
    soundButton.pause();
    soundButton.currentTime = 0;
    soundButton.play().catch(e => {});
});

// 3. Alerta a cada 5 minutos
setInterval(() => {
    soundAlert.currentTime = 0;
    soundAlert.play().catch(e => {});
}, 300000);

// 4. Verificação de Hora Cheia + Narração
setInterval(() => {
    const agora = new Date();
    
    if (agora.getMinutes() === 0 && agora.getSeconds() === 0) {
        // Toca o som do relógio primeiro
        soundClock.currentTime = 0;
        soundClock.play().then(() => {
            // Aguarda um pequeno delay para a narração não encavalar no som
            setTimeout(narrarHora, 2000); 
        }).catch(e => {
            // Se o som falhar, tenta narrar mesmo assim
            narrarHora();
        });
    }
}, 1000);