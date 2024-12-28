const prompt = require('readline-sync');

const idade = prompt.question("Qual é a sua idade? ");


console.log(`O usuário tem ${idade} anos`);

// Tanto o browser quanto o Node.js leem o valor como string pois você pode digitar tanto um número quanto uma palavra com número.
console.log(typeof idade);

// O programa não sabe o que o usuário vai digitar, então ele sempre lê como string.
// Conversão explícita de string para número
const idadeNumber = Number(idade);
console.log(idadeNumber);
console.log(typeof idadeNumber);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Conversão explícita

console.log(Number("X")); // Retorna NaN (Not a Number)

console.log(String("10"), typeof String("10")); // Retorna 10

console.log(Boolean(0), typeof Boolean(0)); // Retorna false - Apenas o número 0 retorna false
console.log(Boolean(1), typeof Boolean(1)); // Retorna true - Qualquer número diferente de 0 retorna true

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Coerção implícita

console.log("1" + 1); // Retorna 11 - O JavaScript tenta somar os dois valores, mas como um deles é uma string, ele concatena os valores
console.log("10" - 5); // Retorna 5 - O JavaScript tenta subtrair os dois valores, então ele converte a string para número e faz a subtração
console.log("10" / "2"); // Retorna 5 - O JavaScript converte as strings para números e faz a divisão
console.log("10" * "2"); // Retorna 20 - O JavaScript converte as strings para números e faz a multiplicação