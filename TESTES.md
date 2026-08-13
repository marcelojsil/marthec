# 🧪 Guia de Testes - Marthec Website

## 📋 Testes Funcionais

### 1. Modal de Oferta
**Passo**: Carregar a página (http://localhost:3000)

**Esperado**:
- [ ] Modal abre automaticamente com animação
- [ ] Apresenta oferta de "20% de Desconto"
- [ ] Botão "Aproveitar Oferta" funciona
- [ ] Botão X no canto superior direito funciona
- [ ] Clicar fora da modal a fecha

**Debug**:
```
console.log("[v0] Modal aberto:", isOpen)
```

---

### 2. Seção de Planos
**Passo**: Scroll até seção "NOSSOS PLANOS"

**Esperado**:
- [ ] 3 cards aparecem com animação ao scroll
- [ ] Plano "Profissional" está destacado (maior, with ring)
- [ ] Botão "MAIS POPULAR" aparece no plano Profissional
- [ ] Todos os features aparecem com ícones ✓
- [ ] Cards têm hover com elevação (y: -8)
- [ ] Botões "Solicitar Orçamento" abrem modal

**Debug**:
```javascript
// Simular scroll
window.scrollBy(0, document.getElementById('planos').offsetTop)
```

---

### 3. Modal de Orçamento
**Passo**: Clicar em "Solicitar Orçamento" ou "Fale Conosco"

**Esperado**:
- [ ] Modal abre com animação suave
- [ ] Formulário possui 6 campos
- [ ] Validação: campos obrigatórios marcados com *
- [ ] Seletor de tipo de projeto funciona
- [ ] Botão submit está ativo

**Teste de Envio**:
```javascript
// Preencher formulário
nome: "João Silva"
email: "joao@example.com"
telefone: "(11) 98765-4321"
empresa: "Tech Corp"
tipo_projeto: "website"
descricao: "Site moderno com e-commerce"

// Clicar "Solicitar Orçamento"
// Esperado: Loading spinner por 1-2 segundos
// Esperado: Mensagem de sucesso
// Esperado: Modal fecha automaticamente
```

**Verificar Supabase**:
1. Acesse Supabase Dashboard
2. Vá para SQL Editor
3. Execute: `SELECT * FROM marthec_orcamento ORDER BY criado_em DESC LIMIT 1;`
4. Verifique se os dados foram salvos corretamente

---

### 4. Botões Flutuantes

#### 4.1 Botão WhatsApp
**Esperado**:
- [ ] Botão está sempre visível no canto inferior direito
- [ ] Ícone de mensagem (MessageCircle)
- [ ] Cor primária (#e95d2c)
- [ ] Hover: aumenta com scale(1.1)
- [ ] Clique abre WhatsApp corretamente

**Teste**:
```javascript
// Buscar botão
const whatsappBtn = document.querySelector('a[href*="wa.me"]')
console.log("[v0] WhatsApp URL:", whatsappBtn.href)
// Deve conter seu número de telefone
```

#### 4.2 Botão Voltar ao Topo
**Esperado**:
- [ ] Não aparece no carregamento inicial
- [ ] Aparece após 300px de scroll
- [ ] Ícone chevron up (ChevronUp)
- [ ] Cor secundária (#45586c)
- [ ] Clique faz scroll smooth até o topo

**Teste**:
```javascript
// Scroll 400px
window.scrollBy(0, 400)
// Botão deve aparecer
setTimeout(() => {
  const topBtn = document.querySelector('button:has(svg[data-icon="chevron-up"])')
  console.log("[v0] Botão visível:", topBtn.style.opacity)
}, 100)
```

---

### 5. Header/Navegação
**Esperado**:
- [ ] Logo "Marthec" no topo esquerdo
- [ ] Links de navegação: Serviços, Portfólio, Diferenciais, Sobre, **Planos**, Contato
- [ ] Links fazem scroll até seções corretas
- [ ] Menu mobile aparece em <768px
- [ ] Background muda com scroll (blur + shadow)

**Teste de Links**:
```javascript
// Clicar em cada link
const links = document.querySelectorAll('nav a')
links.forEach(link => {
  link.click()
  console.log("[v0] Navegando para:", link.getAttribute('href'))
})
```

---

## 🔄 Testes de Validação de Formulário

### Campo Obrigatório: Nome
**Ação**: Deixar vazio e clicar submit
**Esperado**: Erro "Preencha este campo"

### Campo Obrigatório: Email
**Ação**: Digitar "texto_invalido" (sem @)
**Esperado**: Erro de validação de email

### Campo Obrigatório: Telefone
**Ação**: Deixar vazio
**Esperado**: Erro "Preencha este campo"

### Campo Obrigatório: Tipo de Projeto
**Ação**: Não selecionar nada
**Esperado**: Erro "Selecione uma opção"

### Campo Obrigatório: Descrição
**Ação**: Deixar vazio
**Esperado**: Erro "Preencha este campo"

---

## 📊 Testes de Performance

### Build Size
```bash
npm run build
# Verificar tamanho em .next
du -sh .next
```

**Esperado**: < 100MB

### Loading Speed
```javascript
// Lighthouse simulation
const start = performance.now()
// Carregar página
const end = performance.now()
console.log(`[v0] Load time: ${end - start}ms`)
```

**Esperado**: < 3000ms

### Render Performance
```javascript
// Medir re-renders
import { Profiler } from 'react'
// Ver em React DevTools
```

---

## 🎨 Testes de Responsividade

### Mobile (iPhone SE - 375x667)
```bash
# DevTools: Cmd+Shift+M
# Selecionar "iPhone SE"
```

**Checklist**:
- [ ] Texto legível sem zoom
- [ ] Botões tocáveis (min 44x44px)
- [ ] Menu hambúrguer funciona
- [ ] Modal responsivo
- [ ] Formulário cabe na tela
- [ ] Botões flutuantes visíveis

### Tablet (iPad - 768x1024)
```bash
# DevTools: Selecionar "iPad"
```

**Checklist**:
- [ ] Layout 2 colunas funciona
- [ ] Cards dispostos corretamente
- [ ] Navegação adaptada
- [ ] Modal centralizada

### Desktop (1920x1080)
```bash
# DevTools: Selecionar "1920x1080"
```

**Checklist**:
- [ ] Layout 3 colunas planos
- [ ] Hover effects funcionam
- [ ] Animações suaves

---

## 🌐 Testes de Navegadores

### Chrome/Edge
```bash
npm run dev
# Abrir em Chrome
```
- [ ] Todos elementos carregam
- [ ] Animações suaves
- [ ] Console sem erros

### Firefox
- [ ] Verifica compatibilidade CSS
- [ ] Testa box-shadow, gradients
- [ ] Testa animations

### Safari
- [ ] Testa webkit prefixes
- [ ] Testa animações Framer Motion
- [ ] Testa touch events

---

## 🔐 Testes de Segurança

### XSS (Cross-Site Scripting)
**Teste**: Digitar `<script>alert('xss')</script>` em campo de texto
**Esperado**: Texto é escapado, não executa script

### Validação Backend
```javascript
// Tentar enviar via fetch sem campos obrigatórios
fetch('/api/orcamento', {
  method: 'POST',
  body: JSON.stringify({ nome: '' })
})
// Esperado: Erro 400 Bad Request
```

### Supabase RLS
```sql
-- Tentar inserir direto no Supabase (sem user_id)
INSERT INTO marthec_orcamento (nome, email)
VALUES ('Test', 'test@test.com')
-- Esperado: Funciona (sem RLS de auth)
```

---

## 📱 Testes de Integração Supabase

### Conexão
```javascript
import { createClient } from '@/lib/supabase/client'
const supabase = createClient()
console.log("[v0] Supabase URL:", supabase.supabaseUrl)
```

**Esperado**: URL de Supabase válida

### Inserção de Dados
```javascript
const { data, error } = await supabase
  .from('marthec_orcamento')
  .insert([{
    nome: 'Teste',
    email: 'teste@test.com',
    telefone: '11999999999',
    empresa: 'Test Corp',
    tipo_projeto: 'website',
    descricao: 'Test description'
  }])

console.log("[v0] Insert result:", { data, error })
```

**Esperado**: `error === null` e `data` contém registro inserido

### Leitura de Dados
```javascript
const { data, error } = await supabase
  .from('marthec_orcamento')
  .select('*')
  .limit(10)

console.log("[v0] Total registros:", data?.length)
```

---

## 🔗 Testes de Links Externos

### WhatsApp
**URL**: `https://wa.me/seu_numero`
**Esperado**: Abre conversão no WhatsApp

### Email
**Link**: `mailto:contato@marthec.com.br`
**Esperado**: Abre cliente de email

### Redes Sociais
**Checklist**:
- [ ] Instagram funciona
- [ ] LinkedIn funciona
- [ ] GitHub funciona
- [ ] Twitter funciona

---

## 📊 Checklist de Produção

Antes de fazer deploy, execute todos os testes:

**Funcionalidade**:
- [ ] Modal oferta funciona
- [ ] Modal orçamento funciona
- [ ] Botões WhatsApp funcionam
- [ ] Botão top funciona
- [ ] Formulário valida
- [ ] Dados salvam no Supabase

**Performance**:
- [ ] Lighthouse > 90
- [ ] Load time < 3s
- [ ] Build sem erros

**Segurança**:
- [ ] XSS prevenido
- [ ] CSRF tokens configurados
- [ ] Headers de segurança presentes

**Responsividade**:
- [ ] Mobile ok
- [ ] Tablet ok
- [ ] Desktop ok

**Navegadores**:
- [ ] Chrome ok
- [ ] Firefox ok
- [ ] Safari ok

---

## 🐛 Resolução de Problemas

### Modal não abre
```javascript
// Verificar state
console.log("[v0] Modal state:", isBudgetModalOpen)

// Verificar onClick
const btn = document.querySelector('[data-test="open-budget"]')
btn.click()
```

### Formulário não envia
```javascript
// Verificar Supabase connection
const { data, error } = await supabase.from('marthec_orcamento').select('count')
console.log("[v0] DB connection:", error ? 'FAILED' : 'OK')

// Verificar env vars
console.log("[v0] Env:", {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL,
  key: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'SET' : 'MISSING'
})
```

### Botão WhatsApp não funciona
```javascript
// Verificar URL
const whatsappUrl = new URL(document.querySelector('a[href*="wa.me"]').href)
console.log("[v0] WhatsApp number:", whatsappUrl.pathname)
// Deve ser: /55 + seu número
```

---

## 📝 Template de Report de Teste

```markdown
# Teste: [Nome]
Data: [Data]
Navegador: [Chrome/Firefox/Safari]
Dispositivo: [Desktop/Mobile/Tablet]

## Resultado
- [ ] PASSOU
- [ ] FALHOU
- [ ] SKIPPED

## Erros/Observações
[Descrever qualquer problema]

## Screenshot
[Anexar screenshot se aplicável]
```

---

**Última atualização**: Março 2024
**Mantedor**: Marthec Team
