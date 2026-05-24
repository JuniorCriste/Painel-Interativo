// Configurações dos Slides (Efeito de Transição Glitch)
const slides = document.querySelectorAll('.slide'); 
const totalSlides = slides.length; 
let currentSlide = 0;

function autoSlide() {
    if (totalSlides === 0) return;

    // Captura o slide atual e o próximo container de imagem
    const currentActiveSlide = slides[currentSlide];
    const imgContainer = currentActiveSlide.querySelector('img');

    if (imgContainer) {
        // 1. Ativa o efeito de distorção/glitch na imagem atual
        imgContainer.classList.add('glitch-effect');

        // 2. No meio do estouro do glitch (250ms), faz a troca real de slide em background
        setTimeout(() => {
            currentActiveSlide.classList.remove('active');
            imgContainer.classList.remove('glitch-effect'); // Limpa o efeito para quando ele voltar

            currentSlide = (currentSlide + 1) % totalSlides;
            
            // Ativa o próximo slide
            slides[currentSlide].classList.add('active');
        }, 250);
    } else {
        // Fallback caso não encontre a imagem
        currentActiveSlide.classList.remove('active');
        currentSlide = (currentSlide + 1) % totalSlides;
        slides[currentSlide].classList.add('active');
    }
}

if (totalSlides > 0) {
    slides[0].classList.add('active');
    setInterval(autoSlide, 5000); // Executa a cada 5 segundos
}

// =========================================================================
// O RESTANTE DO SEU SCRIPT (SONS, ATALHOS, RELÓGIO) CONTINUA IGUAL ABAIXO:
// =========================================================================

// Sons do Painel
const soundLoaded = new Audio('sounds/loaded.mp3');
const soundButton = new Audio('sounds/button.mp3');
const soundAlert = new Audio('sounds/alert.mp3');
const soundClock = new Audio('sounds/clock.mp3');

// Evento Único de Teclado (Atalhos 1-8)
document.addEventListener('keydown', (e) => {
    if (e.repeat) return; 

    const btn = document.querySelector(`[data-key="${e.key}"]`);
    
    if (btn) {
        soundButton.pause();
        soundButton.currentTime = 0;
        soundButton.play().catch(() => {});

        btn.style.transform = "scale(0.95)";
        
        setTimeout(() => {
            window.location.href = btn.getAttribute('href');
        }, 120);
    }
});

// Som de inicialização
window.addEventListener('load', () => {
    soundLoaded.play().catch(() => console.log("Aguardando interação do usuário para iniciar áudios."));
});

// Alerta periódico (A cada 5 minutos)
setInterval(() => {
    soundAlert.currentTime = 0;
    soundAlert.play().catch(e => {});
}, 300000);

// Narração da Hora Cheia
function narrarHora() {
    const agora = new Date();
    const horas = agora.getHours();
    const mensagem = new SpeechSynthesisUtterance(`Agora são ${horas} horas.`);
    mensagem.lang = 'pt-BR';
    mensagem.rate = 1; 
    mensagem.volume = 1; 
    window.speechSynthesis.speak(mensagem);
}

// Verificação do Relógio e Narração
setInterval(() => {
    const agora = new Date();
    if (agora.getMinutes() === 0 && agora.getSeconds() === 0) {
        soundClock.currentTime = 0;
        soundClock.play().then(() => {
            setTimeout(narrarHora, 1500); 
        }).catch(() => narrarHora());
    }
}, 1000);

// Atualização Visual do Relógio
function atualizarRelogio() {
    const agora = new Date();
    
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutes = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');
    
    const dia = String(agora.getDate()).padStart(2, '0');
    const mes = String(agora.getMonth() + 1).padStart(2, '0');
    const ano = agora.getFullYear();
    
    const displayRelogio = document.getElementById('txt-relogio');
    const displayData = document.getElementById('txt-data');
    
    if (displayRelogio) displayRelogio.textContent = `${horas}:${minutes}:${segundos}`;
    if (displayData) displayData.textContent = `${dia}/${mes}/${ano}`;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();