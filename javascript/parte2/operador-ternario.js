// * Operador Ternário

const idade = 17;

// idade >= 18 ? console.log('Maior de idade') : console.log('Menor de idade');

// const mensagem = idade >= 18 ? 'Maior de idade' : idade >= 16 ? 'Pode votar' : 'Menor de idade'; - NÃO RECOMENDADO

const mensagem = idade >= 18 ? 'Maior de idade' : 'Menor de idade';

console.log(mensagem);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Truthy e Falsy

// Truthy: Valores que são considerados verdadeiros em JavaScript
// Valores que não são 0, objetos e listas vazias ou strings preenchidas são considerados verdadeiros
// 0, string vazias, null, undefined, NaN e false são considerados falsos
if ({}) {

}