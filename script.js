let currentSlide = 1;
const totalSlides = 5; 
const slideImg = document.getElementById('slide-display');

function changeSlide() {
    // Efeito de transição: leve zoom e fade
    slideImg.style.opacity = '0';
    slideImg.style.transform = 'scale(1.1)';

    setTimeout(() => {
        currentSlide++;
        if (currentSlide > totalSlides) currentSlide = 1;
        
        slideImg.src = `img/slides/slide${currentSlide}.png`;
        slideImg.style.opacity = '1';
        slideImg.style.transform = 'scale(1)';
    }, 800);
}

setInterval(changeSlide, 7000);

// Atalhos de teclado (Mantido)
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