let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function gerarNumeroAleatorio(){
	return parseInt(Math.random()*10 + 1);
}

mensagemInicial();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    mensagemInicial();
}

function mensagemInicial(){
    exibirTextoNaTela("h1", "O Jogo");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

function verificarChute(){
    mensagemInicial();
    let chute = document.querySelector("input").value;
    console.log(chute == numeroSecreto);

    if(chute == numeroSecreto){
        exibirTextoNaTela("h1", "Você acertou!");
        let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativa = `Você acertou o número secreto em ${tentativas} ${palavraTentativas}`;
        exibirTextoNaTela("p", mensagemTentativa);
    }else if (chute > numeroSecreto){
        exibirTextoNaTela("p", "O número secreto é menor!");
    }else{
        exibirTextoNaTela("p", "O número secreto é maior!");
    }
    limparChute();
    document.getElementById("reiniciar").removeAttribute("disabled");
    tentativas++;
}

function limparChute(){
    chute = document.querySelector("input");
    chute.value = " ";
}

function reiniciarJogo(){
    document.getElementById("reiniciar").setAttribute("disabled", true);
    mensagemInicial();
    numeroSecreto = gerarNumeroAleatorio();
    limparChute();
    tentativas++;
}