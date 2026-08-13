# 🚀 Marthec Website - Guia Rápido

## O que foi implementado

✅ **Seção de 3 Planos** - Iniciante, Profissional e Enterprise com preços customizáveis
✅ **Modal de Orçamento** - Formulário que salva no Supabase automaticamente
✅ **Modal de Oferta** - Abre ao carregar o site com oferta especial
✅ **Botões Flutuantes** - WhatsApp fixo + Voltar ao Topo
✅ **Integração Supabase** - Tabela marthec_orcamento pronta
✅ **Pronto para Netlify** - Arquivo netlify.toml configurado

## Início Rápido (5 minutos)

### 1️⃣ Instalar Dependências
```bash
npm install
```

### 2️⃣ Configurar Variáveis
Crie arquivo `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
```

### 3️⃣ Rodar Localmente
```bash
npm run dev
```
Acesse: http://localhost:3000

### 4️⃣ Deploy no Netlify
1. Faça push do código para GitHub
2. No Netlify: New site from Git
3. Configure variáveis em Site Settings → Environment
4. Deploy! 🎉

## Onde Estão os Novos Componentes

| Recurso | Arquivo |
|---------|---------|
| Seção de Planos | `components/sections/pricing.tsx` |
| Modal de Orçamento | `components/modals/budget-modal.tsx` |
| Modal de Oferta | `components/modals/offer-modal.tsx` |
| Botões Flutuantes | `components/floating-buttons.tsx` |
| Banco de Dados | `scripts/001_create_marthec_orcamento.sql` |
| Config Netlify | `netlify.toml` |

## Personalizar

### 📞 Mudar Número do WhatsApp
`.env.local`:
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=seu_numero_sem_caracteres_especiais
```

### 💰 Alterar Planos
`components/sections/pricing.tsx` - Edite o array `plans`:
```javascript
const plans = [
  {
    name: 'Seu Plano',
    price: 'R$ X.XXX',
    features: ['feature1', 'feature2']
  }
]
```

### 🎁 Customizar Oferta
`components/modals/offer-modal.tsx`:
- Altere "20% de Desconto"
- Customize cores, textos, animações

## Testes

```bash
# Build para produção
npm run build

# Testar build localmente
npm run start
```

## Troubleshooting

**❌ Erro: "NEXT_PUBLIC_SUPABASE_URL is not defined"**
- ✅ Verifique `.env.local`
- ✅ Reinicie o servidor (npm run dev)

**❌ Erro: "Failed to insert into marthec_orcamento"**
- ✅ Confirme que a tabela foi criada no Supabase
- ✅ Verifique as credenciais

**❌ Botão WhatsApp não abre**
- ✅ Teste: `https://wa.me/5511999999999` (seu número)
- ✅ Verifique formatação (sem caracteres especiais)

## Documentação Completa

- 📖 [SETUP.md](./SETUP.md) - Configuração detalhada
- 🚀 [DEPLOYMENT.md](./DEPLOYMENT.md) - Deploy no Netlify
- ✅ [CHECKLIST.md](./CHECKLIST.md) - Checklist de implementação

## Próximos Passos (Opcional)

1. **Adicionar Notificação por Email**
   - Integrar Resend ou SendGrid
   - Enviar confirmação ao usuário

2. **Analytics**
   - Acompanhar cliques em botões
   - Rastrear conversões

3. **Chat em Tempo Real**
   - Integrar chat para suporte

4. **Agendamento**
   - Adicionar calendário de reuniões

## Suporte

- 📚 [Next.js Docs](https://nextjs.org/docs)
- 📚 [Supabase Docs](https://supabase.com/docs)
- 📚 [Netlify Docs](https://docs.netlify.com)

---

**Status**: ✅ Pronto para Usar e Deploy

Alguma dúvida? Verifique os arquivos SETUP.md ou DEPLOYMENT.md para informações mais detalhadas!
