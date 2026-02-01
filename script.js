const totalSlides = 5; // Ajuste conforme necessário
let currentSlide = 1;
const slideImg = document.getElementById('slide-display');

// Função de Troca com Animação Simple Fade
function changeSlide() {
    // Adiciona classe de sumiço
    slideImg.classList.add('fade-out');

    setTimeout(() => {
        currentSlide++;
        if (currentSlide > totalSlides) currentSlide = 1;
        
        slideImg.src = `img/slides/slide${currentSlide}.png`;
        
        // Remove classe para reaparecer
        slideImg.classList.remove('fade-out');
    }, 800); // Tempo deve casar com o transition do CSS
}

// Inicia o loop
setInterval(changeSlide, 6000);

// Atalhos de Teclado
document.addEventListener('keydown', (e) => {
    const keyLinks = {
        "1": "https://juniorcriste.github.io/QuizCapixaba/",
        "2": "https://juniorcriste.github.io/QuizCapixaba/",
        "3": "https://juniorcriste.github.io/QuizCapixaba/",
        "4": "https://juniorcriste.github.io/QuizCapixaba/",
        "5": "https://juniorcriste.github.io/QuizCapixaba/",
        "6": "https://juniorcriste.github.io/QuizCapixaba/",
        "7": "https://juniorcriste.github.io/QuizCapixaba/",
        "8": "https://juniorcriste.github.io/QuizCapixaba/",
        "9": "https://juniorcriste.github.io/QuizCapixaba/"
    };

    if (keyLinks[e.key]) {
        window.location.href = keyLinks[e.key];
    }
});