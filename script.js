// Configurações dos Slides (Efeito Fade)
const slides = document.querySelectorAll('.slide'); 
const totalSlides = slides.length; 
let currentSlide = 0;

function autoSlide() {
    if (totalSlides === 0) return;
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
}

if (totalSlides > 0) {
    slides[0].classList.add('active');
    setInterval(autoSlide, 5000);
}

// Sons do Painel
const soundLoaded = new Audio('sounds/loaded.mp3');
const soundButton = new Audio('sounds/button.mp3');
const soundAlert = new Audio('sounds/alert.mp3');
const soundClock = new Audio('sounds/clock.mp3');

// Evento Único de Teclado (Atalhos 1-8)
document.addEventListener('keydown', (e) => {
    if (e.repeat) return; // Evita que segurar a tecla dispare múltiplos eventos

    // Busca o botão que possui o data-key correspondente à tecla pressionada
    const btn = document.querySelector(`[data-key="${e.key}"]`);
    
    if (btn) {
        // Toca o som do clique limpando o anterior
        soundButton.pause();
        soundButton.currentTime = 0;
        soundButton.play().catch(() => {});

        // Efeito visual de clique
        btn.style.transform = "scale(0.95)";
        
        // Redireciona pegando o link direto do HTML (Single Source of Truth)
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

// Atualização Visual do Relógio de Vidro
function atualizarRelogio() {
    const agora = new Date();
    
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');
    
    const dia = String(agora.getDate()).padStart(2, '0');
    const mes = String(agora.getMonth() + 1).padStart(2, '0');
    const ano = agora.getFullYear();
    
    const displayRelogio = document.getElementById('txt-relogio');
    const displayData = document.getElementById('txt-data');
    
    if (displayRelogio) displayRelogio.textContent = `${horas}:${minutos}:${segundos}`;
    if (displayData) displayData.textContent = `${dia}/${mes}/${ano}`;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();