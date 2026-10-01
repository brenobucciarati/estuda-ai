-- Rode UMA vez no Supabase: SQL Editor > New query > cole tudo > Run.
-- Requer que a integração Firebase Auth já esteja ativa no painel.

create table if not exists public.study_data (
  -- user_id agora é o UID do Firebase (string, não uuid)
  user_id text primary key,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.study_data enable row level security;

drop policy if exists "study_data_select_own" on public.study_data;
drop policy if exists "study_data_insert_own" on public.study_data;
drop policy if exists "study_data_update_own" on public.study_data;

-- Extrai o UID do Firebase do JWT (claim "sub")
create policy "study_data_select_own" on public.study_data
  for select to authenticated
  using ((select auth.jwt()->>'sub') = user_id);

create policy "study_data_insert_own" on public.study_data
  for insert to authenticated
  with check ((select auth.jwt()->>'sub') = user_id);

create policy "study_data_update_own" on public.study_data
  for update to authenticated
  using ((select auth.jwt()->>'sub') = user_id)
  with check ((select auth.jwt()->>'sub') = user_id);