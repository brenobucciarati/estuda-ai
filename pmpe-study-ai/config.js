// ============================================================
// CONFIGURAÇÃO FIREBASE (login Google)
// Console Firebase > Configurações do projeto > Seus apps > Web
// ============================================================
window.FIREBASE_CFG = {
  apiKey: "AIza...SUA_API_KEY",
  authDomain: "SEU-PROJETO.firebaseapp.com",
  projectId: "SEU-PROJETO",
  storageBucket: "SEU-PROJETO.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:xxxxxxxxxxxx"
};

// ============================================================
// CONFIGURAÇÃO SUPABASE (dados)
// Painel Supabase > Project Settings > API
// Use SEMPRE a chave publishable/anon. NUNCA a service_role.
// ============================================================
window.CFG = {
  url: 'https://ujvqtwydpkpyvmiijnoz.supabase.co',
  key: 'sb_publishable_7RQW3KtL2DDzJK2aVl7cNA_VY37pYD9'
};