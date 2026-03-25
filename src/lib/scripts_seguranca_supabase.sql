create table public.marthec_leads (
  id uuid primary key default gen_random_uuid(),

  created_at timestamptz default now(),

  name text,
  service text,
  businessType text,
  goal text,
  website text,
  deadline text,
  budget text,

  conversation jsonb,

  source text default 'chatbot',
  status text default 'novo'
);

-- permiti realizar insert na tabela
create policy "Allow public insert"
on marthec_leads
for insert
to anon
with check (true);

-- só permite select autenticados
create policy "Allow select authenticated leads"
on marthec_leads
for select
to authenticated
using (true);

-- eleva o nível de segurana rss
alter table marthec_leads enable row level security;

-- ajusta o fuso horário para São Paulo
alter table marthec_leads
alter column created_at 
set default timezone('America/Sao_Paulo', now());