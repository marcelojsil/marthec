# 🎨 Guia Visual - Estrutura do Site Marthec

## 📱 Fluxo de Página

```
┌─────────────────────────────────────────────────────────────┐
│                     HEADER (Fixo)                           │
│  [Logo] [Serviços] [Portfólio] [Diferenciais] [Planos] ... │
│                    [Contato]                                 │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│         MODAL DE OFERTA (Abre automaticamente)              │
│                                                              │
│  ⚡ Oferta Especial                                         │
│  20% de Desconto                                            │
│  Em sua primeira solução digital                            │
│  ✓ Válido para próximos 10 clientes                        │
│                                                              │
│  [Aproveitar Oferta]                                        │
│                                                              │
│  (Clique fora para fechar)                                  │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                    HERO SECTION                              │
│  Transformamos Ideias em Soluções Digitais                  │
│  [Descubra Mais] [Ver Portfólio]                           │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                   SERVICES SECTION                           │
│  [Website] [Sistema Web] [SaaS] [Integrações]              │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                  PORTFOLIO SECTION                           │
│  [Projeto 1] [Projeto 2] [Projeto 3] [Projeto 4]           │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                 DIFFERENTIALS SECTION                        │
│  [Card 1] [Card 2] [Card 3] [Card 4] [Card 5]              │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                    ABOUT SECTION                             │
│  Sobre a Marthec                                            │
│  Texto + Imagem com efeitos abstratos                       │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌──────────────────── PRICING SECTION ────────────────────────┐
│             Soluções para Cada Necessidade                  │
│                                                              │
│ ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐│
│ │   Iniciante     │  │  Profissional   │  │   Enterprise    ││
│ │  R$ 3.500       │  │  R$ 8.500 ⭐    │  │  Customizado    ││
│ │                 │  │  MAIS POPULAR   │  │                 ││
│ │ • Website       │  │ • Tudo do Init. │  │ • Tudo do Prof. ││
│ │ • Design        │  │ • Sistema CRM   │  │ • API Custom    ││
│ │ • SEO           │  │ • Dashboard     │  │ • Integrações   ││
│ │ • Email         │  │ • Forms avans.  │  │ • Suporte 24/7  ││
│ │ • Analytics     │  │ • Suporte 6m    │  │ • Consultoria   ││
│ │ • Suporte 3m    │  │ • Treinamento   │  │ • Manutenção    ││
│ │                 │  │                 │  │                 ││
│ │[Solicitar]      │  │[Solicitar] ✓    │  │[Solicitar]      ││
│ └─────────────────┘  │                 │  │                 ││
│                      │ [Solicitar] ✓   │  │                 ││
│                      └─────────────────┘  └─────────────────┘│
│                                                              │
│  Não encontrou o que procura?                               │
│  [Conversar com Especialista] [Falar no WhatsApp]          │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│               CTA SECTION (Contato)                          │
│  Pronto para transformar seu negócio?                       │
│  [Fale Conosco] [WhatsApp]                                 │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                     FOOTER                                   │
│  Links | Redes Sociais | Serviços | Contato               │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│              BOTÕES FLUTUANTES (Sempre Visíveis)           │
│                    💬 WhatsApp                              │
│              (após 300px scroll)                             │
│                   ⬆️ Voltar ao Topo                         │
└─────────────────────────────────────────────────────────────┘
```

## 🔄 Fluxo de Interação - Modal de Orçamento

```
Usuario clica em "Fale Conosco" ou "Solicitar Orçamento"
                       ↓
         Modal abre com animação suave
                       ↓
┌──────────────────────────────────────┐
│    FORMULÁRIO DE ORÇAMENTO           │
│                                      │
│ Nome Completo: [_________________]  │
│ Email: [_________________________]  │
│ Telefone: [______________________]  │
│ Empresa: [_______________________]  │
│ Tipo de Projeto:                    │
│   ○ Website                          │
│   ○ Sistema Web                      │
│   ○ SaaS                             │
│   ○ Integração                       │
│   ○ Outro                            │
│ Descrição do Projeto:               │
│ [_______________________________]   │
│ [_______________________________]   │
│                                      │
│ [SOLICITAR ORÇAMENTO]                │
└──────────────────────────────────────┘
                       ↓
         Dados enviados para Supabase
                       ↓
          Mensagem de Sucesso com
          checkmark animado
                       ↓
       (2 segundos) Modal fecha
                       ↓
           Tabela marthec_orcamento
           agora contém novo registro
```

## 🎯 Integração Supabase

```
┌─────────────────────────────────────────────────────────────┐
│                    SUPABASE                                  │
│                                                              │
│  Tabela: marthec_orcamento                                 │
│  ┌─────────────────────────────────────────────────┐       │
│  │ id | nome | email | telefone | empresa | ...    │       │
│  ├─────────────────────────────────────────────────┤       │
│  │ 1  | João | j@... | 11 98... | Corp  | ...     │       │
│  │ 2  | Maria| m@... | 21 99... | Tech  | ...     │       │
│  │ 3  | Pedro| p@... | 85 97... | Dev   | ...     │       │
│  └─────────────────────────────────────────────────┘       │
│                                                              │
│  RLS Policies:                                             │
│  ✓ INSERT: Permite inserção pública                        │
│  ✓ SELECT: Permite leitura pública                         │
│  ✗ UPDATE: Desativado                                      │
│  ✗ DELETE: Desativado                                      │
└─────────────────────────────────────────────────────────────┘
```

## 📱 Responsividade

### Mobile (< 768px)
```
┌───────────┐
│ [≡] Marthec
├───────────┤
│  H E R O  │
│           │
├───────────┤
│ SERVIÇOS  │
│  [S1]     │
│  [S2]     │
│  [S3]     │
│  [S4]     │
├───────────┤
│ PORTFOLIO │
│  [P1]     │
│  [P2]     │
│  [P3]     │
│  [P4]     │
├───────────┤
│  PLANOS   │
│  [Plan 1] │
│  [Plan 2] │
│  [Plan 3] │
├───────────┤
│ [💬]  ⬆️   │ <- Botões Flutuantes
└───────────┘
```

### Tablet (768px - 1024px)
```
┌────────────────────────────┐
│ Marthec [Nav] [Nav] [Nav]  │
├────────────────────────────┤
│        H E R O HERO       │
├────────────────────────────┤
│  [S1] [S2]  │  [S3] [S4]   │
├────────────────────────────┤
│  [P1] [P2]  │  [P3] [P4]   │
├────────────────────────────┤
│ [Plan 1] [Plan 2] [Plan 3] │
├────────────────────────────┤
│  [💬]  ⬆️   │
└────────────────────────────┘
```

### Desktop (> 1024px)
```
┌──────────────────────────────────────────────────────────┐
│ Marthec  [Serviços] [Portfolio] [Planos] [Contato] [∨]  │
├──────────────────────────────────────────────────────────┤
│                    H E R O SECTION                       │
│                                                          │
├──────────────────────────────────────────────────────────┤
│  [S1]  [S2]  [S3]  [S4]  [S5]  [S6]                     │
├──────────────────────────────────────────────────────────┤
│  [P1]  [P2]  [P3]  [P4]                                 │
├──────────────────────────────────────────────────────────┤
│ [Plan 1] [Plan 2 ⭐] [Plan 3]                           │
├──────────────────────────────────────────────────────────┤
│                  CTA SECTION                             │
│              [💬] Botões Flutuantes  [⬆️]               │
└──────────────────────────────────────────────────────────┘
```

## 🎨 Paleta de Cores

```
┌─────────────────────────────────────────┐
│ PRIMARY: #e95d2c (Laranja Vibrante)    │
│ Usado em: CTAs, hover states           │
│                                         │
│ BACKGROUND: #1a2730 (Azul Escuro)     │
│ Usado em: Fundo principal              │
│                                         │
│ CARD: #45586c (Azul Médio)            │
│ Usado em: Cards, containers            │
│                                         │
│ ACCENT: #f8cc53 (Amarelo Brilhante)   │
│ Usado em: Destaque, plano popular      │
│                                         │
│ TEXT: #ffffff (Branco)                 │
│ Usado em: Texto principal              │
│                                         │
│ MUTED: #424048 (Cinza)                │
│ Usado em: Texto secundário             │
└─────────────────────────────────────────┘
```

## 🚀 Fluxo de Deploy

```
Código Local
    ↓
┌─────────────────┐
│  npm run build  │
└─────────────────┘
    ↓
Push para GitHub
    ↓
Netlify detecta push
    ↓
┌──────────────────────────────┐
│ build: npm run build          │
│ publish: .next                │
│ env:                          │
│  - SUPABASE_URL               │
│  - SUPABASE_ANON_KEY          │
│  - WHATSAPP_NUMBER            │
└──────────────────────────────┘
    ↓
Deploy automático
    ↓
Site ao vivo em: https://seu-site.netlify.app
```

## 📊 Estrutura de Pastas

```
marthec-website/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx          ← 📌 Integra todos os componentes
│   └── globals.css
│
├── components/
│   ├── sections/
│   │   ├── header.tsx
│   │   ├── hero.tsx
│   │   ├── services.tsx
│   │   ├── portfolio.tsx
│   │   ├── differentials.tsx
│   │   ├── about.tsx
│   │   ├── pricing.tsx        ← ✨ NOVO
│   │   ├── cta.tsx
│   │   └── footer.tsx
│   │
│   ├── modals/
│   │   ├── offer-modal.tsx    ← ✨ NOVO
│   │   └── budget-modal.tsx   ← ✨ NOVO
│   │
│   ├── floating-buttons.tsx   ← ✨ NOVO
│   └── ui/
│       └── [componentes shadcn]
│
├── lib/
│   └── supabase/
│       ├── client.ts
│       └── server.ts
│
├── scripts/
│   └── 001_create_marthec_orcamento.sql
│
├── public/
│   └── [imagens e assets]
│
├── netlify.toml              ← ✨ NOVO
├── .env.example              ← ✨ NOVO
│
└── Documentação:
    ├── README_PT.md          ← ✨ NOVO (Quick Start)
    ├── SETUP.md              ← ✨ NOVO (Detalhado)
    ├── DEPLOYMENT.md         ← ✨ NOVO (Netlify)
    ├── CHECKLIST.md          ← ✨ NOVO
    ├── IMPLEMENTACOES.md     ← ✨ NOVO
    └── VISUAL_GUIDE.md       ← ✨ NOVO (este arquivo)
```

---

**Legenda**:
- ✨ = Arquivo novo criado nesta implementação
- 📌 = Arquivo principal/central
- 💬 = Elemento interativo
- ⭐ = Destaque/Popular
- ✓ = Completo/Funcionando

---

Visualize este guia enquanto navega pelo código para melhor compreensão!
