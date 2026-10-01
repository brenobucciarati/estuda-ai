# Study AI — Firebase Auth + Supabase

Login com Google via Firebase Authentication. Dados sincronizados no Supabase.

## Passo 1 — Criar projeto Firebase
1. https://console.firebase.google.com → Adicionar projeto
2. Build > Authentication > Começar
3. Sign-in method > Google > Ativar
4. Configurações do projeto > Seus apps > Web (`</>`)
5. Copie o objeto de configuração e cole em `config.js` (window.FIREBASE_CFG)

## Passo 2 — Criar projeto Supabase
1. https://supabase.com → New project
2. SQL Editor > New query: cole `supabase-setup.sql` e Run
3. Project Settings > API: copie a URL e a chave *publishable*
4. Cole em `config.js` (window.CFG)

## Passo 3 — Integrar Firebase Auth no Supabase
1. Supabase > Authentication > Sign In / Providers
2. Ative **Firebase Auth** (Third-Party Auth)
3. Cole o **Project ID** do Firebase (ex.: `meu-app-12345`)
4. Salve

## Passo 4 — Autorizar domínio no Firebase
1. Firebase > Authentication > Settings > Authorized domains
2. Adicione o domínio onde vai publicar (ex.: `seu-usuario.github.io`)

## Passo 5 — Publicar
Suba a pasta no GitHub Pages, Cloudflare Pages ou Netlify.
Como é site estático, basta commit + push.

## Rodar local
Abra `index.html` direto no navegador **não funciona** para o login Google
(o Firebase exige domínio http/https). Use um servidor local: