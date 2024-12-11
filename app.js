let nome = prompt("qual seu nome?");
alert("olá " + nome);


let dobro = prompt(nome +' por favor agora diga um numero' );
dobro = parseInt(dobro);
var add = dobro * 2;
alert('o dobro de ' +dobro+ ' é ' +add)

let notas = [];
for (let i = 1; i <= 3; i++) {
    notas.push(parseInt(prompt(`Digite a nota ${i}:`)));
}
let soma = notas.reduce((a, b) => a + b, 0);
alert(`A soma das notas foi ${soma}`);
alert(`A média foi ${soma / notas.length}`);

let number1 =prompt('digite um valor inteiro');
let number2 =prompt('digite outro valor inteiro');
number1 = parseInt(number1);
number2 = parseInt(number2);
alert(number1 > number2 ? 'Número 1 é maior que o 2' : number2 > number1 ? 'Número 2 é maior que o 1' : 'Os números são iguais');

let multi = (parseInt(prompt("digite um valor para multiplacar por ele mesmo")));
let resultado = multi * multi ;
alert ('o resultado da multiplicação de ' + multi + ' por ele mesmo é igual a ' +resultado);






console.log("Olá, mundo!")