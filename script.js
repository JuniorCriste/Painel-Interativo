let currentSlide = 0;
// Em vez de um número fixo, pegamos a quantidade real de elementos
const slides = document.querySelectorAll('.slide'); 
const totalSlides = slides.length; 

function autoSlide() {
    // 1. Remove a classe do slide atual
    slides[currentSlide].classList.remove('active');

    // 2. Cálculo do próximo slide
    // O operador % (resto da divisão) garante que ao chegar no último, 
    // o próximo seja o 0 automaticamente.
    currentSlide = (currentSlide + 1) % totalSlides;

    // 3. Adiciona a classe ao novo slide
    slides[currentSlide].classList.add('active');
}

// Garante que o primeiro slide comece visível
if (slides.length > 0) {
    slides[0].classList.add('active');
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
    
    const mensagem = new SpeechSynthesisUtterance(`Agora são ${horas} horas.`);
    
    mensagem.lang = 'pt-BR';
    mensagem.rate = 1; 

    // Define o volume (0.0 a 1.0)
    // Se você quer que esta parte seja a mais alta possível, use 1
    mensagem.volume = 1; 

    window.speechSynthesis.speak(mensagem);

    // O "voltar ao 100%" acontece automaticamente para a próxima narração,
    // a menos que você altere o 'volume' no próximo objeto SpeechSynthesisUtterance.
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
            setTimeout(narrarHora, 1500); 
        }).catch(e => {
            // Se o som falhar, tenta narrar mesmo assim
            narrarHora();
        });
    }
}, 1000);

function atualizarRelogio() {
    const agora = new Date();
    
    // Formatação da Hora
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');
    
    // Formatação da Data (Ex: 28/04/2026)
    const dia = String(agora.getDate()).padStart(2, '0');
    const mes = String(agora.getMonth() + 1).padStart(2, '0');
    const ano = agora.getFullYear();
    
    const displayRelogio = document.getElementById('txt-relogio');
    const displayData = document.getElementById('txt-data');
    
    if (displayRelogio) {
        displayRelogio.textContent = `${horas}:${minutos}:${segundos}`;
    }
    if (displayData) {
        displayData.textContent = `${dia}/${mes}/${ano}`;
    }
}

// Inicia a atualização
setInterval(atualizarRelogio, 1000);
atualizarRelogio();

function trocarNumerosPorImagens() {
  // Seleciona todos os elementos dentro do body
  const elementos = document.querySelectorAll('body *:not(script):not(style)');

  elementos.forEach(elemento => {
    // Verificamos apenas nós que contêm texto direto para não quebrar o HTML
    elemento.childNodes.forEach(no => {
      if (no.nodeType === Node.TEXT_NODE) {
        let texto = no.textContent;
        
        // Regex que busca números de 1 a 9
        // O loop reconstrói o texto trocando o número pela tag <img>
        const novoTexto = texto.replace(/[1-9]/g, (match) => {
          return `<img src="img/key/${match}.png" alt="${match}" style="height: 1em; vertical-align: middle;">`;
        });

        // Se houve mudança, substituímos o texto por HTML
        if (novoTexto !== texto) {
          const span = document.createElement('span');
          span.innerHTML = novoTexto;
          no.replaceWith(span);
        }
      }
    });
  });
}

// Executa a função quando a página carregar
window.onload = trocarNumerosPorImagens;