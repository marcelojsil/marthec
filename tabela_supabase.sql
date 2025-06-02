CREATE TABLE contatos (
  id BIGSERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  telefone VARCHAR(20) NOT NULL,
  email VARCHAR(255) NOT NULL,
  tipo_negocio VARCHAR(50),
  mensagem TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Criar índices para melhor performance
CREATE INDEX idx_contatos_created_at ON contatos(created_at);
CREATE INDEX idx_contatos_email ON contatos(email);

-- Habilitar RLS (Row Level Security)
ALTER TABLE contatos ENABLE ROW LEVEL SECURITY;

-- Criar política para permitir inserção de novos contatos
CREATE POLICY "Permitir inserção de contatos" ON contatos
  FOR INSERT WITH CHECK (true);

-- Criar política para permitir leitura apenas para usuários autenticados
CREATE POLICY "Permitir leitura para autenticados" ON contatos
  FOR SELECT USING (auth.role() = 'authenticated');