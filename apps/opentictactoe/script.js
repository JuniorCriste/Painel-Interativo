const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('status');
const overlay = document.getElementById('overlay');
const resultBox = document.getElementById('resultBox');

const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');

const scoreXEl = document.getElementById('scoreX');
const scoreOEl = document.getElementById('scoreO');
const scoreDrawEl = document.getElementById('scoreDraw');

let board = Array(9).fill('');
let currentPlayer = 'X';
let playing = true;
let scoreX = 0, scoreO = 0, scoreDraw = 0;

const wins = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

/* SONS */
const soundMark = new Audio('assets/sounds/markttt.ogg');
const soundDraw = new Audio('assets/sounds/voiceNobody.ogg');
const soundWinP1 = new Audio('assets/sounds/voiceP1.ogg');
const soundWinP2 = new Audio('assets/sounds/voiceP2.ogg');

// Música de Fundo
const bgMusic = new Audio('assets_Music_track1.ogg');
bgMusic.loop = true;
bgMusic.volume = 0.3; // Volume mais baixo

// Iniciar música ao primeiro clique (exigência dos navegadores)
document.addEventListener('click', () => {
    bgMusic.play().catch(e => console.log("Aguardando interação para áudio"));
}, { once: true });

function playSound(audio) {
    audio.currentTime = 0; // Reinicia o som caso já esteja tocando
    audio.play();
}
function updateTurn() {
    p1.classList.toggle('active', currentPlayer === 'X');
    p2.classList.toggle('active', currentPlayer === 'O');
    statusText.textContent = currentPlayer === 'X'
        ? 'Vez do Jogador 1'
        : 'Vez do Jogador 2';
}

function checkWin() {
    return wins.some(w => w.every(i => board[i] === currentPlayer));
}

function endGame(type) {
    playing = false;

    // Lógica de áudio para fim de jogo
    if (type === 'draw') {
        playSound(soundDraw);
        scoreDraw++;
    } else {
        if (currentPlayer === 'X') {
            playSound(soundWinP1);
            scoreX++;
        } else {
            playSound(soundWinP2);
            scoreO++;
        }
    }

    // ... restante do código (atualização de placar e overlay) ...
    scoreXEl.textContent = scoreX;
    scoreOEl.textContent = scoreO;
    scoreDrawEl.textContent = scoreDraw;

    const img = type === 'draw'
        ? 'assets/Players/pc.png'
        : currentPlayer === 'X'
            ? 'assets/Players/people1.png'
            : 'assets/Players/people2.png';

    resultBox.innerHTML = `
        <img src="${img}">
        <h2>${type === 'draw' ? 'Deu Velha!' :
        (currentPlayer === 'X' ? 'Jogador 1 venceu!' : 'Jogador 2 venceu!')}</h2>
    `;

    overlay.classList.add('show');
    setTimeout(resetGame, 2500);
}

function resetGame() {
    board.fill('');
    cells.forEach(c => { c.textContent = ''; c.className = 'cell'; });
    overlay.classList.remove('show');
    currentPlayer = 'X';
    playing = true;
    updateTurn();
}

function makeMove(i) {
    if (!playing || board[i]) return;
    
    // ... código anterior ...
    
    playSound(soundMark); // Som ao marcar posição

    if (checkWin()) return endGame('win');
    if (board.every(v => v)) return endGame('draw');

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    updateTurn();
}

/* CLIQUE */
cells.forEach(c => c.addEventListener('click', () => makeMove(+c.dataset.index)));

/* TECLADO */
const map = {'1':0,'2':1,'3':2,'4':3,'5':4,'6':5,'7':6,'8':7,'9':8};
let combo = new Set();

document.addEventListener('keydown', e => {
    if (map[e.key] !== undefined) {
        const cell = document.querySelector(`.cell[data-index="${map[e.key]}"]`);
        if(cell) {
            cell.classList.add('active');
            setTimeout(() => cell.classList.remove('active'), 120);
            makeMove(map[e.key]);
        }
    }

    if (['1','2','3'].includes(e.key)) {
        combo.add(e.key);
        if (combo.size === 3) {
            window.location.href = 'https://juniorcriste.github.io/Painel-Interativo/';
        }
    }
});

document.addEventListener('keyup', e => {
    if (['1','2','3'].includes(e.key)) combo.delete(e.key);
});



// Define o tempo de inatividade (5 minutos em milissegundos)
const TEMPO_LIMITE = 5 * 60 * 1000; 
let temporizador;

/**
 * Função que redireciona para a URL desejada
 */
function resetarPagina() {
    window.location.href = "https://juniorcriste.github.io/Painel-Interativo/";
}

/**
 * Reinicia a contagem do temporizador
 */
function reiniciarTemporizador() {
    // Limpa o cronômetro anterior
    clearTimeout(temporizador);
    
    // Inicia um novo cronômetro de 5 minutos
    temporizador = setTimeout(resetarPagina, TEMPO_LIMITE);
}

// Monitora cliques em qualquer lugar do documento (incluindo botões)
document.addEventListener("click", reiniciarTemporizador);

// Monitora pressionamento de teclas (caso haja formulários ou navegação por teclado)
document.addEventListener("keydown", reiniciarTemporizador);

// Inicia o temporizador assim que a página carrega pela primeira vez
reiniciarTemporizador();