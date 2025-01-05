// Aula POO

// Esse objeto é único, se quiser criar um objeto novo com a mesma estrutura, é necessário copiar e colar o objeto
// const pessoa = {
//     nome: 'Sara',
//     idade: 23,
//     ...
// }

// -----------------------------------------------------------------------------------------------------

// Interface: definição de tipos
// Importante pois fica mais claro em termos de contrução de código
interface IPessoa {
    nome: string;
    idade: number;
    genero: string;

    dormir: () => void;
    comer: () => void;
}

// Criar classes - classe: abstração
// Definindo a abstração de uma pessoa
class Pessoa implements IPessoa {
    // Atributos: características
    nome: string;
    idade: number;
    genero: string;
    private _cpf: string; // Private: Fora da classe, não consigo alterar nem visualizar o CPF, a nãp ser que tenha accessors

    // Métodos: ações (funções)

    // Método construtor: obrigatório
    constructor(nome: string, idade: number, genero: string, cpf: string) {
        this.nome = nome;
        this.idade = idade;
        this.genero = genero;
        this._cpf = cpf;
    }

    dormir() {
        console.log(`Dormindo... 😴`);
    }

    comer () {
        console.log(`Comendo... 🍔`);
    }

    // Accessors: métodos de acesso
    // Getter: obter
    get cpf(): string {
        return this._cpf;
    }
    
    // Setter: definir
    set cpf(newCpf: string) {
        if (newCpf.length !== 14) {
            throw new Error('CPF length is incorrect!')
        }
        this._cpf = newCpf;
    }
}

class Professor extends Pessoa { // implements IPessoa
    matricula: string;

    constructor (nome:string, idade: number, genero: string, cpf: string, matricula: string) {
        super(nome, idade, genero, cpf);
        this.matricula = matricula;
    }

    ensinar() {
        console.log(`Ensinando... 📚`);
    }
}

// Criando/Instanciando uma pessoa (indivíduo/objeto) à partir da definição da classe Pessoa
const pessoa1 = new Pessoa('Sara', 23, 'Feminino', '123.456.789-00');
const pessoa2 = new Pessoa('João', 23, 'Masculino', '123.456.789-01');

console.log(pessoa1);
console.log(pessoa1.nome);
console.log(pessoa1.idade);
console.log(pessoa1.genero);
console.log(pessoa1.cpf); // Acessando o CPF através do getter
console.log(pessoa1.dormir());

console.log(pessoa2);
console.log(pessoa2.nome);
console.log(pessoa2.idade);
console.log(pessoa2.genero);
console.log(pessoa2.cpf); // Acessando o CPF através do getter
console.log(pessoa2.comer());

pessoa1.cpf= '123.456.789-03'; // Não consigo alterar o CPF, pois é um atributo somente de leitura
console.log(pessoa1.cpf); // Acessando o CPF através do getter

// -----------------------------------------------------------------------------------------------------

// Interface de classes
// Como definir como é a interface?
// Utilizando no TypeScript a palavra reservada 'implements'
// Você diz que a classe implementa uma interface/contrato

// -----------------------------------------------------------------------------------------------------

// Pbjeto da Classe Professor
const professor = new Professor('Professor', 30, 'Masculino', '123.456.789-02', '123456');

console.log(professor);

professor.comer();
professor.ensinar();

// Polimorfismo: capacidade de um objeto poder ser referenciado de várias formas
console.log(pessoa1 instanceof Pessoa); // true
console.log(pessoa1 instanceof Professor); // false
console.log(professor instanceof Pessoa); // true
console.log(professor instanceof Professor); // true
