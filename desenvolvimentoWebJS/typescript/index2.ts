let numero = 20; // Inferencia de tipos

const pi = 3.1415; // Inferencia de tipos - Uma constante não pode ser alterada, o tipo dela éo próprio valor atribuido

let nome: string = 'Sara';

let correta: boolean = true;

let resultado = numero * pi;

// const nomeDoUsuario = prompt('Digite seu nome: ');

// console.log(nomeDoUsuario?.toUpperCase()); // O ponto de interrogação é para verificar se a variável é nula ou indefinida

// ------------------------------------------------------------------------------------------------------

// Tipagem de arrays

const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nomes: string[] = ['Sara', 'Maria', 'João', 'Pedro'];
const misto: (number | string | boolean)[] = [1, 'Sara', true, 3.14]; // Array de tipos mistos NÃO é indicado - evitar
const misto2: any[] = [1, 'Sara', true, 3.14]; // Array de tipos mistos NÃO é indicado - evitar

// ou:

const numeros2: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const idades: number[] = [];

idades.push(25);
idades.push(12);
idades.push(38);
idades.push(49);
idades.push(16);

const menorIdade = idades.filter(idade => idade < 18);
console.log(menorIdade);

// ------------------------------------------------------------------------------------------------------

// Tuplas

const pessoaTupla: [string, number] = ['Sara', 23];

// ------------------------------------------------------------------------------------------------------

// Object Types
// Existem duas formas de tipar objetos

// 1. Através de interfaces - Interface (associado com orientação a objetos)

// Tipo costumizado
interface Person {
    nome: string;               // Propriedade obrigatória
    idade: number;              // O valor é sempre um tipo
    profissao?: string;         // Propriedade opcional - ? após o nome da propriedade
    adulto: boolean;
}

const pessoa: Person = {
    nome: 'Sara',
    idade: 23,
    profissao: 'Desenvolvedora',
    adulto: true
}

const pessoa2: Person = {
    nome: 'Maria',
    idade: 17,
    adulto: false
}

pessoa2.profissao = 'Estudante';

console.log(pessoa);
console.log(pessoa2);

// 2. Através de tipos - Type

type Persona = {
    nome: string;
    idade: number;
    profissao?: string;
    adulto: boolean;
}

type MyString = string;

// Diferença entre interface e type:
// A interface está muito associada à orientação a objetos, enquanto o type é mais associado à tipagem de dados
// O type é uma coisa mais genérica, um tipo abstrato que criamos

// ------------------------------------------------------------------------------------------------------

// Union Types e Literal Types

// Type Aliases: apelido para um tipo
type Criterio = 'greater' | 'lower';

function chooseNumber(numero1: number, numero2: number, criteria?: Criterio): number { // tipagem de função
    switch(criteria) {
        case 'greater':
            return numero1 > numero2 ? numero1 : numero2;
            break;
        case 'lower':
            return numero1 < numero2 ? numero1 : numero2;
            break;
        default:
            const numeroAleatorio = Math.random();
        
            if (numeroAleatorio > 0.5) return numero1;
            return numero2;
    }

}

const numeroEscolhido = chooseNumber(10, 20, 'greater');

console.log(`numeroEscolhido: ${numeroEscolhido}`);

function somar(numero1: number, numero2: number): number {
    return numero1 + numero2;
}

// Quando a função retorna algo vazio, colocamos a tipagem void

// ------------------------------------------------------------------------------------------------------

// Utility Types: criar novos tipos a partir de outros tipos já existentes

// 1. Partial
type PersonPartial = Partial<Person>;  // Parcial de Person

const outraPessoa: PersonPartial = {
    // Todos os atributos se tornam opcionais
}

// 2. Required
type PersonRequired = Required<Person>; // Obrigatório de Person
    // Todos os atributos se tornam obrigatórios

// 3. Pick
type PersonPicked = Pick<Person, 'nome' | 'idade'>; // Pegar apenas o nome e a idade de Person

// 4. Omit
type PersonOmitted = Omit<Person, 'profissao'>; // Omitir a profissão de Person

// 5. Exclude
type CriterioExclude = Exclude<Criterio, 'greater'>; // Excluir o greater de Criterio

// 6. Record
type Pessoas = Record<string, Person> // tipo Nome = Record<chave, valor>

const pessoas: Pessoas = {
    '123.456.789-00': {
        nome: 'Sara',
        idade: 23,
        adulto: true
    },
    '123.456.789-01': {
        nome: 'Maria',
        idade: 17,
        adulto: false
    }
}