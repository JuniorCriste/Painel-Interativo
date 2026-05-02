const playlist = [
    { title: "Camarada", artist: "Casaca", src: "audio/casaca/camarada.mp3", cover: "img/casaca1.png" },
    { title: "O Menino Que Sobe a Ladeira (Part. Rapadura)", artist: "Casaca", src: "audio/casaca/meninoladeira.mp3", cover: "img/casaca3.png" },
    { title: "Anjo Samile", artist: "Casaca", src: "audio/casaca/anjosamile.mp3", cover: "img/casaca2.png" },
    { title: "Noite Fria", artist: "Casaca", src: "audio/casaca/noitefria.mp3", cover: "img/casaca2.png" },
    { title: "Garças de Jacarenema", artist: "Casaca", src: "audio/casaca/garcas.mp3", cover: "img/casaca1.png" },
    { title: "Clima de Rodeio", artist: "Dallas Company", src: "audio/dallascompany/climaderodeio.mp3", cover: "img/dallas.png" },
    { title: "Saudade", artist: "Dallas Company", src: "audio/dallascompany/saudade.mp3", cover: "img/dallas.png" },
    { title: "Black Mu", artist: "Dallas Company", src: "audio/dallascompany/blackmu.mp3", cover: "img/dallas.png" },
    { title: "Dança de Cowboy", artist: "Dallas Company", src: "audio/dallascompany/dancadecowboy.mp3", cover: "img/dallas.png" },
    { title: "Além do Mar", artist: "Macucos", src: "audio/macucos/alemdomar.mp3", cover: "img/macucos.png" },
    { title: "Haverá", artist: "Macucos", src: "audio/macucos/havera.mp3", cover: "img/macucos.png" },
    { title: "Depende de Nós", artist: "Moxuara", src: "audio/moxuara/dependedenos.mp3", cover: "img/moxuara.png" },
    { title: "Os Meninos da Baía de Vitória", artist: "Moxuara", src: "audio/moxuara/dependedenos.mp3", cover: "img/moxuara.png" },
    { title: "Quero Ver Você Feliz", artist: "Paulo Sérgio", src: "audio/paulosergio/querovervcfeliz.mp3", cover: "img/paulosergio.png" },
    { title: "Não Creio em Mais Nada", artist: "Paulo Sérgio", src: "audio/paulosergio/naocreioemmaisnada.mp3", cover: "img/paulosergio.png" },
    { title: "Pro Diabo os Conselhos de Vocês", artist: "Paulo Sérgio", src: "audio/paulosergio/paraodiaboosconselhos.mp3", cover: "img/paulosergio.png" },
    { title: "Selvageria", artist: "Rastaclone", src: "audio/rastaclone/selvageria.mp3", cover: "img/rastaclone.png" },
    { title: "Perfume de Flor", artist: "Rastaclone", src: "audio/rastaclone/perfumedeflor.mp3", cover: "img/rastaclone.png" },
    { title: "Além do Horizonte", artist: "Roberto Carlos", src: "audio/robertocarlos/alemdohorizonte.mp3", cover: "img/rc1.png" },
    { title: "Parei na Contra Mão", artist: "Roberto Carlos", src: "audio/robertocarlos/contramao.mp3", cover: "img/rc2.png" },
    { title: "Splish Splash", artist: "Roberto Carlos", src: "audio/robertocarlos/splishsplash.mp3", cover: "img/rc2.png" },
    { title: "A Namoradinha do Amigo Meu", artist: "Roberto Carlos", src: "audio/robertocarlos/namoradinha.mp3", cover: "img/rc3.png" },
    { title: "Bloco na Rua", artist: "Sérgio Sampaio", src: "audio/sergiosampaio/bloconarua.mp3", cover: "img/sergiosampaio.png" },
    { title: "Viajei de Trem", artist: "Sérgio Sampaio", src: "audio/sergiosampaio/viajeidetrem.mp3", cover: "img/sergiosampaio.png" },
    { title: "A Cor É Rosa", artist: "Silva", src: "audio/silva/acorerosa.mp3", cover: "img/silva.png" },
    { title: "Amianto", artist: "Supercombo", src: "audio/supercombo/amianto.mp3", cover: "img/supercombo1.png" },
    { title: "Piloto Automático", artist: "Supercombo", src: "audio/supercombo/pilotoautomatico.mp3", cover: "img/supercombo1.png" },
    { title: "Beijo Matador", artist: "Forró Bemtivi", src: "audio/bemtivi/beijomatador.mp3", cover: "img/bemtivi1.png" },
    { title: "Nosso Forró", artist: "Forró Bemtivi", src: "audio/bemtivi/nossoforro.mp3", cover: "img/bemtivi1.png" },
    { title: "Forró de Itaúnas", artist: "Chama Chuva", src: "audio/chamachuva/forrodeitaunas.mp3", cover: "img/chamachuva1.png" },
    { title: "Samarina", artist: "Chama Chuva", src: "audio/chamachuva/samarina.mp3", cover: "img/chamachuva1.png" },
    { title: "Um Pouquinho de Você", artist: "Chama Chuva", src: "audio/chamachuva/umpouquinhodevc.mp3", cover: "img/chamachuva1.png" },
    { title: "Castigo (Versão)", artist: "Trio Chapahall's", src: "audio/chapahalls/castigoversao.mp3", cover: "img/chapahalls1.png" },
    { title: "Sonhos (Versão)", artist: "Trio Chapahall's", src: "audio/chapahalls/sonhos.mp3", cover: "img/chapahalls2.png" },
    { title: "Ritmo Quente", artist: "Trio Chapahall's", src: "audio/chapahalls/ritmoquente.mp3", cover: "img/chapahalls2.png" },
    { title: "A Deriva", artist: "Cidade do Reggae", src: "audio/cidadedoreggae/aderiva.mp3", cover: "img/cidadedoreggae1.png" },
    { title: "Te Vejo na Jamaíca (Part. Janaína Pereira)", artist: "Cidade do Reggae", src: "audio/cidadedoreggae/tevejonajamaica.mp3", cover: "img/cidadedoreggae1.png" },
    { title: "Na Puxada de Rede", artist: "Manimal", src: "audio/manimal/napuxadaderede.mp3", cover: "img/manimal1.png" },
    { title: "Promessa", artist: "Manimal", src: "audio/manimal/promessa.mp3", cover: "img/manimal1.png" },
    { title: "Valeu a Pena", artist: "Manimal", src: "audio/manimal/valeuapena.mp3", cover: "img/manimal1.png" },
    { title: "Anjo", artist: "Forró Raiz", src: "audio/raiz/anjo.mp3", cover: "img/raiz1.png" },
    { title: "Deixa Chover", artist: "Forró Raiz", src: "audio/raiz/deixachover.mp3", cover: "img/raiz1.png" },
    { title: "Lembranças", artist: "Forró Raiz", src: "audio/raiz/lembrancas.mp3", cover: "img/raiz1.png" },
    { title: "Saudade Grande", artist: "Forró Raiz", src: "audio/raiz/saudadegrande.mp3", cover: "img/raiz1.png" },
    { title: "Anjo", artist: "Forró Raiz", src: "audio/raiz/anjo.mp3", cover: "img/raiz1.png" },    
    { title: "Sai Dessa Coração", artist: "Alemão do Forró", src: "audio/alemao/saidessacoracao.mp3", cover: "img/alemao1.png" }    
];

const curiosidades = {
    "Roberto Carlos": "Roberto Carlos Braga (Cachoeiro de Itapemirim, 19 de abril de 1941) é um cantor e compositor brasileiro. Figura-chave da Jovem Guarda, é o artista de maior êxito comercial da história da música brasileira, sendo chamado de 'Rei'.",
    "Supercombo": "A Supercombo é uma banda de rock alternativo formada em 2007 em Vitória (ES), radicada em São Paulo, conhecida por letras que abordam dilemas cotidianos e dramas da juventude.",
    "Casaca": "A Banda Casaca é um grupo capixaba de pop-rock e reggae formado em 1999 em Vila Velha, reconhecido por fundir ritmos locais como o congo com influências pop.",
    "Sérgio Sampaio": "Sérgio Sampaio (1947–1994) foi um ícone da MPB conhecido pelo famoso 'Eu Quero é Botar Meu Bloco na Rua'. Misturava samba, rock e crônicas sociais.",
    "Dallas Company": "A banda Dallas Company é um grupo de country e sertanejo formado em 1994, em Colatina, conhecido nacionalmente pelo hit 'Clima de Rodeio'.",
    "Macucos": "A Macucos é uma banda de reggae formada em 1999 em Vila Velha, reconhecida como um dos maiores nomes do gênero no Brasil, misturando reggae com ritmos brasileiros.",
    "Moxuara": "O Grupo Moxuara (Cariacica, 1991) mistura MPB, congo e influências folclóricas, com foco na preservação ambiental e cultura capixaba.",
    "Paulo Sérgio": "Paulo Sérgio (1944–1980), nascido em Alegre (ES), foi um influente cantor romântico, precursor do estilo brega-romântico e dono do sucesso 'Última Canção'.",
    "Rastaclone": "A Rastaclone é uma banda de rock e reggae formada em 1997 em Vila Velha, consolidada como um dos grandes nomes da música independente capixaba.",
    "Silva": "Silva é um renomado cantor e multi-instrumentista nascido em Vitória em 1988, destaque da nova MPB que mistura indie pop e samba.",
    "Forró Bemtivi": "Forró Bemtivi é uma banda de forró pé-de-serra fundada em Vitória, em outubro de 2000, surgindo inicialmente de uma gincana escolar para celebrar a cultura nordestina, especialmente Luiz Gonzaga.",
    "Chama Chuva": "Inicialmente a banda ia se chamar Trio Remelexo, mas adotaram o nome de Chama Chuva em função das constantes chuvas ocorridas em Itaúnas, que coincidiram com suas apresentações, passando a ser chamados de 'Os Chama Chuva'.",
    "Trio Chapahall's": "A banda Trio Chapahalls foi fundada na cidade de São Mateus, no Norte do Espírito Santo. Surgiu no final dos anos 90, unindo o talento de músicos que já circulavam pela cena regional.",
    "Cidade do Reggae": "A Banda Cidade do Reggae, de Vila Velha, foi fundada em outubro de 2012 com objetivo de levar mensagens positivas através do reggae com composições marcantes e envolventes.",
    "Manimal": "Manimal é uma banda da cidade de Vitória. Formada em 1986, seu repertório musical é um misto de rock, congo, ticumbi, entre outros gêneros musicais, resultando assim em um ritmo musical conhecido por 'Movimento rockongo'.",
    "Forró Raiz": "O Forró Raiz surgiu em outubro de 1999, na região de Vitória. Itaúnas, terra natal do vocalista Rafael Boca, é uma das inspirações do grupo. ",
    "Alemão do Forró": "Alemão do Forró é um cantor, compositor e instrumentista brasileiro nascido em Linhares, Espírito Santo, conhecido como o 'Rei do Forró Capixaba'. Com voz grave e marcante, consolidou carreira solo, acumulando sucessos nacionais."
};

// ... Fim do acervo

let queue = [];
const audio = document.getElementById('audio-element');
const title = document.getElementById('track-title');
const artist = document.getElementById('track-artist');
const info = document.getElementById('artist-info');
const cover = document.getElementById('album-cover');
const bgOverlay = document.getElementById('bg-overlay');

// --- LÓGICA DA RÁDIO COM CACHE ---

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function saveQueue() {
    localStorage.setItem('radio_queue', JSON.stringify(queue));
}

function loadQueue() {
    const saved = localStorage.getItem('radio_queue');
    if (saved) {
        queue = JSON.parse(saved);
    }
    
    // Se o cache estiver vazio ou corrompido, gera uma nova fila
    if (!queue || queue.length === 0) {
        queue = shuffleArray([...playlist]);
        saveQueue();
    }
}

function loadNextTrack() {
    // Se acabou a fila, recria uma nova do zero
    if (queue.length === 0) {
        queue = shuffleArray([...playlist]);
    }

    // Remove a primeira música da fila (shift)
    const track = queue.shift();
    
    // Salva a fila atualizada (sem a música que vai tocar agora)
    saveQueue();
    
    // Atualiza os elementos da página
    title.innerText = track.title;
    artist.innerText = track.artist;
    cover.src = track.cover;
    bgOverlay.style.backgroundImage = `url('${track.cover}')`;
    audio.src = track.src;
    info.innerText = curiosidades[track.artist] || "Informação não disponível.";

    document.title = `Rádio 100% Capixaba! Ouvindo agora: ${track.artist} - ${track.title}`;
    
    audio.play().catch(() => console.log("Aguardando interação do usuário..."));
}

function toggleRadio() {
    if (audio.paused) {
        audio.play();
        document.getElementById('main-button').innerText = "OUVINDO AGORA";
    } else {
        audio.pause();
        document.getElementById('main-button').innerText = "RETOMAR RÁDIO";
    }
}

audio.onended = loadNextTrack;

// --- LÓGICA DE ATALHO (1 + 2 + 3) ---

const pressedKeys = new Set();

window.addEventListener('keydown', (e) => {
    pressedKeys.add(e.key);
    if (pressedKeys.has('1') && pressedKeys.has('2') && pressedKeys.has('3')) {
        window.location.href = "https://juniorcriste.github.io/Painel-Interativo/";
    }
});

window.addEventListener('keyup', (e) => {
    pressedKeys.delete(e.key);
});

// Inicialização corrigida
window.onload = () => {
    loadQueue();
    loadNextTrack();
};