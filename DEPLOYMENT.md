# Guia de Deploy - Marthec Website

## Deploy no Netlify

### Pré-requisitos
- Conta no Netlify
- Repositório Git (GitHub, GitLab ou Bitbucket)
- Credenciais do Supabase configuradas

### Passo 1: Configurar Variáveis de Ambiente

Antes de fazer o deploy, configure as variáveis de ambiente no Netlify:

1. Acesse seu site no painel do Netlify
2. Vá para **Site Settings** → **Build & deploy** → **Environment**
3. Adicione as seguintes variáveis:

```
NEXT_PUBLIC_SUPABASE_URL = [sua_url_supabase]
NEXT_PUBLIC_SUPABASE_ANON_KEY = [sua_chave_anonima_supabase]
NEXT_PUBLIC_WHATSAPP_NUMBER = 5511999999999
```

### Passo 2: Configurar Build Settings

O arquivo `netlify.toml` já está configurado com os settings corretos:
- **Build command**: `npm run build`
- **Publish directory**: `.next`

### Passo 3: Deploy

#### Opção A: Conectar Repositório Git (Recomendado)

1. No Netlify, clique em **New site from Git**
2. Selecione seu provedor de Git
3. Autorize o Netlify e selecione seu repositório
4. Configure as variáveis de ambiente (Passo 1)
5. Clique em **Deploy**

#### Opção B: Deploy Manual

```bash
# Instale o Netlify CLI
npm install -g netlify-cli

# Faça login
netlify login

# Deploy
netlify deploy --prod
```

## Configuração do Supabase

### Criar Tabela de Orçamentos

A tabela `marthec_orcamento` já foi criada com a migration. Se precisar recriar:

```sql
CREATE TABLE marthec_orcamento (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  telefone TEXT NOT NULL,
  empresa TEXT,
  tipo_projeto TEXT,
  descricao TEXT,
  criado_em TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE marthec_orcamento ENABLE ROW LEVEL SECURITY;

CREATE POLICY "marthec_orcamento_insert" ON marthec_orcamento FOR INSERT WITH CHECK (true);
CREATE POLICY "marthec_orcamento_select" ON marthec_orcamento FOR SELECT USING (true);
```

## Variáveis de Ambiente Necessárias

### NEXT_PUBLIC_SUPABASE_URL
- Obtém em: Supabase Dashboard → Settings → API
- Formato: `https://xxxx.supabase.co`

### NEXT_PUBLIC_SUPABASE_ANON_KEY
- Obtém em: Supabase Dashboard → Settings → API
- A chave anônima (anon public key)

### NEXT_PUBLIC_WHATSAPP_NUMBER
- Número do WhatsApp sem caracteres especiais
- Formato: `5511999999999` (país + DDD + número)

## Troubleshooting

### Erro: "NEXT_PUBLIC_SUPABASE_URL is not defined"
- Verifique se as variáveis foram adicionadas corretamente no Netlify
- Redeploy após adicionar as variáveis

### Erro: "Failed to insert into marthec_orcamento"
- Verifique se a tabela foi criada no Supabase
- Confirme que o RLS está bem configurado

### Botão WhatsApp não funciona
- Verifique se o número foi configurado corretamente (sem caracteres especiais)
- Teste o link: `https://wa.me/[NUMERO]`

## Próximos Passos

1. Atualizar o número de WhatsApp na variável `NEXT_PUBLIC_WHATSAPP_NUMBER`
2. Testar o formulário de orçamento
3. Configurar notificações de email para novos orçamentos (opcional)
4. Monitorar performance no Netlify Analytics

## Suporte

Para mais informações:
- [Documentação Netlify](https://docs.netlify.com)
- [Documentação Supabase](https://supabase.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment/netlify)
