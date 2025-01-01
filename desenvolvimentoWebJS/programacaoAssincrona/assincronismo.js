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

// console.log('ANTES da função de ler o arquivo...');

// const promessa = new Promise((resolve, reject) => {
//     fs.readFile('desenvolvimentoWebJS/programacaoAssincrona/arquivo.txt', (erro, conteudoDoArquivo ) => {
//         if (erro) {
//             reject(`Erro ao ler o arquivo:\n${erro}`);
//         } else {
//             resolve(`Conteúdo do arquivo:\n${conteudoDoArquivo.toString()}`); // ou String(conteudoDoArquivo);
//         }
//     });
// });

// // Foco:

// promessa.then((retornoDoResolveDaPromessa) => {
//     console.log(`Deu certo: ${retornoDoResolveDaPromessa}`);
// });

// promessa.catch((erro) => {
//     console.log(`Deu errado: ${erro}`);
// }).finally(() => {
//     console.log('Isso aqui será executado, independente do sucesso ou fracasso da promessa, no final dela.');
// });

function lerArquivoPromise() {
    return new Promise((resolve, reject) => {
        fs.readFile('desenvolvimentoWebJS/programacaoAssincrona/arquivo.txt', (erro, conteudoDoArquivo ) => {
            if (erro) {
                reject(`Erro ao ler o arquivo:\n${erro}`);
            } else {
                resolve(`Conteúdo do arquivo:\n${conteudoDoArquivo.toString()}`); // ou String(conteudoDoArquivo);
            }
        });
    });
}

// // Chamar a função que retorna a promessa
// Não é escalável: callback hell
// lerArquivoPromise()
//     .then((retornoDoResolveDaPromessa) => {
//         console.log(`Deu certo: ${retornoDoResolveDaPromessa}`);
//         
//         acaoAssincrona.then(() => {
//           oytraAcaoAssincrona.then(() => {});
//     })
//     .catch((erro) => {
//         console.log(`Deu errado: ${erro}`);
//     })
//     .finally(() => {
//         console.log('Isso aqui será executado, independente do sucesso ou fracasso da promessa, no final dela.');
//     });

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 3º método: Async/Await - mais recomendado

async function leituraDeDados() {
    console.log('Isso aqui é executado ANTES da promise ser resolvida.');
    try {
        const dadosDoArquivoLido = await lerArquivoPromise(); // Espera a promessa ser resolvida para avançar no código
        
        console.log(`${dadosDoArquivoLido}`);

        console.log('Isso aqui é executado DEPOIS da promise ser resolvida.');
    } catch (err) {
        console.log(`${err}`);
        console.log(`Isso aqui é executado DEPOIS da promise ser rejeitada (com erro`);
    } finally {
        console.log('Isso aqui é executado, independente do sucesso ou fracasso da promessa, no final dela. Dentro do finally.');
    }
}

leituraDeDados();