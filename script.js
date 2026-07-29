// Transição Suave de Slides
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

// Evento de Teclado (Atalhos 1-8)
document.addEventListener('keydown', (e) => {
    if (e.repeat) return; 

    const btn = document.querySelector(`[data-key="${e.key}"]`);
    
    if (btn) {
        soundButton.pause();
        soundButton.currentTime = 0;
        soundButton.play().catch(() => {});

        btn.classList.add('teclado-ativo');
        
        setTimeout(() => {
            btn.classList.remove('teclado-ativo');
            window.location.href = btn.getAttribute('href');
        }, 120);
    }
});

// Alternância Estável da Logo (Sem piscadas/glitch)
const logoElement = document.getElementById('logo-sistema');
const logosSequencia = [
    'img/Painel Fialho.png',
    'img/Painel Fialho.png',
    'img/Painel Fialho.png'
];
let currentLogoIndex = 0;

function alternarLogoSuave() {
    if (!logoElement) return;

    currentLogoIndex = (currentLogoIndex + 1) % logosSequencia.length;
    logoElement.src = logosSequencia[currentLogoIndex];
}

setInterval(alternarLogoSuave, 7000);

// Som de inicialização
window.addEventListener('load', () => {
    soundLoaded.play().catch(() => console.log("Aguardando interação do usuário para áudio."));
});

// Alerta periódico (A cada 5 minutos)
setInterval(() => {
    soundAlert.currentTime = 0;
    soundAlert.play().catch(() => {});
}, 300000);

// Reprodução do Áudio de Hora Pre-gravado
function reproduzirAudioHora() {
    const agora = new Date();
    const horas24 = agora.getHours();
    
    // Converte de formato 24h para 12h (0h e 12h viram 12; 1h e 13h viram 1, etc.)
    const horaFormatada = (horas24 % 12) === 0 ? 12 : (horas24 % 12);
    
    const audioHora = new Audio(`sounds/hora/${horaFormatada}.ogg`);
    audioHora.play().catch(() => console.log(`Erro ao reproduzir o arquivo sounds/hora/${horaFormatada}.ogg`));
}

// Verificação do Relógio
setInterval(() => {
    const agora = new Date();
    if (agora.getMinutes() === 0 && agora.getSeconds() === 0) {
        reproduzirAudioHora();
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