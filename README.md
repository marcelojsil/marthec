### INÍCIO DE PROJETO

# npx create-react-app nome-do-site

excluir itens desnecessários
1. App.test.js
2. logo.svg
3. reportWebVitals.js
4. setupTests.js
5. favicon.ico
6. logo192.png
7. logo512.png

editar o public/index.html
1. Apagar 
    '<noscript>You need to enable JavaScript to run this app.</noscript>'
    '<link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />'
    '<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />'
    '<meta name="theme-color" content="#000000" />'
    
2. Editar
    '<title></title>'
    '<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />'
    '<html lang="en">'

editar o App.js
1. Apagar
    'import logo from './logo.svg';'
    'todo conteudo dentro da DIV App'

editar index.js
1. Apagar
    todo conteúdo de ReportVitals