let numeroSecreto = gerarNumeroAleatorio();


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}
exibirTextoNaTela('h1' , 'Secret number game');
exibirTextoNaTela('p', 'select a number between 1 and 10');


function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Good hit!');
        exibirTextoNaTela('p', 'you discorver the secret number');
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'number is small');
        }else{
            exibirTextoNaTela('p', 'number is bigger');
        }
    }

}

function gerarNumeroAleatorio(){
   return parseInt(Math.random()* 10 + 1 );
};