const fs = require('fs');

// 1º método: Callbacks

// console.log('ANTES da função de ler o arquivo...');

// // Função assíncrona (ler um arquivo leva um tempo)
// fs.readFile('programacaoAssincrona/arquivo.txt', (erro, conteudoDoArquivo ) => {
//     if (erro) {
//         console.log('Erro ao ler o arquivo: ', erro);
//     } else {
//         console.log('Conteúdo do arquivo:\n' + conteudoDoArquivo.toString());
//     }
// })

// console.log('DEPOIS da função de ler o arquivo...');

// Exemplo 2: setTimeout() (função que cria um timer)

// console.log('ANTES do setTimeout()...');

// setTimeout(() => {
//     console.log('Isso aqui vai ser executado após 2 segundos!');
// }, 2 * 1000);

// console.log('DEPOIS do setTimeout()...');

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2º método: Promises

console.log('ANTES da função de ler o arquivo...');

const promessa = new Promise((resolve, reject) => {
    fs.readFile('programacaoAssincrona/arquivo.txt', (erro, conteudoDoArquivo ) => {
        if (erro) {
            reject('Erro ao ler o arquivo: ', erro);
        } else {
            resolve('Conteúdo do arquivo:\n' + conteudoDoArquivo.toString()); // ou String(conteudoDoArquivo);
        }
    });
});