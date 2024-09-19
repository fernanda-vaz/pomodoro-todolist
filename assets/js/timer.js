const html = document.querySelector("html");
const pomodoroBt = document.querySelector(".pomodoro");
const intervaloCurtoBt = document.querySelector(".intervalo-curto");
const intervaloLongoBt = document.querySelector(".intervalo-longo");
const botoesFoco = document.querySelectorAll(".pomodoro-botoes");
const tempoNaTela = document.getElementById("timer");
const comecarPausarBt = document.getElementById("comecar-pausar");

const audioTempoFinalizado = new Audio("../assets/sounds/clock-alarm-8761.mp3");
const musica = new Audio("../assets/sounds/luna-rise-part-one.mp3");
const musicaFocoInput = document.getElementById("alternar-musica");

let tempoDecorrido = 1500;
let intervaloId = null;

musica.loop = true;

musicaFocoInput.addEventListener("click", () => {
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
});

pomodoroBt.addEventListener("click", () => {
  tempoDecorrido = 1500;
  alterarContexto("pomodoro");
  pomodoroBt.classList.add("ativado");
});

intervaloCurtoBt.addEventListener("click", () => {
  tempoDecorrido = 300;
  alterarContexto("intervalo-curto");
  intervaloCurtoBt.classList.add("ativado");
});

intervaloLongoBt.addEventListener("click", () => {
  tempoDecorrido = 900;
  alterarContexto("intervalo-longo");
  intervaloLongoBt.classList.add("ativado");
});

function alterarContexto(contexto) {
  mostrarTempo();
  botoesFoco.forEach(function (contexto) {
    contexto.classList.remove("ativado");
  });
  html.setAttribute("data-contexto", contexto);
}

const contagemRegressiva = () => {
  if (tempoDecorrido <= 0) {
    audioTempoFinalizado.play();
    alert("Tempo finalizado!");
    recomecar();
    return;
  }
  mostrarTempo();
  tempoDecorrido -= 1;
};

comecarPausarBt.addEventListener("click", iniciarPausar);

function iniciarPausar() {
  if (intervaloId) {
    recomecar();
    return;
  }
  comecarPausarBt.textContent = "Pausar";
  intervaloId = setInterval(contagemRegressiva, 1000);
}

function recomecar() {
  clearInterval(intervaloId);
  comecarPausarBt.textContent = "Começar";
  intervaloId = null;
}

function mostrarTempo() {
  const tempo = new Date(tempoDecorrido * 1000);
  const tempoFormatado = tempo.toLocaleTimeString("pt-br", {
    minute: "2-digit",
    second: "2-digit",
  });
  tempoNaTela.innerHTML = `${tempoFormatado}`;
}
mostrarTempo();
