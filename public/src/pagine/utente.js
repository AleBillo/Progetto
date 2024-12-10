export default {
    template: `
      <div class="utente-container container-fluid d-flex justify-content-center align-items-center vh-100">
        <h1>Benvenuto, <span class="nickname">{{ nickname }}</span>!</h1>
      </div>
    `,
    data() {
      return {
        nickname: '' // Valore iniziale vuoto
      };
    },
    created() {
      // Recupera il nickname dal localStorage
      this.nickname = localStorage.getItem('nickname') || 'Utente';
    }
  };
  