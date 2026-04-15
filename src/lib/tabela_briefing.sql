-- SQL SUPABASE
create table public.marthec_briefings (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamp with time zone default now(),

  empresa text,
  segmento text,
  nome_responsavel text,
  email text,
  whatsapp text,
  cidade text,

  instagram text,
  facebook text,
  publico_alvo text,
  servicos text,
  diferenciais text,

  observacoes text
);
