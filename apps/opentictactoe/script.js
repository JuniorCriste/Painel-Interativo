/* SELETORES DE ELEMENTOS */
const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('status');
const overlay = document.getElementById('overlay');
const resultBox = document.getElementById('resultBox');

const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');

const scoreXEl = document.getElementById('scoreX');
const scoreOEl = document.getElementById('scoreO');
const scoreDrawEl = document.getElementById('scoreDraw');

/* ESTADO DO JOGO */
let board = Array(9).fill('');
let currentPlayer = 'X';
let playing = true;
let scoreX = 0, scoreO = 0, scoreDraw = 0;
let winningLine = []; // Guarda os índices da linha que venceu

const wins = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontais
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Verticais
    [0, 4, 8], [2, 4, 6]             // Diagonais
];

/* CONFIGURAÇÃO DE ÁUDIO */
const soundMark = new Audio('assets/sounds/markttt.ogg');
const soundDraw = new Audio('assets/sounds/voiceNobody.ogg');
const soundWinP1 = new Audio('assets/sounds/voiceP1.ogg');
const soundWinP2 = new Audio('assets/sounds/voiceP2.ogg');
const bgMusic = new Audio('assets_Music_track1.ogg');

bgMusic.loop = true;
bgMusic.volume = 0.2; // Volume reduzido para o fundo

// Iniciar música ao primeiro clique (exigência dos navegadores)
document.addEventListener('click', () => {
    bgMusic.play().catch(() => {});
}, { once: true });

function playSound(audio) {
    audio.currentTime = 0;
    audio.play();
}

/* LÓGICA DO JOGO */
function updateTurn() {
    p1.classList.toggle('active', currentPlayer === 'X');
    p2.classList.toggle('active', currentPlayer === 'O');
    statusText.textContent = currentPlayer === 'X'
        ? 'Vez do Jogador 1'
        : 'Vez do Jogador 2';
}

function checkWin() {
    // Procura se alguma das combinações de vitória foi preenchida pelo jogador atual[cite: 1]
    const winMatch = wins.find(w => w.every(i => board[i] === currentPlayer));
    if (winMatch) {
        winningLine = winMatch;
        return true;
    }
    return false;
}

function highlightWinner() {
    // Aplica a classe de destaque nas células vencedoras[cite: 1]
    winningLine.forEach(index => {
        cells[index].classList.add('winner-highlight');
    });
}

function endGame(type) {
    playing = false;

    if (type === 'draw') {
        playSound(soundDraw);
        scoreDraw++;
    } else {
        highlightWinner(); // Destaca a linha antes de exibir o resultado[cite: 1]
        if (currentPlayer === 'X') {
            playSound(soundWinP1);
            scoreX++;
        } else {
            playSound(soundWinP2);
            scoreO++;
        }
    }

    // Atualiza placar[cite: 1]
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

    // Exibe o overlay (ajuste o CSS para que ele não tampe o centro)[cite: 1]
    overlay.classList.add('show');
    
    // Aguarda 3 segundos para que os jogadores vejam a linha marcada[cite: 1]
    setTimeout(resetGame, 3000);
}

function resetGame() {
    board.fill('');
    winningLine = [];
    cells.forEach(c => { 
        c.textContent = ''; 
        c.className = 'cell'; 
    });
    overlay.classList.remove('show');
    currentPlayer = 'X';
    playing = true;
    updateTurn();
}

function makeMove(i) {
    if (!playing || board[i]) return;
    
    board[i] = currentPlayer;
    const c = document.querySelector(`.cell[data-index="${i}"]`);
    c.textContent = currentPlayer;
    c.classList.add(currentPlayer === 'X' ? 'x' : 'o');
    
    playSound(soundMark); // Som de clique[cite: 1]

    if (checkWin()) return endGame('win');
    if (board.every(v => v)) return endGame('draw');

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    updateTurn();
}

/* EVENTOS DE CLIQUE */
cells.forEach(c => c.addEventListener('click', () => makeMove(+c.dataset.index)));

/* TECLADO E ATALHOS */
const map = { '1': 0, '2': 1, '3': 2, '4': 3, '5': 4, '6': 5, '7': 6, '8': 7, '9': 8 };
let combo = new Set();

document.addEventListener('keydown', e => {
    // Jogada por teclado
    if (map[e.key] !== undefined) {
        const cell = document.querySelector(`.cell[data-index="${map[e.key]}"]`);
        if (cell) {
            cell.classList.add('active');
            setTimeout(() => cell.classList.remove('active'), 120);
            makeMove(map[e.key]);
        }
    }

    // Atalho especial (1+2+3)[cite: 1]
    if (['1', '2', '3'].includes(e.key)) {
        combo.add(e.key);
        if (combo.size === 3) {
            window.location.href = 'https://juniorcriste.github.io/Painel-Interativo/';
        }
    }
});

document.addEventListener('keyup', e => {
    if (['1', '2', '3'].includes(e.key)) combo.delete(e.key);
});

/* SISTEMA DE INATIVIDADE (5 MINUTOS)[cite: 1] */
const TEMPO_LIMITE = 5 * 60 * 1000; 
let temporizador;

function resetarPagina() {
    window.location.href = "https://juniorcriste.github.io/Painel-Interativo/";
}

function reiniciarTemporizador() {
    clearTimeout(temporizador);
    temporizador = setTimeout(resetarPagina, TEMPO_LIMITE);
}

document.addEventListener("click", reiniciarTemporizador);
document.addEventListener("keydown", reiniciarTemporizador);

reiniciarTemporizador();