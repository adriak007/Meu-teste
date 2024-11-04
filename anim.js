var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

var lyricsData = [
  { text: "Bruna eu te amooo", time: 2 },
  { text: "você é a mulher mais incrivel do mundo", time: 4 },
  { text: "Ass: Juininho S2", time: 6 },

  { text: "Você é assim", time: 13 },
  { text: "Um sonho pra mim", time: 15 },
  { text: "E quando eu não te vejo", time: 18 },
  { text: "Eu penso em você", time: 21 },
  { text: "Desde o amanhecer", time: 24 },
  { text: "Até quando eu me deito", time: 27 },
  
  { text: "Eu gosto de você", time: 31 },
  { text: "E gosto de ficar com você", time: 36 },
  { text: "Meu riso é tão feliz contigo", time: 39 },
  { text: "O meu melhor amigo é o meu amor", time: 43 },
  
  { text: "E a gente canta", time: 46 },
  { text: "E a gente dança", time: 50 },
  { text: "E a gente não se cansa", time: 54 },
  { text: "De ser criança", time: 56 },
  { text: "A gente brinca", time: 57 },
  { text: "Na nossa velha infância", time: 63 },
  
  { text: "Seus olhos, meu clarão", time: 67 },
  { text: "Me guiam dentro da escuridão", time: 70 },
  { text: "Seus pés me abrem o caminho", time: 73 },
  { text: "Eu sigo e nunca me sinto só", time: 76 }
];

// Animar as letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula a opacidade baseada no tempo na linha atual
    var fadeInDuration = 0.1; // Duração do efeito de aparecimento em segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica o efeito de aparecimento
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece a opacidade e o conteúdo se não há uma linha atual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//função título
// Função para ocultar o título após 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duração e função de temporização da desaparecimento */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Chama a função após 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);