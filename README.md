npx create-next-app@latest projeto

- lembrando que no Next as opções se movem pelo cursor (setas)

Would you like to use TypeScript?        No
Would you like to use ESLint?            Yes
Would you like to use Tailwind CSS?      No
Would you like to use `src/` directory?  Yes
Would you like to use App Router?        Yes
Would you like to use import alias?      Yes

npm run dev

--------------------------------------------------------------------

Estrutura final do projeto

src/
├─ app/
│  ├─ layout.jsx     -- layout base de todo o projeto, onde fica o header e footer, como se fosse o app.jsx no react
│  ├─ page.jsx
│  ├─ globals.css
│  ├─ servicos/
│  │  └─ page.jsx
│  ├─ sobre/
│  │  └─ page.jsx
│  └─ contato/
│     └─ page.jsx
│
├─ components/
│  ├─ Header.jsx
│  ├─ Footer.jsx
│
└─ styles/
   ├─ arquivos.css  -- Todos os arquivos css (menos globals), estilizando de formas diferentes os mesmos componentes e/ou páginas
   
   

