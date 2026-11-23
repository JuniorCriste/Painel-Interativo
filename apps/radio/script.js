const playlist = [
    { title: "Vinheta", artist: "Rádio 100% Capixaba!", src: "audio/vinhetas/camaradavinheta.mp3", cover: "img/vinheta1.png" },
    { title: "Vinheta", artist: "Rádio 100% Capixaba!", src: "audio/vinhetas/tremvinheta.mp3", cover: "img/vinheta2.png" },
    { title: "Vinheta", artist: "Rádio 100% Capixaba!", src: "audio/vinhetas/simboravinheta.mp3", cover: "img/vinheta3.png" },
    { title: "Vinheta", artist: "Rádio 100% Capixaba!", src: "audio/vinhetas/camaradavinheta.mp3", cover: "img/vinheta1.png" },
    { title: "Vinheta", artist: "Rádio 100% Capixaba!", src: "audio/vinhetas/tremvinheta.mp3", cover: "img/vinheta2.png" },
    { title: "Vinheta", artist: "Rádio 100% Capixaba!", src: "audio/vinhetas/simboravinheta.mp3", cover: "img/vinheta3.png" },
    { title: "Camarada", artist: "Casaca", src: "audio/casaca/camarada.mp3", cover: "img/casaca1.png" },
    { title: "O Menino Que Sobe a Ladeira (Part. Rapadura)", artist: "Casaca", src: "audio/casaca/meninoladeira.mp3", cover: "img/casaca3.png" },
    { title: "Anjo Samile", artist: "Casaca", src: "audio/casaca/anjosamile.mp3", cover: "img/casaca2.png" },
    { title: "Da Da Da", artist: "Casaca", src: "audio/casaca/dadada.mp3", cover: "img/casaca2.png" },
    { title: "Celebração", artist: "Casaca", src: "audio/casaca/celebracao.mp3", cover: "img/casaca4.png" },
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
    { title: "Minhas Qualidades, Meus Defeitos", artist: "Paulo Sérgio", src: "audio/paulosergio/qualidadesdefeitos.mp3", cover: "img/paulosergio.png" },
    { title: "Última Canção", artist: "Paulo Sérgio", src: "audio/paulosergio/ultimacancao.mp3", cover: "img/paulosergio.png" },
    { title: "Você Vai Me Perder", artist: "Paulo Sérgio", src: "audio/paulosergio/vcvaimeperder.mp3", cover: "img/paulosergio2.png" },
    { title: "Eu Te Amo, Eu Te Venero", artist: "Paulo Sérgio", src: "audio/paulosergio/euteamoeutevenero.mp3", cover: "img/paulosergio2.png" },
    { title: "Selvageria", artist: "Rastaclone", src: "audio/rastaclone/selvageria.mp3", cover: "img/rastaclone.png" },
    { title: "Perfume de Flor", artist: "Rastaclone", src: "audio/rastaclone/perfumedeflor.mp3", cover: "img/rastaclone.png" },
    { title: "Sereia", artist: "Rastaclone", src: "audio/rastaclone/sereia.mp3", cover: "img/rastaclone2.png" },
    { title: "Forte", artist: "Rastaclone", src: "audio/rastaclone/forte.mp3", cover: "img/rastaclone3.png" },
    { title: "Não me Entrego", artist: "Rastaclone", src: "audio/rastaclone/naomeentrego.mp3", cover: "img/rastaclone.png" },
    { title: "Não Vão Me Parar", artist: "Rastaclone", src: "audio/rastaclone/naovaomeparar.mp3", cover: "img/rastaclone2.png" },
    { title: "Esse Cara Sou Eu", artist: "Roberto Carlos", src: "audio/robertocarlos/essecarasoueu.mp3", cover: "img/rc5.png" },
    { title: "Jesus Cristo", artist: "Roberto Carlos", src: "audio/robertocarlos/jesuscristo.mp3", cover: "img/rc4.png" },
    { title: "Chegastes", artist: "Roberto Carlos", src: "audio/robertocarlos/chegastes.mp3", cover: "img/rc7.png" },
    { title: "Amigo", artist: "Roberto Carlos", src: "audio/robertocarlos/amigo.mp3", cover: "img/rc6.png" },
    { title: "Como é Grande Meu Amor Por Você", artist: "Roberto Carlos", src: "audio/robertocarlos/comoegrande.mp3", cover: "img/rc8.png" },
    { title: "Parei na Contra Mão", artist: "Roberto Carlos", src: "audio/robertocarlos/contramao.mp3", cover: "img/rc2.png" },
    { title: "Splish Splash", artist: "Roberto Carlos", src: "audio/robertocarlos/splishsplash.mp3", cover: "img/rc2.png" },
    { title: "A Namoradinha do Amigo Meu", artist: "Roberto Carlos", src: "audio/robertocarlos/namoradinha.mp3", cover: "img/rc3.png" },
    { title: "É Proibido Fumar", artist: "Roberto Carlos", src: "audio/robertocarlos/eproibidofumar.mp3", cover: "img/rc9.png" },
    { title: "O Calhambeque", artist: "Roberto Carlos", src: "audio/robertocarlos/ocalhambeque.mp3", cover: "img/rc9.png" },
    { title: "É Proibido Fumar", artist: "Roberto Carlos", src: "audio/robertocarlos/eproibidofumar.mp3", cover: "img/rc9.png" },
    { title: "O Baile da Fazenda", artist: "Roberto Carlos", src: "audio/robertocarlos/obailedafazenda.mp3", cover: "img/rc10.png" },
    { title: "Bloco na Rua", artist: "Sérgio Sampaio", src: "audio/sergiosampaio/bloconarua.mp3", cover: "img/sergiosampaio.png" },
    { title: "Viajei de Trem", artist: "Sérgio Sampaio", src: "audio/sergiosampaio/viajeidetrem.mp3", cover: "img/sergiosampaio.png" },
    { title: "A Cor É Rosa", artist: "Silva", src: "audio/silva/acorerosa.mp3", cover: "img/silva.png" },
    { title: "Duas da Tarde", artist: "Silva", src: "audio/silva/duasdatarde.mp3", cover: "img/silva2.png" },
    { title: "Brisa", artist: "Silva", src: "audio/silva/brisa.mp3", cover: "img/silva2.png" },
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
    { title: "Primavera", artist: "Trio Chapahall's", src: "audio/chapahalls/primavera.mp3", cover: "img/chapahalls2.png" },   
    { title: "Preciso de Você", artist: "Trio Chapahall's", src: "audio/chapahalls/precisodevoce.mp3", cover: "img/chapahalls2.png" },   
    { title: "Te amar Sempre Assim", artist: "Trio Chapahall's", src: "audio/chapahalls/teamarsempreassim.mp3", cover: "img/chapahalls2.png" },   
    { title: "A Deriva", artist: "Cidade do Reggae", src: "audio/cidadedoreggae/aderiva.mp3", cover: "img/cidadedoreggae1.png" },
    { title: "Feito Um Carrossel", artist: "Cidade do Reggae", src: "audio/cidadedoreggae/feitoumcarrossel.mp3", cover: "img/cidadedoreggae1.png" },
    { title: "A Fé", artist: "Cidade do Reggae", src: "audio/cidadedoreggae/afe.mp3", cover: "img/cidadedoreggae2.png" },
    { title: "Amor de Verão", artist: "Cidade do Reggae", src: "audio/cidadedoreggae/amordeverao.mp3", cover: "img/cidadedoreggae2.png" },
    { title: "Te Vejo na Jamaíca (Part. Janaína Pereira)", artist: "Cidade do Reggae", src: "audio/cidadedoreggae/tevejonajamaica.mp3", cover: "img/cidadedoreggae1.png" },
    { title: "Na Puxada de Rede", artist: "Manimal", src: "audio/manimal/napuxadaderede.mp3", cover: "img/manimal1.png" },
    { title: "Promessa", artist: "Manimal", src: "audio/manimal/promessa.mp3", cover: "img/manimal1.png" },
    { title: "Valeu a Pena", artist: "Manimal", src: "audio/manimal/valeuapena.mp3", cover: "img/manimal1.png" },
    { title: "Anjo", artist: "Forró Raiz", src: "audio/raiz/anjo.mp3", cover: "img/raiz1.png" },
    { title: "Deixa Chover", artist: "Forró Raiz", src: "audio/raiz/deixachover.mp3", cover: "img/raiz1.png" },
    { title: "Lembranças", artist: "Forró Raiz", src: "audio/raiz/lembrancas.mp3", cover: "img/raiz1.png" },
    { title: "Saudade Grande", artist: "Forró Raiz", src: "audio/raiz/saudadegrande.mp3", cover: "img/raiz1.png" },
    { title: "Peito Aberto", artist: "Budah", src: "audio/budah/peitoaberto.mp3", cover: "img/budah1.png" },  
    { title: "Fiorino", artist: "Gabriel Gava", src: "audio/gabrielgava/fiorino.mp3", cover: "img/gg1.png" },  
    { title: "Você", artist: "Dead Fish", src: "audio/deadfish/voce.mp3", cover: "img/df1.png" },  
//    { title: "Deus Caprichou", artist: "Daniel Caon", src: "audio/danielcaon/deuscaprichou.mp3", cover: "img/dc1.png" },  
    { title: "Então Deixa", artist: "Nick Cruz", src: "audio/nickcruz/entaodeixa.mp3", cover: "img/nc2.png" },  
    { title: "Até de Manhã", artist: "Nick Cruz", src: "audio/nickcruz/atedemanha.mp3", cover: "img/nc1.png" },  
    { title: "Sou Igualzinho a Você", artist: "Elias Wagner", src: "audio/eliaswagner/souigualzinhoavoce.mp3", cover: "img/ew1.png" },  
    { title: "A Dor Um Dia Vai Passar", artist: "Elias Wagner", src: "audio/eliaswagner/adorumdiavaipassar.mp3", cover: "img/ew1.png" },   
    { title: "Sai Dessa Coração", artist: "Alemão do Forró", src: "audio/alemao/saidessacoracao.mp3", cover: "img/alemao1.png" },    
    { title: "Fica Amor", artist: "Alemão do Forró", src: "audio/alemao/ficaamor.mp3", cover: "img/alemao2.png" },
    { title: "Tudo Que Você Fizer", artist: "SalvAÇÃO", src: "audio/salvacao/tudoquevcfizer.mp3", cover: "img/salvacao1.png" },    
    { title: "Carametade", artist: "SalvAÇÃO", src: "audio/salvacao/carametade.mp3", cover: "img/salvacao2.png" },    
    { title: "Como Vai Você", artist: "SalvAÇÃO", src: "audio/salvacao/comovaivc.mp3", cover: "img/salvacao2.png" },    
    { title: "Os Dias", artist: "SalvAÇÃO", src: "audio/salvacao/osdias.mp3", cover: "img/salvacao2.png" },    
    { title: "Pode Crer", artist: "SalvAÇÃO", src: "audio/salvacao/podecrer.mp3", cover: "img/salvacao2.png" },   
    { title: "Rinha de Magnata", artist: "Mukeka di Rato", src: "audio/mukekadirato/rinhademagnata.mp3", cover: "img/mukeka1.png" },      
    { title: "Vencer na Vida", artist: "Mukeka di Rato", src: "audio/mukekadirato/vencernavida.mp3", cover: "img/mukeka1.png" },      
    { title: "Você Não Me Conhece", artist: "Eloá Puri", src: "audio/eloapuri/vocenaomeconhece.mp3", cover: "img/eloapuri.png" },      
    { title: "Gruta da Onça", artist: "Eloá Puri", src: "audio/eloapuri/grutadaonca.mp3", cover: "img/eloapuri.png" },      
    { title: "Não é pecado", artist: "Eloá Puri", src: "audio/eloapuri/naoepecado.mp3", cover: "img/eloapuri.png" },      
    { title: "Capa de Vinil", artist: "Gabriela Brown", src: "audio/gabrielabrown/capadevinil.mp3", cover: "img/gabrielabrown.png" },       
    { title: "Capa de Vinil", artist: "Gabriela Brown", src: "audio/gabrielabrown/queima.mp3", cover: "img/gabrielabrown.png" },       
    { title: "Capa de Vinil", artist: "Gabriela Brown", src: "audio/gabrielabrown/bonitoeoque.mp3", cover: "img/gabrielabrown.png" },      
    { title: "Marear (Amanda Requião e JaySant)", artist: "Ada Koffi", src: "audio/adakoffi/marear.mp3", cover: "img/adakoffi.png" },      
    { title: "Flor de Laranjeira", artist: "Ada Koffi", src: "audio/adakoffi/podecrer.mp3", cover: "img/adakoffi.png" },      
    { title: "Pode Crer", artist: "Ada Koffi", src: "audio/adakoffi/osdias.mp3", cover: "img/adakoffi.png" },      
    { title: "Vai não Vai", artist: "Sabrina Lemos", src: "audio/sabrinalemos/vainaovai.mp3", cover: "img/sabrinalemos.png" },   
    { title: "Dor que me Invade ", artist: "Sabrina Lemos", src: "audio/sabrinalemos/dorquemeinvade.mp3", cover: "img/sabrinalemos.png" }
];
 
const curiosidades = {
    "Rádio 100% Capixaba!": "Web Rádio focada na cena musical do Espírito Santo. O projeto compila sucessos de ícones nacionais e regionais capixabas, oferecendo aos ouvintes curiosidades culturais e históricas sobre cada artista.",
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
    "Forró Raiz": "O Forró Raiz surgiu em outubro de 1999, na região de Vitória. Itaúnas, terra natal do vocalista Rafael Boca, é uma das inspirações do grupo.",
    "Alemão do Forró": "Alemão do Forró é um cantor, compositor e instrumentista brasileiro nascido em Linhares, Espírito Santo, conhecido como o 'Rei do Forró Capixaba'. Com voz grave e marcante, consolidou carreira solo, acumulando sucessos nacionais.", 
    "Budah": "Budah é uma cantora, rapper e compositora capixaba que começou a carreira participando de batalhas de rap no Espírito Santo. Sua trajetória é marcada por superação e serve de inspiração para outras mulheres que buscam espaço no cenário.", 
    "Elias Wagner": "Elias Wagner nasceu no interior de Rio Bananal e é um exemplo de superação. Após a paralisia infantil, tornou-se cadeirante e hoje é um dos maiores nomes do sertanejo e do brega capixaba.", 
    "Gabriel Gava": "Gabriel Gava é um cantor brasileiro de sertanejo universitário nascido em Boa Esperança, Espírito Santo, que alcançou fama nacional em 2012 com o hit Fiorino.", 
    "Nick Cruz": "Nick Cruz é um cantor e compositor pop brasileiro natural de Serra, Espírito Santo, que ganhou projeção nacional como o primeiro homem trans a participar de um reality show musical na TV aberta (Estrela da Casa).", 
    "Daniel Caon": "Daniel Caon nasceu em Linhares, no estado do Espírito Santo. Famoso por suas músicas de sertanejo e participação em reality show.", 
    "Dead Fish": "Dead Fish é uma famosa banda brasileira de hardcore melódico formada em Vitória, no Espírito Santo, em 1991. O grupo é conhecido por sua energia ao vivo, letras diretas e forte posicionamento político progressista.", 
    "SalvAÇÃO": "A banda SalvAÇÃO, originária de Vila Velha (ES), é uma das pioneiras do reggae capixaba. Com mais de 30 anos de trajetória, construiu sua história levando mensagens de paz, amor, consciência e respeito à natureza.",
    "Mukeka di Rato": "Mukeka di Rato é uma banda brasileira de punk/hardcore formada no início de 1995 em Vila Velha (ES). O grupo é conhecido pelo som rápido e pesado.",
    "Eloá Puri": "Eloá Puri é uma cantora nascida na região do Caparaó. Sua música mistura sonoridades indígenas contemporâneas, MPB e elementos da natureza com temas de ancestralidade, território e resistência.",
    "Gabriela Brown": "Gabriela Brown é uma cantora capixaba, mergulha na fusão de MPB, soul brasileiro, R&B contemporâneo e elementos latinos e modernos.",
    "Ada Koffi": "Com uma sonoridade que transita pela MPB, R&B e Afrobeat, a artista lançou, em 2026, seu primeiro álbum, Mar de Dentro.",
    "Sabrina Lemos": "Sabrina Lemos é uma cantora, compositora, arranjadora, produtora musical, atriz e apresentadora paulista radicada em Vitória, no Espírito Santo." 
};

// --- FIM DO ACERVO ---


let queue = [];

const audio = document.getElementById('audio-element');
const title = document.getElementById('track-title');
const artist = document.getElementById('track-artist');
const info = document.getElementById('artist-info');
const cover = document.getElementById('album-cover');
const bgOverlay = document.getElementById('bg-overlay');

// --- LÓGICA DA RÁDIO COM CACHE PERSISTENTE (VERSÃO 1.6 - CORREÇÃO DE REMOÇÃO DA FILA) ---

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function saveQueue() {
    localStorage.setItem('radio_queue_v16', JSON.stringify(queue));
}

function loadQueue() {
    const savedQueueRaw = localStorage.getItem('radio_queue_v16');
    
    if (savedQueueRaw) {
        try {
            const parsedQueue = JSON.parse(savedQueueRaw);
            // Se for um array válido e menor ou igual ao tamanho total (garantindo que respeita o progresso atual)
            if (Array.isArray(parsedQueue) && parsedQueue.length > 0 && parsedQueue.length <= playlist.length) {
                queue = parsedQueue;
                console.log(`✅ Fila carregada do cache! Restam exatamente ${queue.length} faixas neste ciclo.`);
                return true;
            }
        } catch (e) {
            console.error("Erro ao ler o cache.");
        }
    }
    
    // Se não houver cache válido, gera uma nova fila completa
    console.warn("🔄 Nenhuma fila válida encontrada. Gerando novo sorteio completo.");
    queue = shuffleArray([...playlist]);
    saveQueue();
    return false;
}

function loadNextTrack() {
    // Se a fila esvaziou, gera um novo ciclo completo
    if (queue.length === 0) {
        queue = shuffleArray([...playlist]);
        console.warn("🔄 A fila acabou! Um novo ciclo completo de todas as faixas foi gerado.");
    }

    // Retira a próxima música da fila oficial
    const track = queue.shift();
    
    // Salva imediatamente no localStorage o array atualizado com a faixa removida
    saveQueue();
    
    // --- MAPEAMENTO DO SORTEIO NO CONSOLE ---
    console.log(`🎲 [Sorteio Rádio Capixaba v1.6] Tocando agora: "${track.title}" - ${track.artist} | Faixas restantes no ciclo: ${queue.length}`);
    console.table(queue.map((t, index) => ({ Ordem: index + 1, Artista: t.artist, Música: t.title })));
    
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
        document.getElementById('main-button').innerText = "OUVINDO AO VIVO";
    } else {
        audio.pause();
        document.getElementById('main-button').innerText = "RETOMAR RÁDIO";
    }
}

audio.onended = loadNextTrack;



// Inicialização Correta: Carrega o cache mantendo o progresso e consome apenas 1 faixa
window.onload = () => {
    loadQueue();
    loadNextTrack();
};

window.addEventListener('message', (event) => {
    if (event.data === 'play_radio') {
        if (audio && audio.paused) {
            audio.play().catch(err => console.log("Erro no autoplay:", err));
        }
    }
    if (event.data === 'stop_radio') {
        if (audio && !audio.paused) {
            audio.pause();
        }
    }
});

// --- REPRODUÇÃO DO ÁUDIO DE HORA PRE-GRAVADO (ESTILO RÁDIO COM FADE) ---

function reproduzirAudioHora() {
    const agora = new Date();
    const horas24 = agora.getHours();
    
    // Converte de formato 24h para 12h
    const horaFormatada = (horas24 % 12) === 0 ? 12 : (horas24 % 12);
    
    const audioHora = new Audio(`audio/hora/${horaFormatada}.ogg`);
    const volumeOriginal = audio.volume;
    const volumeBaixo = volumeOriginal * 0.2; // Volume durante a vinheta (20%)

    // Função interna para transição suave de volume (Fade-in / Fade-out)
    function transicionarVolume(audioElement, volumeAlvo, duracaoMs = 500) {
        const volumeInicial = audioElement.volume;
        const diferenca = volumeAlvo - volumeInicial;
        const passos = 20;
        const intervaloMs = duracaoMs / passos;
        let passoAtual = 0;

        const timer = setInterval(() => {
            passoAtual++;
            audioElement.volume = Math.max(0, Math.min(1, volumeInicial + (diferenca * (passoAtual / passos))));
            
            if (passoAtual >= passos) {
                clearInterval(timer);
            }
        }, intervaloMs);
    }

    // 1. Quando o áudio da hora começar, faz fade-out suave na música principal
    audioHora.onplay = () => {
        transicionarVolume(audio, volumeBaixo, 400); // 0.4s de transição para descer
    };

    // 2. Quando terminar, faz fade-in suave de volta ao volume original
    audioHora.onended = () => {
        transicionarVolume(audio, volumeOriginal, 600); // 0.6s de transição para subir
    };

    // Garantia de segurança contra falhas no áudio da hora
    audioHora.onerror = () => {
        audio.volume = volumeOriginal;
        console.log(`Erro ao reproduzir o arquivo audio/hora/${horaFormatada}.ogg`);
    };

    audioHora.play().catch(() => {
        audio.volume = volumeOriginal;
    });
}

// Verificação do Relógio a cada segundo
setInterval(() => {
    const agora = new Date();
    if (agora.getMinutes() === 0 && agora.getSeconds() === 0) {
        reproduzirAudioHora();
    }
}, 1000);

// --- LÓGICA DE ALTERNÂNCIA (FADE) ENTRE CAPA E LOGO ---

function alternarCapaELogo() {
    const albumCoverImg = document.getElementById('album-cover');
    const radioLogoImg = document.getElementById('radio-logo');

    if (!albumCoverImg || !radioLogoImg) return;

    // Alterna a classe 'active' para criar o efeito fade
    albumCoverImg.classList.toggle('active');
    radioLogoImg.classList.toggle('active');
}

// Alterna a cada 10 segundos (10000ms)
setInterval(alternarCapaELogo, 10000);

// --- LÓGICA DE ATALHO (1 + 2 + 3) COM BLOQUEIO DE TROCA ---

const pressedKeys = new Set();
let messageTimer = null;

function checkAndNavigate() {
    const MAX_CHANGES = 5;
    const LOCK_TIME_SECONDS = 200; // 200 segundos de tempo de bloqueio

    const now = Date.now();
    let changeCount = parseInt(localStorage.getItem('radio_change_count') || '0', 10);
    let lastTime = parseInt(localStorage.getItem('radio_last_change_time') || '0', 10);

    // Se já se passaram 200 segundos ou mais desde o último registro de hora, zera a contagem
    if (lastTime > 0 && (now - lastTime) >= LOCK_TIME_SECONDS * 1000) {
        changeCount = 0;
        localStorage.setItem('radio_change_count', '0');
        localStorage.removeItem('radio_last_change_time');
        lastTime = 0;
    }

    // Se a contagem já tiver atingido 5 trocas
    if (changeCount >= MAX_CHANGES) {
        if (!lastTime) {
            lastTime = now;
            localStorage.setItem('radio_last_change_time', lastTime.toString());
        }

        const elapsedSeconds = Math.floor((now - lastTime) / 1000);
        const remainingSeconds = LOCK_TIME_SECONDS - elapsedSeconds;

        if (remainingSeconds > 0) {
            // Exibe a mensagem de aviso por 10 segundos e bloqueia a navegação
            showLockMessage(remainingSeconds);
            return;
        } else {
            // Se o tempo passou, zera as variáveis
            changeCount = 0;
            localStorage.setItem('radio_change_count', '0');
            localStorage.removeItem('radio_last_change_time');
        }
    }

    // Soma 1 no contador
    changeCount += 1;
    localStorage.setItem('radio_change_count', changeCount.toString());

    // Se atingiu o limite de 5 trocas nesta ação, grava o horário atual
    if (changeCount >= MAX_CHANGES) {
        localStorage.setItem('radio_last_change_time', Date.now().toString());
    }

    // Redireciona para o painel
    window.location.href = "https://juniorcriste.github.io/Painel-Interativo/";
}

function showLockMessage(seconds) {
    let msgElement = document.getElementById('lock-message');

    if (!msgElement) {
        msgElement = document.createElement('div');
        msgElement.id = 'lock-message';
        document.body.appendChild(msgElement);
    }

    msgElement.innerText = `Você já atingiu o limite de troca de música nos últimos minutos, aguarde ${seconds} segundos`;
    msgElement.style.display = 'block';

    if (messageTimer) clearTimeout(messageTimer);

    // Oculta a mensagem após 10 segundos
    messageTimer = setTimeout(() => {
        msgElement.style.display = 'none';
    }, 10000);
}

window.addEventListener('keydown', (e) => {
    pressedKeys.add(e.key);
    if (pressedKeys.has('1') && pressedKeys.has('2') && pressedKeys.has('3')) {
        checkAndNavigate();
    }
});