// Cria o cliente Supabase injetando o JWT do Firebase em cada request.
// O Supabase valida esse JWT via integração Third-Party Auth.
(() => {
  if (!window.CFG || !CFG.url || !CFG.key) {
    window.SB = null;
    return;
  }
  window.SB = supabase.createClient(CFG.url, CFG.key, {
    accessToken: async () => {
      if (!window.FB?.ready || !FB.current()) return null;
      try { return await FB.getToken(); } catch { return null; }
    },
    auth: { persistSession: false, autoRefreshToken: false }
  });
})();