export default {
    template: `
      <div class="utente-container container container-fluid my-5">
        <h1>Bentornatə, <span class="nickname">{{ nickname }}</span>!</h1>
        <h3>Cosa vuoi fare?</h4>
        
              <div class="text-center mx-2 my-3">

                 <router-link to="/carrello">
                              
                 <button type="button" class="btn btnbuy btn-lg mx-1">Vai al carrello</button>
                </router-link>

                <router-link to="/login">
                             
                <button type="button" class="btn btn-lg btnlogout mx-1" @click="logout">Logout</button>
                </router-link>
                                
              </div>

                          

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
    },
    methods:{

      
      logout() {
        this.nickname = ''; // Reset della variabile locale
        localStorage.removeItem('nickname'); // Rimuove il valore memorizzato nel localStorage
        alert('Logout effettuato con successo!'); // Messaggio di conferma (opzionale)
    }

    }
  };
  