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

## =============
## CONFIGURAÇÕES
## =============

1. Google fonts e Ícones
    Adicionar em public/index.html o link da fonte desejada e a CDN dos ícones
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">
    EXEMPLO: <span className="material-symbols-outlined">home</span>


## =============
## DESCRÇÃO DE NECESSIDADES DOS COMPONENTES
## =============

# SECMAIN
A primeira área que o visitante verá, então ela deve ser impactante. Inclua:
    OK - Imagem ou vídeo de fundo: Algo que mostre seu trabalho ou o ambiente tecnológico. Pode ser uma animação    de código, pessoas trabalhando, ou imagens de sites desenvolvidos.
    OK - Título de impacto: Algo que descreva o que a empresa faz em poucas palavras. Exemplo: "Desenvolvemos   sites personalizados para seu negócio".
    OK - Subtítulo: Uma explicação breve, como "Crie uma presença digital incrível e aumente seu alcance com    nossos sites modernos e responsivos".
    - Call-to-Action (CTA): Botões como “Solicite um orçamento” ou “Veja nosso portfólio”.
    - Proposta de valor: Um pequeno texto com o diferencial da empresa, por exemplo: "Sites rápidos, responsivos    e focados em resultados."  
  






