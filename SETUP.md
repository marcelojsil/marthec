# Guia de Configuração - Marthec Website

## Requisitos

- Node.js 18+ e npm/pnpm
- Conta no Supabase
- Git (opcional, para versionamento)

## Instalação Local

### 1. Clonar ou Baixar o Projeto

```bash
# Se usar Git
git clone [seu-repositorio]
cd marthec-website

# Se baixou o ZIP, apenas extraia e navegue até a pasta
cd marthec-website
```

### 2. Instalar Dependências

```bash
npm install
# ou
pnpm install
```

### 3. Configurar Variáveis de Ambiente

Copie o arquivo `.env.example` para `.env.local`:

```bash
cp .env.example .env.local
```

Edite `.env.local` com suas credenciais do Supabase:

```env
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
```

### 4. Executar Servidor de Desenvolvimento

```bash
npm run dev
# ou
pnpm dev
```

A aplicação estará disponível em `http://localhost:3000`

## Estrutura do Projeto

```
marthec-website/
├── app/
│   ├── layout.tsx           # Layout raiz
│   ├── page.tsx            # Página principal
│   ├── globals.css         # Estilos globais
│   └── page.tsx            # Home page
├── components/
│   ├── sections/           # Seções da página
│   │   ├── header.tsx
│   │   ├── hero.tsx
│   │   ├── services.tsx
│   │   ├── portfolio.tsx
│   │   ├── differentials.tsx
│   │   ├── about.tsx
│   │   ├── pricing.tsx     # NOVO: Seção de planos
│   │   ├── cta.tsx
│   │   └── footer.tsx
│   ├── modals/             # NOVO: Modais
│   │   ├── offer-modal.tsx
│   │   └── budget-modal.tsx
│   ├── ui/                 # Componentes UI shadcn
│   └── floating-buttons.tsx # NOVO: Botões flutuantes
├── lib/
│   └── supabase/
│       ├── client.ts       # Cliente Supabase (browser)
│       └── server.ts       # Cliente Supabase (server)
├── scripts/
│   └── 001_create_marthec_orcamento.sql # Migration
├── public/                 # Assets estáticos
├── .env.example           # Exemplo de variáveis
├── netlify.toml           # Configuração Netlify
└── package.json
```

## Configuração do Supabase

### 1. Criar Projeto no Supabase

1. Acesse [supabase.com](https://supabase.com)
2. Crie uma nova conta ou faça login
3. Crie um novo projeto
4. Anote a URL e a chave anônima (em Settings → API)

### 2. Criar Tabela de Orçamentos

A tabela já foi criada pela migration. Para verificar ou recriar:

1. No painel do Supabase, vá para SQL Editor
2. Execute o SQL de `scripts/001_create_marthec_orcamento.sql`

### 3. Configurar Row Level Security (RLS)

O RLS já está configurado na migration para permitir inserções públicas.

## Componentes Novos

### Modal de Oferta (offer-modal.tsx)
- Abre automaticamente ao carregar o site
- Apresenta uma oferta especial de desconto
- Fecha ao clicar fora da modal

### Modal de Orçamento (budget-modal.tsx)
- Formulário para solicitar orçamento
- Salva dados no Supabase automaticamente
- Validação de campos obrigatórios
- Feedback visual de sucesso

### Seção de Planos (pricing.tsx)
- 3 planos predefinidos (Iniciante, Profissional, Enterprise)
- Design responsivo com destaque para plano popular
- CTA para abrir modal de orçamento

### Botões Flutuantes (floating-buttons.tsx)
- WhatsApp: sempre visível
- Voltar ao Topo: aparece após 300px de scroll
- Animações suaves com Framer Motion

## Personalização

### Alterar Número de WhatsApp

Edite em `.env.local`:
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=seu_numero
```

Formato: país (55) + DDD + número, sem caracteres especiais

### Personalizar Seção de Planos

Edite `components/sections/pricing.tsx`:
- Array `plans` contém os 3 planos
- Modifique nomes, descrições, preços e features

### Personalizar Modal de Oferta

Edite `components/modals/offer-modal.tsx`:
- Altere título, descrição e desconto
- Customize cores e animações

## Build para Produção

```bash
npm run build
npm run start
```

## Deployment

Veja o arquivo `DEPLOYMENT.md` para instruções completas de deploy no Netlify.

## Troubleshooting

### Erro de Supabase não conectado
- Verifique se `.env.local` está correto
- Confirme que o projeto Supabase está ativo
- Teste a conexão em `http://localhost:3000`

### Formulário não envia
- Verifique se a tabela `marthec_orcamento` existe
- Confirme as credenciais do Supabase
- Verifique o console do navegador para erros

### Botão WhatsApp não funciona
- Verifique o número formatado corretamente
- Teste o link: `https://wa.me/[seu_numero]`

## Próximos Passos

1. ✅ Instale as dependências
2. ✅ Configure o Supabase
3. ✅ Configure as variáveis de ambiente
4. ✅ Teste localmente
5. ✅ Deploy no Netlify

## Suporte

Para questões técnicas:
- [Next.js Docs](https://nextjs.org/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion)
