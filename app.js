let title = document.querySelector('h1');
let city;
var number1
var number2
title.innerHTML = 'Hora do Desafio';

function clickConsole(){
    console.log('O botão foi clicado');
};

function clickAlert(){
    alert('Eu amo JS');
};

function clickPromt(){
    let city =prompt('digite o nome de uma cidade');
    alert('Estive em '+city+ ' e lembrei de você');

};

function clickSoma(){
    let number1 =prompt('digite um valor inteiro');
    let number2 =prompt('digite outro valor inteiro');
    number1 = parseInt(number1);
    number2 = parseInt(number2);
    alert('os numero escolhidos foram '+number1+ ' e ' +number2);
    var add = number1 + number2;
    alert ('o resultado foi ' +add);

};

