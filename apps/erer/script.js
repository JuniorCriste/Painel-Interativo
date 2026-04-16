const quizData = [
    {
        question: "O Dia da Consciência Negra é comemorado em qual data?",
        options: ["13 de maio", "20 de novembro", "07 de setembro", "15 de outubro"],
        answer: "20 de novembro"
    },
    {
        question: "O Dia da Consciência Negra homenageia que liderança histórica?",
        options: ["Dandara dos Palmares", "Zumbi dos Palmares", "Luiz Gama", "Machado de Assis"],
        answer: "Zumbi dos Palmares"
    },
    {
        question: "O Quilombo dos Palmares ficava em qual região?",
        options: ["Sudeste", "Sul", "Nordeste", "Centro-Oeste"],
        answer: "Nordeste"
    },
    {
        question: "Quem foi Dandara?",
        options: ["Rainha africana que veio ao Brasil", "Guerreira do Quilombo dos Palmares", "Primeira deputada negra", "Cantora de samba"],
        answer: "Guerreira do Quilombo dos Palmares"
    },
    {
        question: "A Lei 10.639/03 tornou obrigatório o ensino de:",
        options: ["Matemática africana", "História e cultura afro-brasileira", "Geografia africana", "Línguas africanas"],
        answer: "História e cultura afro-brasileira"
    },
    {
        question: "Quem foi Zumbi dos Palmares?",
        options: ["Escritor brasileiro famoso", "Rei africano", "Líder do maior quilombo do período colonial", "Presidente do Brasil"],
        answer: "Líder do maior quilombo do período colonial"
    },
    {
        question: "Qual dessas personalidades não é negra?",
        options: ["Milton Nascimento", "Lázaro Ramos", "Taís Araújo", "Anita Garibaldi"],
        answer: "Anita Garibaldi"
    },
    {
        question: "Racismo estrutural significa:",
        options: ["Um tipo de arquitetura africana", "O racismo reproduzido na estrutura da sociedade", "Um insulto direto", "Uma lei contra racismo"],
        answer: "O racismo reproduzido na estrutura da sociedade"
    },
    {
        question: "O que é consciência negra?",
        options: ["Uma religião", "Luta pela igualdade racial e valorização da cultura negra", "Uma festa cultural", "Uma dança"],
        answer: "Luta pela igualdade racial e valorização da cultura negra"
    },
    {
        question: "Quem foi Luiz Gama?",
        options: ["Jornalista e abolicionista negro", "Pintor europeu", "Padre abolicionista", "Político português"],
        answer: "Jornalista e abolicionista negro"
    },
    {
        question: "O Quilombo mais famoso do Brasil foi:",
        options: ["Quilombo da Matilde (ES)", "Quilombo do Sapê do Norte (ES)", "Quilombo dos Palmares", "Quilombo de Pedra Branca"],
        answer: "Quilombo dos Palmares"
    },
    {
        question: "A região do Espírito Santo com maior concentração de comunidades quilombolas reconhecidas é:",
        options: ["Região Serrana", "Sapê do Norte (São Mateus e Conceição da Barra)", "Região Metropolitana", "Sul do Estado"],
        answer: "Sapê do Norte (São Mateus e Conceição da Barra)"
    },
    {
        question: "As comunidades quilombolas do Sapê do Norte são conhecidas por uma forte tradição cultural, como:",
        options: ["Fandango", "Congo e Ticumbi", "Capoeira regional", "Frevo"],
        answer: "Congo e Ticumbi"
    },
    {
        question: "Um dos patrimônios culturais afro-capixabas mais importantes é o:",
        options: ["Maracatu Nação Estrela", "Cortejo do Boitatá", "Ticumbi de Conceição da Barra", "Folia de Reis"],
        answer: "Ticumbi de Conceição da Barra"
    },
    {
        question: "O Congo, presente em vários municípios capixabas, tem origem ligada principalmente a:",
        options: ["Povos africanos", "Povos indígenas", "Cultura europeia", "Tradição militar"],
        answer: "Povos africanos"
    },
    {
        question: "A figura histórica Zumbi dos Palmares representa:",
        options: ["Resistência negra à escravidão", "Colonização portuguesa", "Domínio indígena", "Folclore africano"],
        answer: "Resistência negra à escravidão"
    },
    {
        question: "Qual município capixaba tem forte presença de grupos de congo e festas afro-religiosas?",
        options: ["Domingos Martins", "Vila Velha", "Vitória", "Serra"],
        answer: "Serra"
    },
    {
        question: "A Lei 10.639, obrigatória nas escolas, determina o ensino de:",
        options: ["História da Europa", "História e cultura afro-brasileira e africana", "História indígena apenas", "História das guerras mundiais"],
        answer: "História e cultura afro-brasileira e africana"
    },
    {
        question: "A presença de comunidades quilombolas no norte do ES é resultado:",
        options: ["De migrações de portugueses no século XIX", "Da fuga de pessoas escravizadas em busca de liberdade e organização comunitária", "De políticas industriais recentes", "De assentamentos agrícolas do governo moderno"],
        answer: "Da fuga de pessoas escravizadas em busca de liberdade e organização comunitária"
    },
    {
        question: "Um marco importante da luta quilombola capixaba é:",
        options: ["A descoberta do petróleo no litoral", "A titulação de terras a comunidades quilombolas pelo INCRA", "A construção de portos no estado", "A criação de zonas militares"],
        answer: "A titulação de terras a comunidades quilombolas pelo INCRA"
    },
    {
        question: "As comunidades quilombolas capixabas se organizam para garantir:",
        options: ["Exportação agrícola", "Direitos territoriais, culturais e históricos", "Monopólio de comércio local", "Abertura de estradas"],
        answer: "Direitos territoriais, culturais e históricos"
    },
    {
        question: "A luta atual das comunidades negras no ES envolve:",
        options: ["Negar sua herança africana", "Preservar tradições, garantir direitos e combater o racismo", "Reduzir manifestações culturais", "Proibir festas populares"],
        answer: "Preservar tradições, garantir direitos e combater o racismo"
    },
    {
        question: "A presença de terreiros e manifestações religiosas afro-brasileiras no ES é símbolo de:",
        options: ["Ocupações religiosas estrangeiras", "Resistência cultural e expressão da ancestralidade africana", "Proibições culturais", "Rituais exclusivamente indígenas"],
        answer: "Resistência cultural e expressão da ancestralidade africana"
    },
    {
        question: "Entre os municípios com comunidades quilombolas reconhecidos no ES, estão:",
        options: ["Domingos Martins e Alfredo Chaves", "São Mateus, Conceição da Barra e Linhares", "Venda Nova e Vargem Alta", "Dores do Rio Preto e Alegre"],
        answer: "São Mateus, Conceição da Barra e Linhares"
    },
    {
        question: "Quem é considerada um dos maiores símbolos da resistência negra em Nova Venécia?",
        options: ["Maria Felipa", "Dandara", "Constância D’Angola", "Tia Ciata"],
        answer: "Constância D’Angola"
    },
    {
        question: "Quem foi a primeira mulher negra a ganhar o Jabuti de Literatura?",
        options: ["Carolina Maria de Jesus", "Conceição Evaristo", "Sueli Carneiro", "Elisa Lucinda"],
        answer: "Conceição Evaristo"
    },
    {
        question: "Qual é a escritora negra criada no ES, autora, atriz e poetisa, conhecida por sua força poética?",
        options: ["Elisa Lucinda", "Conceição Evaristo", "Cristiane Sobral", "Jarid Arraes"],
        answer: "Elisa Lucinda"
    },
    {
        question: "Em que ano ocorreu a Insurreição dos Queimados?",
        options: ["1888", "1849", "1800", "1902"],
        answer: "1849"
    },
    {
        question: "A insurreição aconteceu em qual município capixaba?",
        options: ["Colatina", "Serra (região de Queimados)", "Vitória", "Cachoeiro de Itapemirim"],
        answer: "Serra (região de Queimados)"
    },
    {
        question: "Qual foi a promessa que desencadeou o movimento da Insurreição dos Queimados?",
        options: ["Liberdade para quem fugisse", "Libertação durante o Carnaval", "Libertação prometida pelo padre em troca da participação na festa religiosa", "Distribuição de terras"],
        answer: "Libertação prometida pelo padre em troca da participação na festa religiosa"
    },
    {
        question: "Quem foi um dos líderes mais lembrados da insurreição dos Queimados?",
        options: ["Luiz Gama", "Zumbi", "Chico Prego", "André Rebouças"],
        answer: "Chico Prego"
    },
    {
        question: "Como as autoridades reagiram ao movimento da Insurreição dos Queimados?",
        options: ["Com diálogo pacífico", "Com apoio político", "Com repressão violenta", "Com indenizações"],
        answer: "Com repressão violenta"
    },
    {
        question: "O local da insurreição hoje é considerado:",
        options: ["Uma área agrícola", "Um patrimônio histórico", "Um parque temático", "Uma zona de comércio"],
        answer: "Um patrimônio histórico"
    },
    {
        question: "Qual município capixaba tem mais de 21% da população se declarando preta, de acordo com o último Censo do IBGE?",
        options: ["São Mateus", "Cariacica", "Conceição da Barra", "Serra"],
        answer: "Conceição da Barra"
    },
    {
        question: "Qual é o programa de TV do Espírito Santo que recentemente apresentou um quadro chamado “Pretitudes”?",
        options: ["Em Movimento", "Bom Dia ES", "ESTV", "Gazeta Comunidade"],
        answer: "Em Movimento"
    }
];

// ----------------------------------------------------------------------
// Variáveis e Seletores do DOM
// ----------------------------------------------------------------------

const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const endGameScreen = document.getElementById('end-game-screen');
const startButton = document.getElementById('start-button');
const restartButton = document.getElementById('restart-button');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const optionButtons = optionsContainer.querySelectorAll('.option-button');
const finalScoreElement = document.getElementById('final-score');
const endGameMessageElement = document.getElementById('end-game-message');
const rankingMessageElement = document.getElementById('ranking-message');
const rankingContainer = document.getElementById('ranking-container');
const webcamElement = document.getElementById('webcam');
const canvasElement = document.getElementById('canvas');
const countdownElement = document.getElementById('countdown');
const currentScoreElement = document.getElementById('current-score');
const backgroundElement = document.getElementById('background-image');
const preloader = document.getElementById('preloader');
const moldura = document.getElementById('moldura');
const conteudo = document.getElementById('conteudo'); 
const photoCountdownElement = document.getElementById('photo-countdown'); 

// Seletores para Vidas e Glitch
const glitchOverlay = document.getElementById('glitch-overlay');
const lifeIcons = [
    document.getElementById('life-1'),
    document.getElementById('life-2'),
    document.getElementById('life-3')
];
let lives = 3; 

let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

// ALTERAÇÃO: Nome do registro no navegador alterado para "topScoresERER"
let topScores = JSON.parse(localStorage.getItem('topScoresERER')) || [];
const topRankingSize = 5;

const bgImages = ['background1.jpg', 'background2.jpg', 'background3.jpg'];

// Configuração dos Sons
const audioFundo = new Audio('audio/trilha.ogg');
audioFundo.loop = true;
const audioAcerto = new Audio('audio/acerto.ogg');
const audioErro = new Audio('audio/erro.ogg');
const audioVitoria = new Audio('audio/campeao.ogg');
const audioCaptura = new Audio('audio/captura.ogg'); 

const keyboardMap = {
    '2': 'd',
    '4': 'a',
    '6': 'c',
    '8': 'b'
};

// ----------------------------------------------------------------------
// FUNÇÕES DE PRELOAD, TELA CHEIA E RESTAURAÇÃO
// ----------------------------------------------------------------------

function enterFullscreen() {
    const element = document.documentElement;
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}

function isCurrentlyFullscreen() {
    return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
}

function hidePreloader() {
    preloader.classList.add('fade-out');
    setTimeout(() => {
        preloader.style.display = 'none';
        conteudo.style.display = 'block';
    }, 600); 
}

function loadInitialBackground() {
    if (bgImages.length === 0) {
        hidePreloader(); 
        return;
    }
    const randomIndex = Math.floor(Math.random() * bgImages.length);
    const selectedImage = bgImages[randomIndex];
    const imageUrlPath = `img/background/${selectedImage}`;
    const img = new Image();
    img.onload = () => {
        backgroundElement.style.backgroundImage = `url('${imageUrlPath}')`;
        hidePreloader();
    };
    img.onerror = () => {
        console.error("Erro ao carregar a imagem de fundo: " + imageUrlPath);
        hidePreloader();
    };
    img.src = imageUrlPath;
}

function restoreFullscreen() {
    if (localStorage.getItem('fullscreen_on_reload') === 'true') {
        enterFullscreen();
        localStorage.removeItem('fullscreen_on_reload');
    }
}

// ----------------------------------------------------------------------
// FLUXO DE INICIALIZAÇÃO E JOGO
// ----------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', loadInitialBackground);
document.addEventListener('DOMContentLoaded', restoreFullscreen);

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startGame() {
    enterFullscreen(); 
    audioFundo.play().catch(e => console.log("Música de fundo bloqueada."));
    backgroundElement.classList.add('blurred');
    startScreen.classList.add('hidden');
    endGameScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    shuffledQuestions = [...quizData];
    shuffleArray(shuffledQuestions);
    currentQuestionIndex = 0;
    score = 0;
    currentScoreElement.textContent = score;
    lives = 3;
    updateLifeDisplay();
    displayQuestion();
}

function updateLifeDisplay() {
    if (lifeIcons[0]) lifeIcons[0].style.opacity = lives >= 1 ? 1 : 0.2;
    if (lifeIcons[1]) lifeIcons[1].style.opacity = lives >= 2 ? 1 : 0.2;
    if (lifeIcons[2]) lifeIcons[2].style.opacity = lives >= 3 ? 1 : 0.2;
}

function triggerGlitchEffect() {
    if (!glitchOverlay) return;
    glitchOverlay.classList.remove('hidden');
    glitchOverlay.classList.add('glitch-active');
    if (typeof audioErro !== 'undefined' && audioErro) { 
        audioErro.currentTime = 0; 
        audioErro.play().catch(e => console.log("Erro de áudio."));
    }
    setTimeout(() => {
        glitchOverlay.classList.remove('glitch-active');
        glitchOverlay.classList.add('hidden');
    }, 200); 
}

function displayQuestion() {
    if (currentQuestionIndex >= shuffledQuestions.length) {
        endGame(false);
        return;
    }
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    const options = currentQuestion.options;
    options.forEach((option, index) => {
        const button = optionButtons[index];
        const shortcutKey = Object.keys(keyboardMap).find(key => keyboardMap[key] === button.id.slice(-1));
        button.innerHTML = `<span>${shortcutKey}</span>${option}`;
        button.dataset.answer = option;
        button.onclick = () => checkAnswer(button.dataset.answer);
    });
}

function checkAnswer(selectedAnswer) {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.answer) {
        score++;
        currentScoreElement.textContent = score;
        audioAcerto.play();
        currentQuestionIndex++;
        displayQuestion();
    } else {
        triggerGlitchEffect(); 
        lives--;              
        updateLifeDisplay();  
        if (lives <= 0) {
            endGame(true);
        } 
    }
}

// ----------------------------------------------------------------------
// END GAME E LÓGICA DE WEBCAM
// ----------------------------------------------------------------------

async function endGame(lost = false) {
    audioFundo.pause();
    audioFundo.currentTime = 0;
    gameScreen.classList.add('hidden');
    endGameScreen.classList.remove('hidden');
    finalScoreElement.textContent = score;
    restartButton.classList.add('hidden');

    if (lost) {
        endGameMessageElement.textContent = `Vidas esgotadas!`;
    } else {
        endGameMessageElement.textContent = 'Parabéns, você completou o quiz! 💥';
        audioVitoria.play();
    }

    const isTopPlayer = score > 0 && (topScores.length < topRankingSize || score > (topScores.length > 0 ? topScores[topScores.length - 1].score : -1));

    if (isTopPlayer) {
        rankingMessageElement.textContent = 'Você entrou para o ranking! Pose pra foto!';
        rankingMessageElement.style.fontWeight = 'bold';
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            webcamElement.srcObject = stream;
            webcamElement.classList.remove('hidden'); 
            webcamElement.onloadedmetadata = () => {
                startPhotoCountdown(stream);
            };
        } catch (err) {
            console.error("Erro na webcam: ", err);
            addToRanking('placeholdererer.png');
            rankingMessageElement.textContent = 'Erro na câmera. Seu ranking:';
            showRanking();
        }
    } else {
        rankingMessageElement.textContent = 'Você não entrou no ranking. Tente novamente! 😔';
        moldura.style.display = 'none';
        showRanking();
    }
}

function startPhotoCountdown(stream) {
    audioCaptura.play().catch(e => console.log("Erro áudio captura."));
    let photoTimer = 5;
    photoCountdownElement.classList.remove('hidden');
    photoCountdownElement.textContent = photoTimer;
    const interval = setInterval(() => {
        photoTimer--;
        if (photoTimer > 0) {
            photoCountdownElement.textContent = photoTimer;
        } else if (photoTimer === 0) {
            photoCountdownElement.textContent = ''; 
            clearInterval(interval);
            flashScreen();
            setTimeout(() => {
                takePhoto(stream);
            }, 300); 
        } 
    }, 1000);
}

function flashScreen() {
    const flashDiv = document.createElement('div');
    flashDiv.classList.add('flash-screen');
    document.body.appendChild(flashDiv);
    setTimeout(() => {
        flashDiv.remove();
        photoCountdownElement.classList.add('hidden');
    }, 300); 
}

function takePhoto(stream) {
    canvasElement.width = webcamElement.videoWidth;
    canvasElement.height = webcamElement.videoHeight;
    canvasElement.getContext('2d').drawImage(webcamElement, 0, 0, canvasElement.width, canvasElement.height);
    const photoDataUrl = canvasElement.toDataURL('image/jpeg');
    stream.getTracks().forEach(track => track.stop());
    webcamElement.classList.add('hidden');
    moldura.style.display = 'none';
    addToRanking(photoDataUrl);
    rankingMessageElement.textContent = 'Foto capturada! Seu ranking:';
    showRanking();
}

function addToRanking(photoDataUrl) {
    topScores.push({ score, photo: photoDataUrl });
    topScores.sort((a, b) => b.score - a.score);
    if (topScores.length > topRankingSize) {
        topScores.pop();
    }
    // ALTERAÇÃO: Salvamento com a nova chave "topScoresERER"
    localStorage.setItem('topScoresERER', JSON.stringify(topScores));
}

function showRanking() {
    rankingContainer.innerHTML = '';
    topScores.forEach((item, index) => {
        if (index < 5) {
            const rankingItem = document.createElement('div');
            rankingItem.classList.add('ranking-item');
            const photo = document.createElement('img');
            photo.classList.add('ranking-photo');
            photo.src = item.photo || 'placeholder.png';
            const scoreText = document.createElement('span');
            scoreText.classList.add('ranking-score');
            scoreText.textContent = `${item.score}`;
            rankingItem.appendChild(photo);
            rankingItem.appendChild(scoreText);
            rankingContainer.appendChild(rankingItem);
        }
    });
    countdownElement.classList.remove('hidden');
    let countdown = 6; 
    countdownElement.textContent = `Reiniciando em ${countdown}...`;
    const interval = setInterval(() => {
        countdown--;
        countdownElement.textContent = `Reiniciando em ${countdown}...`;
        if (countdown <= 0) {
            clearInterval(interval);
            if (isCurrentlyFullscreen()) {
                 localStorage.setItem('fullscreen_on_reload', 'true');
            } else {
                 localStorage.removeItem('fullscreen_on_reload');
            }
            window.location.reload(); 
        }
    }, 1000);
}

// Event Listeners
startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', startGame);

document.addEventListener('keydown', (e) => {
    if (gameScreen.classList.contains('hidden')) return;
    const key = e.key;
    const optionLetter = keyboardMap[key];
    if (optionLetter) {
        const button = document.getElementById(`option-${optionLetter}`);
        if (button) checkAnswer(button.dataset.answer);
    }
});

document.addEventListener('keydown', (event) => {
    if (!startScreen.classList.contains('hidden') && (event.key === '5' || event.key === ' ' || event.key === 'Enter')) {
        startButton.click();
    }
});


let keysPressed = {};

document.addEventListener('keydown', (event) => {
    keysPressed[event.key] = true;

    if (keysPressed['1'] && keysPressed['2'] && keysPressed['3']) {
        window.location.href = "https://juniorcriste.github.io/Painel-Interativo/";
    }
});

document.addEventListener('keyup', (event) => {
    delete keysPressed[event.key];
});