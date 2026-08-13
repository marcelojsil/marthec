-- Criação da tabela marthec_orcamento
CREATE TABLE IF NOT EXISTS public.marthec_orcamento (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  telefone TEXT,
  empresa TEXT,
  plano TEXT NOT NULL,
  mensagem TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar RLS
ALTER TABLE public.marthec_orcamento ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserção anônima (formulário público)
CREATE POLICY "allow_anonymous_insert" ON public.marthec_orcamento 
  FOR INSERT 
  WITH CHECK (true);

-- Política para leitura apenas por usuários autenticados (admin)
CREATE POLICY "allow_authenticated_select" ON public.marthec_orcamento 
  FOR SELECT 
  USING (auth.role() = 'authenticated');
