"use strict";
let numero = 20; // Inferencia de tipos
const pi = 3.1415; // Inferencia de tipos - Uma constante não pode ser alterada, o tipo dela éo próprio valor atribuido
let nome = 'Sara';
let correta = true;
let resultado = numero * pi;
// const nomeDoUsuario = prompt('Digite seu nome: ');
// console.log(nomeDoUsuario?.toUpperCase()); // O ponto de interrogação é para verificar se a variável é nula ou indefinida
// ------------------------------------------------------------------------------------------------------
// Tipagem de arrays
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nomes = ['Sara', 'Maria', 'João', 'Pedro'];
const misto = [1, 'Sara', true, 3.14]; // Array de tipos mistos NÃO é indicado - evitar
const misto2 = [1, 'Sara', true, 3.14]; // Array de tipos mistos NÃO é indicado - evitar
// ou:
const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const idades = [];
idades.push(25);
idades.push(12);
idades.push(38);
idades.push(49);
idades.push(16);
const menorIdade = idades.filter(idade => idade < 18);
console.log(menorIdade);
// ------------------------------------------------------------------------------------------------------
// Tuplas
const pessoaTupla = ['Sara', 23];
const pessoa = {
    nome: 'Sara',
    idade: 23,
    profissao: 'Desenvolvedora',
    adulto: true
};
const pessoa2 = {
    nome: 'Maria',
    idade: 17,
    adulto: false
};
pessoa2.profissao = 'Estudante';
console.log(pessoa);
console.log(pessoa2);
function chooseNumber(numero1, numero2, criteria) {
    switch (criteria) {
        case 'greater':
            return numero1 > numero2 ? numero1 : numero2;
            break;
        case 'lower':
            return numero1 < numero2 ? numero1 : numero2;
            break;
        default:
            const numeroAleatorio = Math.random();
            if (numeroAleatorio > 0.5)
                return numero1;
            return numero2;
    }
}
const numeroEscolhido = chooseNumber(10, 20, 'greater');
console.log(`numeroEscolhido: ${numeroEscolhido}`);
function somar(numero1, numero2) {
    return numero1 + numero2;
}
