// Operações Booleanas: Comparações

const numero1 = 10;
const numero2 = 20;

console.log(numero1 == numero2);
console.log(numero1 === numero2);

console.log(numero1 == "10");
console.log(numero1 === "10"); // É mais recomendado usar o estritamente igual para evitar erros

console.log(numero1 != numero2);
console.log(numero1 !== numero2);
console.log(numero1 != "10");
console.log(numero1 !== "10");

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const idadePessoa1 = 16;
const idadePessoa2 = 20;

console.log(idadePessoa1 >= 18);
console.log(idadePessoa2 >= 18);
console.log(idadePessoa1 >= 18 && idadePessoa2 >= 18);
console.log(idadePessoa1 >= 18 || idadePessoa2 >= 18);

console.log(idadePessoa1 >= 18); // Retorna false: A pessoa1 NÃO é maior de idade
console.log(!(idadePessoa1 >= 18)); // Retorna true: A pessoa 1 !NÃO é maior de idade

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

console.log(!true); // Retorna false
console.log(!false); // Retorna true