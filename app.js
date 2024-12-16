let listaDeNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
var tentativas =1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'UK English Female',{rate:1.2});

}
function exibirMensagemInicial(){
    exibirTextoNaTela('h1' , 'Secret number game');
    exibirTextoNaTela('p', 'select a number between 1 and 10');
};
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Good hit!');
        let palavraTentativa = tentativas > 1 ? 'tries' : 'try';
        let mensagemTentativas = `you discorver the secret number with ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'number is small');
        }else{
            exibirTextoNaTela('p', 'number is bigger');
        }
        tentativas++;
        limparCampo();
    }

}

function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random()* numeroLimite + 1 );
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
   if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
    }
   if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
   } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
   }
};

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
};

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
};