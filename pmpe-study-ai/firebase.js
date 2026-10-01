// Inicializa Firebase e expõe helpers de login.
(() => {
  if (!window.FIREBASE_CFG || !FIREBASE_CFG.apiKey) {
    window.FB = { ready: false };
    return;
  }
  firebase.initializeApp(FIREBASE_CFG);
  const auth = firebase.auth();

  async function loginGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    const result = await auth.signInWithPopup(provider);
    return result.user;
  }

  async function logout() {
    await auth.signOut();
  }

  async function getToken(force = false) {
    const u = auth.currentUser;
    if (!u) return null;
    return u.getIdToken(force);
  }

  function onChange(cb) {
    auth.onAuthStateChanged(cb);
  }

  window.FB = {
    ready: true,
    loginGoogle,
    logout,
    getToken,
    onChange,
    current: () => auth.currentUser
  };
})();