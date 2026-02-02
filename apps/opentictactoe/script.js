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
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function sound(freq, dur) {
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    g.gain.value = 350;
    o.frequency.value = freq;
    o.connect(g);
    g.connect(audioCtx.destination);
    o.start();
    g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + dur);
    o.stop(audioCtx.currentTime + dur);
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
    sound(type === 'draw' ? 380 : 900, .6);

    if (type === 'draw') scoreDraw++;
    else if (currentPlayer === 'X') scoreX++;
    else scoreO++;

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
    board[i] = currentPlayer;
    const c = document.querySelector(`.cell[data-index="${i}"]`);
    c.textContent = currentPlayer;
    c.classList.add(currentPlayer === 'X' ? 'x' : 'o');

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