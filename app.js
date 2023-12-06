let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function gerarNumeroAleatorio(){
	let numeroEscolhido = parseInt(Math.random()*numeroLimite + 1);
    let quantidadeDaLista = listaDeNumerosSorteados.length;
 
    if(quantidadeDaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
         return gerarNumeroAleatorio;
    }else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

mensagemInicial();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}

function mensagemInicial(){
    exibirTextoNaTela("h1", "O Jogo");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

function verificarChute(){
    let chute = document.querySelector("input").value;
    console.log(chute == numeroSecreto);

    let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativa = `Você acertou o número secreto em ${tentativas} ${palavraTentativas}`;
        
    if(chute == numeroSecreto){
        exibirTextoNaTela("h1", "Você acertou!");
        exibirTextoNaTela("p", mensagemTentativa);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else if (chute > numeroSecreto){
        exibirTextoNaTela("p", "O número secreto é menor!");
    }else{
        exibirTextoNaTela("p", "O número secreto é maior!");
    }
    limparChute();
    tentativas++;
}

function limparChute(){
    chute = document.querySelector("input");
    chute.value = " ";
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparChute();
    tentativas = 1;
    mensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}