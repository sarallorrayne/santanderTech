var nome = "Sara Souza";
var idade = 23;
var mesDeNascimento = "Dezembro";
var cidade = "Brasília";
var programadora = true;

var semConteudo;

console.log(nome, typeof nome);

console.log(idade, typeof idade);

console.log(mesDeNascimento, typeof mesDeNascimento);

console.log(cidade, typeof cidade);

console.log(programadora, typeof programadora);

console.log(semConteudo, typeof semConteudo);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

var curso = "Front-End em React", topico = "JavaScript Básico I";

console.log(curso, topico);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Não se utiliza mais variáveis com var, mas sim com let e const
// Escopo global geralmente é um problema, então é melhor utilizar let e const

let notaDoAluno = 10;
const mediaDoAluno = 8;

notaDoAluno = 9;
// mediaDoAluno = 7; // Não é possível reatribuir valor a uma constante

console.log(notaDoAluno);
console.log(mediaDoAluno);