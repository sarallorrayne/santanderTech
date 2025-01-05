import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Pega no documento um id root
root.render( // Renderiza dentro do root
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// App: primeiro componente da aplicação (aplicação inteira)
// StrictMode: modo estrito, que ajuda a identificar problemas na aplicação
// StricMode detecta possíveis más práticas dentro do código React. Caso encontre, ele exibe um warning no console do navegador.