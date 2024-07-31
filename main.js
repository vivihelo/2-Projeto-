const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPergunta = document.querySelector("caixa-pergunta");
const caixaAlternativa = document.querySelector("caixa-alternativa");
const caixaResultado = document.querySelector("caixa-resultado");
const textoResultado = document.querySelector("texto-resultado");

const perguntas = [

    {
        enunciado: "Pergunta 1",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: [
            "Alterativa 1",
            "Alternativa 2"
        ]
    },

];

let atual = 0;
let perguntaAtual

function mostraPergunta () {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas () {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlernativas = document.createElement("button");
        botaoAlernativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlernativas);
    }
}
mostraPergunta();