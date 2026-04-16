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
        question: "Qual é o programa de TV do Espírito Santo que possui um quadro chamado “Pretitude”?",
        options: ["Em Movimento", "Bom Dia ES", "ESTV", "Gazeta Comunidade"],
        answer: "Em Movimento"
    }
];

// ----------------------------------------------------------------------
// Variáveis e Seletores do DOM
// ----------------------------------------------------------------------

const erer_startScreen = document.getElementById('erer-start-screen');
const erer_gameScreen = document.getElementById('erer-game-screen');
const erer_endGameScreen = document.getElementById('erer-end-game-screen');
const erer_startButton = document.getElementById('erer-start-button');
const erer_restartButton = document.getElementById('erer-restart-button');
const erer_questionText = document.getElementById('erer-question-text');
const erer_optionsContainer = document.getElementById('erer-options-container');
const erer_optionButtons = document.querySelectorAll('.erer-option-button');
const erer_finalScoreElement = document.getElementById('erer-final-score');
const erer_endGameMessageElement = document.getElementById('erer-end-game-message');
const erer_rankingMessageElement = document.getElementById('erer-ranking-message');
const erer_rankingContainer = document.getElementById('erer-ranking-container');
const erer_webcamElement = document.getElementById('erer-webcam');
const erer_canvasElement = document.getElementById('erer-canvas');
const erer_countdownElement = document.getElementById('erer-countdown');
const erer_currentScoreElement = document.getElementById('erer-current-score');
const erer_backgroundElement = document.getElementById('erer-background-image');
const erer_preloader = document.getElementById('erer-preloader');
const erer_moldura = document.getElementById('erer-moldura');
const erer_conteudo = document.getElementById('erer-conteudo'); 
const erer_photoCountdownElement = document.getElementById('erer-photo-countdown'); 
const erer_glitchOverlay = document.getElementById('erer-glitch-overlay');
const erer_lifeIcons = [
    document.getElementById('erer-life-1'),
    document.getElementById('erer-life-2'),
    document.getElementById('erer-life-3')
];

let erer_lives = 3;
let erer_shuffledQuestions = [];
let erer_currentQuestionIndex = 0;
let erer_score = 0;
let erer_topScores = JSON.parse(localStorage.getItem('erer-topScores')) || [];
const erer_topRankingSize = 5;

const erer_bgImages = ['background1.jpg', 'background2.jpg', 'background3.jpg'];

// SONS
const erer_audioFundo = new Audio('audio/trilha.ogg');
erer_audioFundo.loop = true;
const erer_audioAcerto = new Audio('audio/acerto.ogg');
const erer_audioErro = new Audio('audio/erro.ogg');
const erer_audioVitoria = new Audio('audio/campeao.ogg');
const erer_audioCaptura = new Audio('audio/captura.ogg'); 

const erer_keyboardMap = { '2': 'd', '4': 'a', '6': 'c', '8': 'b' };

// TELA CHEIA
function erer_enterFullscreen() {
    const el = document.documentElement;
    if (el.requestFullscreen) el.requestFullscreen();
    else if (el.mozRequestFullScreen) el.mozRequestFullScreen();
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
}

function erer_hidePreloader() {
    erer_preloader.classList.add('erer-fade-out');
    setTimeout(() => {
        erer_preloader.style.display = 'none';
        erer_conteudo.style.display = 'block';
    }, 600); 
}

function erer_loadInitialBackground() {
    const randomImg = erer_bgImages[Math.floor(Math.random() * erer_bgImages.length)];
    const path = `img/background/${randomImg}`;
    const img = new Image();
    img.onload = () => {
        erer_backgroundElement.style.backgroundImage = `url('${path}')`;
        erer_hidePreloader();
    };
    img.onerror = () => erer_hidePreloader();
    img.src = path;
}

// INICIO JOGO
function erer_startGame() {
    erer_enterFullscreen();
    erer_audioFundo.play().catch(e => console.log("Áudio bloqueado"));
    
    erer_backgroundElement.classList.add('erer-blurred');
    erer_startScreen.classList.add('erer-hidden');
    erer_endGameScreen.classList.add('erer-hidden');
    erer_gameScreen.classList.remove('erer-hidden');

    erer_shuffledQuestions = [...erer_quizData].sort(() => Math.random() - 0.5);
    erer_currentQuestionIndex = 0;
    erer_score = 0;
    erer_lives = 3;
    
    erer_currentScoreElement.textContent = erer_score;
    erer_updateLifeDisplay();
    erer_displayQuestion();
}

function erer_updateLifeDisplay() {
    erer_lifeIcons.forEach((icon, idx) => {
        icon.style.opacity = idx < erer_lives ? 1 : 0.2;
    });
}

function erer_triggerGlitchEffect() {
    erer_glitchOverlay.classList.remove('erer-hidden');
    erer_glitchOverlay.classList.add('erer-glitch-active');
    erer_audioErro.currentTime = 0; 
    erer_audioErro.play();
    setTimeout(() => {
        erer_glitchOverlay.classList.remove('erer-glitch-active');
        erer_glitchOverlay.classList.add('erer-hidden');
    }, 200); 
}

function erer_displayQuestion() {
    if (erer_currentQuestionIndex >= erer_shuffledQuestions.length) {
        erer_endGame(false);
        return;
    }

    const q = erer_shuffledQuestions[erer_currentQuestionIndex];
    erer_questionText.textContent = q.question;

    erer_optionButtons.forEach((btn, idx) => {
        const letter = btn.id.split('-').pop(); // a, b, c ou d
        const key = Object.keys(erer_keyboardMap).find(k => erer_keyboardMap[k] === letter);
        btn.innerHTML = `<span>${key}</span>${q.options[idx]}`;
        btn.dataset.answer = q.options[idx];
        btn.onclick = () => erer_checkAnswer(btn.dataset.answer);
    });
}

function erer_checkAnswer(selected) {
    const correct = erer_shuffledQuestions[erer_currentQuestionIndex].answer;
    if (selected === correct) {
        erer_score++;
        erer_currentScoreElement.textContent = erer_score;
        erer_audioAcerto.play();
        erer_currentQuestionIndex++;
        erer_displayQuestion();
    } else {
        erer_triggerGlitchEffect(); 
        erer_lives--;              
        erer_updateLifeDisplay();  
        if (erer_lives <= 0) erer_endGame(true);
    }
}

// FINAL E WEBCAM
async function erer_endGame(lost) {
    erer_audioFundo.pause();
    erer_audioFundo.currentTime = 0;
    erer_gameScreen.classList.add('erer-hidden');
    erer_endGameScreen.classList.remove('erer-hidden');
    erer_finalScoreElement.textContent = erer_score;

    if (lost) erer_endGameMessageElement.textContent = `Vidas esgotadas!`;
    else {
        erer_endGameMessageElement.textContent = 'Parabéns! 💥';
        erer_audioVitoria.play();
    }

    const isTop = erer_score > 0 && (erer_topScores.length < erer_topRankingSize || erer_score > (erer_topScores.length > 0 ? erer_topScores[erer_topScores.length - 1].score : -1));

    if (isTop) {
        erer_rankingMessageElement.textContent = 'Novo recorde! Pose pra foto!';
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            erer_webcamElement.srcObject = stream;
            erer_webcamElement.classList.remove('erer-hidden'); 
            erer_webcamElement.onloadedmetadata = () => erer_startPhotoCountdown(stream);
        } catch (err) {
            erer_addToRanking('placeholder.png');
            erer_showRanking();
        }
    } else {
        erer_rankingMessageElement.textContent = 'Tente novamente! 😔';
        erer_moldura.style.display = 'none';
        erer_showRanking();
    }
}

function erer_startPhotoCountdown(stream) {
    erer_audioCaptura.play();
    let timer = 5;
    erer_photoCountdownElement.classList.remove('erer-hidden');
    erer_photoCountdownElement.textContent = timer;

    const interval = setInterval(() => {
        timer--;
        if (timer > 0) erer_photoCountdownElement.textContent = timer;
        else {
            erer_photoCountdownElement.textContent = '';
            clearInterval(interval);
            erer_flashScreen();
            setTimeout(() => erer_takePhoto(stream), 300); 
        } 
    }, 1000);
}

function erer_flashScreen() {
    const flash = document.createElement('div');
    flash.classList.add('erer-flash-screen');
    document.body.appendChild(flash);
    setTimeout(() => {
        flash.remove();
        erer_photoCountdownElement.classList.add('erer-hidden');
    }, 300); 
}

function erer_takePhoto(stream) {
    erer_canvasElement.width = erer_webcamElement.videoWidth;
    erer_canvasElement.height = erer_webcamElement.videoHeight;
    erer_canvasElement.getContext('2d').drawImage(erer_webcamElement, 0, 0);
    const data = erer_canvasElement.toDataURL('image/jpeg');
    stream.getTracks().forEach(t => t.stop());
    erer_webcamElement.classList.add('erer-hidden');
    erer_moldura.style.display = 'none';
    erer_addToRanking(data);
    erer_showRanking();
}

function erer_addToRanking(photo) {
    erer_topScores.push({ score: erer_score, photo });
    erer_topScores.sort((a, b) => b.score - a.score);
    if (erer_topScores.length > erer_topRankingSize) erer_topScores.pop();
    localStorage.setItem('erer-topScores', JSON.stringify(erer_topScores));
}

function erer_showRanking() {
    erer_rankingContainer.innerHTML = '';
    erer_topScores.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `<img src="${item.photo}" class="erer-ranking-photo"> <b>${item.score} pts</b>`;
        erer_rankingContainer.appendChild(div);
    });
    
    erer_countdownElement.classList.remove('erer-hidden');
    let count = 6;
    const interval = setInterval(() => {
        count--;
        erer_countdownElement.textContent = `Reiniciando em ${count}...`;
        if (count <= 0) {
            clearInterval(interval);
            window.location.reload(); 
        }
    }, 1000);
}

// LISTENERS
document.addEventListener('DOMContentLoaded', erer_loadInitialBackground);
erer_startButton.onclick = erer_startGame;
erer_restartButton.onclick = () => window.location.reload();

document.addEventListener('keydown', (e) => {
    if (!erer_gameScreen.classList.contains('erer-hidden')) {
        const letter = erer_keyboardMap[e.key];
        if (letter) document.getElementById(`erer-option-${letter}`).click();
    } else if (!erer_startScreen.classList.contains('erer-hidden') && (e.key === '5' || e.key === 'Enter')) {
        erer_startGame();
    }
});