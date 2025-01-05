// const button = document.querySelector('section button');

// // primeiro parametro é o evento que queremos ouvir
// // segundo parametro é a função que será executada
// button.addEventListener('click', (event) => {
//     alert('Você clicou no botão');
// })

const botaoAumentar = document.querySelector('#aumentar-botao');
const botaoDiminuir = document.querySelector('#diminuir-botao');

const contadorElemento = document.querySelector('#contador');

const input = document.querySelector('#input');

botaoAumentar.addEventListener('click', () => {
    const valorAtual = Number(contadorElemento.textContent);

    contadorElemento.textContent = valorAtual + 1;

    botaoAumentar.classList.add('btn');
    botaoDiminuir.classList.remove('btn');
});

botaoDiminuir.addEventListener('click', () => {
    const valorAtual = Number(contadorElemento.textContent);

    contadorElemento.textContent = valorAtual - 1;

    botaoDiminuir.classList.add('btn');
    botaoAumentar.classList.remove('btn');
});

input.addEventListener('input', () => {
    console.log(`${input.value}`);
});

// Adicionando estilos ao elemento contador

contadorElemento.style.color = '#C06C84';
contadorElemento.style.padding = '0 2rem';
contadorElemento.style.backgroundColor = '#bdc3c7';
contadorElemento.style.border = '2px solid #c471ed';
contadorElemento.style.width = '150px';

// Adicionando estilo mexendo nas classes dos elementos
// Manipulando classes

console.log(botaoAumentar.classList);

// botaoDiminuir.classList.add('btn');

// botaoAumentar.classList.remove('btn');

const themeButton = document.querySelector('#theme');

let darkTheme;

// Salvando o tema dark no localStorage
// Definindo uma função que será executada quando a página for carregada
window.onload = () => {
    const isDarkThemeStorage = localStorage.getItem('isDarkTheme');

    const darkTheme = isDarkThemeStorage === 'true';

    const body = document.querySelector('body');

    if (darkTheme) {
        body.style.backgroundColor = '#222';
        body.style.color = 'white';
    } else {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    }
}

themeButton.addEventListener('click', () => {
    darkTheme = !darkTheme;

    localStorage.setItem('isDarkTheme', darkTheme);

    const body = document.querySelector('body');

    if (darkTheme) {
        body.style.backgroundColor = '#222';
        body.style.color = 'white';
    } else {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    }
});