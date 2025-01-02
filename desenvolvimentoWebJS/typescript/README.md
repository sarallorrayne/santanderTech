# Configuração do TypeScript

1. Incializar um projeto Node.js;
    > npm init (-y)
2. Instalar o TypeScript;
  2.1 Instalação global;
    > Intalação na máquina toda
    `npm install -g typescript`
  2.2 Instalação local;
    > Instalação apenas dentro do projeto
    `npm install typescript -D`
3. Utilizar (rodar) o TypeScript instalado para transpilar o código;
    > Converter o código TS para JS
  3.1 `npx tsc index.ts`
4. Inicializar as configurações do TypeScript dentro do projeto;
  4.1 `npx tsc --init`

OBS.: Após inicializar as configurações do TypeScript não é necesário colocar o nome do arquivo (`npx tsc index.ts`) apenas `npx tsc`, pois todos os arquivos .ts irão ser compilados.