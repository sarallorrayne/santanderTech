const prompt = require('readline-sync');

const idade = Number(prompt.question("Qual e a sua idade? "));

// const maiorDeIdade = idade >= 18;
// console.log(`O usuário é maior de idade? ${maiorDeIdade}`);

console.log(`O usuário é maior de idade? ${idade >= 18}`);

// Estrutura Condicional: if/else

// if (maiorDeIdade) {
//     console.log("Você pode dirigir!");
// } else {
//     console.log("Você não pode dirigir!");
// }

if (idade >= 18) {
    console.log("Você pode dirigir!");
} else {
    console.log("Você não pode dirigir!");
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Média >= 7: Aprovado
// Média < 7 e Média >= 5: Prova final
// Média < 5: Reprovado


const mediaDoAluno = 4;

if (mediaDoAluno >= 7) {
    console.log(`Média: ${mediaDoAluno}`);
    console.log("O aluno foi aprovado!");
} else if (mediaDoAluno >= 5) {
    console.log(`Média: ${mediaDoAluno}`);
    console.log("O aluno está de prova final!");
} else {
    console.log(`Média: ${mediaDoAluno}`);
    console.log("O aluno foi reprovado!");
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Para dirigir
// 1. Precisa ser maior de idade
// 2. Precisa ter carteira de motorista

const idadePessoa = 18;
const temCNH = true;

if (idadePessoa >= 18 && temCNH) {
    console.log("Você pode dirigir!");
} else {
    console.log("Você não pode dirigir!");
}