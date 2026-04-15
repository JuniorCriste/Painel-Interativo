const playlist = [
    { title: "Camarada", artist: "Casaca", src: "audio/casaca/camarada.mp3", cover: "img/casaca1.png" },
    { title: "O Menino Que Sobe a Ladeira (Part. Rapadura)", artist: "Casaca", src: "audio/casaca/meninoladeira.mp3", cover: "img/casaca3.png" },
    { title: "Anjo Samile", artist: "Casaca", src: "audio/casaca/anjosamile.mp3", cover: "img/casaca2.png" },
    { title: "Noite Fria", artist: "Casaca", src: "audio/casaca/noitefria.mp3", cover: "img/casaca2.png" },
    { title: "Garças de Jacarenema", artist: "Casaca", src: "audio/casaca/garcas.mp3", cover: "img/casaca1.png" },
    // Continue adicionando até a 20...
];

let currentIndex = 0;
const audio = document.getElementById('audio-element');
const title = document.getElementById('track-title');
const artist = document.getElementById('track-artist');
const cover = document.getElementById('album-cover');
const bgOverlay = document.getElementById('bg-overlay');
const status = document.getElementById('radio-status');
const btn = document.getElementById('main-button');

function loadTrack(index) {
    const track = playlist[index];
    title.innerText = track.title;
    artist.innerText = track.artist;
    cover.src = track.cover;
    
    // Atualiza o fundo desfocado
    bgOverlay.style.backgroundImage = `url('${track.cover}')`;
    
    // Atualiza o arquivo de áudio
    audio.src = track.src;
}

function toggleRadio() {
    if (audio.paused) {
        audio.play().catch(e => console.log("Erro ao reproduzir: ", e));
        btn.innerText = "OUVINDO AGORA";
        status.innerText = "● AO VIVO";
    }
}

// Quando a música termina, carrega a próxima e toca automaticamente
audio.onended = function() {
    currentIndex = (currentIndex + 1) % playlist.length;
    loadTrack(currentIndex);
    audio.play();
};

// Inicia com a primeira música da lista preparada
loadTrack(currentIndex);