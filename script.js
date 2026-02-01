// --- CONFIGURAÇÃO DO SLIDESHOW ---
let currentSlide = 1;
const totalSlides = 5; // Mude para a quantidade de imagens que você tem
const slideImg = document.getElementById('slide-display');

function nextSlide() {
    currentSlide++;
    if (currentSlide > totalSlides) {
        currentSlide = 1;
    }
    // Caminho da imagem conforme sua estrutura: img/slides/slideX.png
    slideImg.src = `img/slides/slide${currentSlide}.png`;
}

// Troca de slide a cada 5 segundos
setInterval(nextSlide, 5000);


// --- CONFIGURAÇÃO DOS ATALHOS DE TECLADO ---
document.addEventListener('keydown', (event) => {
    const key = event.key;
    
    // Mapeamento de teclas para os links
    // Nota: Para o "17", o usuário teria que apertar rápido ou mudar para uma tecla única.
    // Aqui estou mapeando as teclas simples de 1 a 9.
    const keyMap = {
        "1": "https://juniorcriste.github.io/QuizCapixaba/",
        "2": "https://juniorcriste.github.io/QuizCapixaba/",
        "3": "https://juniorcriste.github.io/QuizCapixaba/",
        "4": "https://juniorcriste.github.io/QuizCapixaba/",
        "5": "https://juniorcriste.github.io/QuizCapixaba/",
        "6": "https://juniorcriste.github.io/QuizCapixaba/",
        "7": "https://juniorcriste.github.io/QuizCapixaba/", // Caso queira usar o 7 para o Quiz Capixaba
        "8": "https://juniorcriste.github.io/QuizCapixaba/",
        "9": "https://juniorcriste.github.io/QuizCapixaba/"
    };

    if (keyMap[key]) {
        window.location.href = keyMap[key];
    }
});