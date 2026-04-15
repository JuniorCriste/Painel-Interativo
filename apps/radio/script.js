const playlist = [
    { title: "Música 1", artist: "Artista 1", src: "audio/musica1.mp3", cover: "img/capa1.jpg" },
    { title: "Música 2", artist: "Artista 2", src: "audio/musica2.mp3", cover: "img/capa2.jpg" },
    { title: "Música 3", artist: "Artista 3", src: "audio/musica3.mp3", cover: "img/capa3.jpg" },
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