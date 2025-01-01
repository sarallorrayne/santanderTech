// const fs = require('fs');
// const { type } = require('os');

// fs.readFile('eslint.config.mjs', 'utf-8', (erro, dados) => {
//     if (erro) {
//         console.log('Erro ao ler o arquivo:', erro);
//     } else {
//         // dados: Buffer com dados do arquivo json
//         // const dadosObjeto = JSON.parse(String(dados)); -- Converte o Buffer em um objeto do JS
//         console.log('Conteúdo do arquivo:', dados);
//         console.log(typeof dados);
//     }
// });

// Convertendo JSON, em formato de string para um objeto
const jsonString = '{"nome": "Sara", "idade": 23}';

console.log(JSON.parse(jsonString)); // { nome: 'Sara', idade: 30 }


console.clear();

// Convertendo um objeto do JS, em um JSON (string)
const pessoa = {
    nome: 'Sara',
    idade: 23
};

console.log(JSON.stringify(pessoa)); // {"nome":"Sara","idade":23}