// Selecionar elementos HTML da nossa página utilizando o document

// 1. Pelo nome da tag
const todosH1s = document.getElementsByTagName('h1');
const todosPs = document.getElementsByTagName('p');

console.log(todosH1s[0]);
console.log(todosPs);

// 2. Pelo nome da classe
const todosClasseParagrafo = document.getElementsByClassName('paragrafo');
console.log(todosClasseParagrafo);

// 3. Pelo nome do name
const emailInput = document.getElementsByName('email');
console.log(emailInput);

// 4. Pelo id da tag
const gatinhoImg = document.getElementById('gatinho');
console.log(gatinhoImg);

// 5. Query Selector (mais recente e mais específico)
const imagem = document.querySelector('body > img#gatinho');
console.log(imagem);

const paragrafos = document.querySelector('p'); // Retorna apenas a primeira ocorrência
console.log(paragrafos);                        // Por padrão, retorna o primeiro elemento

// 6. Query Selector All
const todosParagrafos = document.querySelectorAll('p'); // Retorna todos os elementos
console.log(todosParagrafos);

console.clear();

// ----------------------------------------------------------------------------------------------------

// Acessando o conteúdo HTML das tags

const primeiroParagrafo = document.querySelector('p.paragrafo');
console.log(primeiroParagrafo);

// Imprimir o conteúdo do parágrafo
console.log(`textContent:\n    ${primeiroParagrafo.textContent}`); // Pega todo o texto ignorando as tags HTML e tudo que não seja um texto

console.log(`innerHTML:\n    ${primeiroParagrafo.innerHTML}`); // Pega todo o texto e as tags HTML dentro do elemento

// Alterando o conteúdo
primeiroParagrafo.textContent = '<strong>Novo texto<\strong>'; // Não interpreta as tags HTML
console.log(primeiroParagrafo.textContent);

primeiroParagrafo.innerHTML = '<strong>Novo texto<\strong>'; // Interpreta as tags HTML
console.log(primeiroParagrafo.innerHTML);

console.clear();

// .value - apenas em campos de inputs ou textarea, campos digitáveis
emailInput[0].value = 'saralvsouza@gmail.com';

// Adicionar elementos na página web
// Criando elementos na página HTML de forma dinâmica

const listaUl = document.querySelector('ul#lista');
const listaLis = document.querySelectorAll('ul > li');


const novaTagLi = document.createElement('li'); // Criando uma tag li vazia

novaTagLi.textContent = 'Segundo item'; // Adicionando texto à tag li ao final da lista

// listaUl.appendChild(novaTagLi); // Adicionando a tag li à lista ul ao final da lista

console.log(novaTagLi);

// Adicionando um elemento antes de outro - em uma ordem específica

// Insira o novo elemento antes de tal elemento
listaUl.insertBefore(novaTagLi, listaLis[1]) // Node: onde quer adicionar

// Removendo elementos da página web de forma dinâmica
listaUl.removeChild(novaTagLi); // Acessa o elemento filho dentro ed um elemento pai