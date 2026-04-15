const playlist = [
    // CASACA
    { title: "Camarada", artist: "Casaca", src: "audio/casaca/camarada.mp3", cover: "img/casaca1.png" },
    { title: "O Menino Que Sobe a Ladeira (Part. Rapadura)", artist: "Casaca", src: "audio/casaca/meninoladeira.mp3", cover: "img/casaca3.png" },
    { title: "Anjo Samile", artist: "Casaca", src: "audio/casaca/anjosamile.mp3", cover: "img/casaca2.png" },
    { title: "Noite Fria", artist: "Casaca", src: "audio/casaca/noitefria.mp3", cover: "img/casaca2.png" },
    { title: "Garças de Jacarenema", artist: "Casaca", src: "audio/casaca/garcas.mp3", cover: "img/casaca1.png" },
    
    // DALLAS COMPANY
    { title: "Clima de Rodeio", artist: "Dallas Company", src: "audio/dallascompany/climaderodeio.mp3", cover: "img/dallas.png" },
    
    // MACUCOS
    { title: "Além do Mar", artist: "Macucos", src: "audio/macucos/alemdomar.mp3", cover: "img/macucos.png" },
    { title: "Haverá", artist: "Macucos", src: "audio/macucos/havera.mp3", cover: "img/macucos.png" },
       
    // MOXUARA
    { title: "Depende de Nós", artist: "Moxuara", src: "audio/moxuara/dependedenos.mp3", cover: "img/moxuara.png" },
    { title: "Os Meninos da Baía de Vitória", artist: "Moxuara", src: "audio/moxuara/dependedenos.mp3", cover: "img/moxuara.png" },
       
    // PAULO SÉRGIO
    { title: "Quero Ver Você Feliz", artist: "Paulo Sérgio", src: "audio/paulosergio/querovervcfeliz.mp3", cover: "img/paulosergio.png" },
    { title: "Não Creio em Mais Nada", artist: "Paulo Sérgio", src: "audio/paulosergio/naocreioemmaisnada.mp3", cover: "img/paulosergio.png" },
    { title: "Pro Diabo os Conselhos de Vocês", artist: "Paulo Sérgio", src: "audio/paulosergio/paraodiaboosconselhos.mp3", cover: "img/paulosergio.png" },

    // RASTACLONE
    { title: "Selvageria", artist: "Rastaclone", src: "audio/rastaclone/selvageria.mp3", cover: "img/rastaclone.png" },
    { title: "Perfume de Flor", artist: "Rastaclone", src: "audio/rastaclone/perfumedeflor.mp3", cover: "img/rastaclone.png" },
       
    // ROBERTO CARLOS
    { title: "Além do Horizonte", artist: "Roberto Carlos", src: "audio/robertocarlos/alemdohorizonte.mp3", cover: "img/rc1.png" },
    { title: "Parei na Contra Mão", artist: "Roberto Carlos", src: "audio/robertocarlos/contramao.mp3", cover: "img/rc2.png" },
    { title: "Splish Splash", artist: "Roberto Carlos", src: "audio/robertocarlos/splishsplash.mp3", cover: "img/rc2.png" },
    { title: "A Namoradinha do Amigo Meu", artist: "Roberto Carlos", src: "audio/robertocarlos/namoradinha.mp3", cover: "img/rc3.png" },

    // SERGIO SAMPAIO
    { title: "Bloco na Rua", artist: "Sérgio Sampaio", src: "audio/sergiosampaio/bloconarua.mp3", cover: "img/sergiosampaio.png" },
       
    // SILVA
    { title: "A Cor É Rosa", artist: "Silva", src: "audio/silva/acorerosa.mp3", cover: "img/silva.png" },
   
    // SUPERCOMBO
    { title: "Amianto", artist: "Supercombo", src: "audio/supercombo/amianto.mp3", cover: "img/supercombo1.png" },
    { title: "Piloto Automático", artist: "Supercombo", src: "audio/supercombo/pilotoautomatico.mp3", cover: "img/supercombo1.png" },
     
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