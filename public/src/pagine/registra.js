export default {
  template: `
    <div class="login-container container-fluid mt-4 mb-4">
      <form @submit.prevent="registerUser" class="login-form">
        <label for="email">EMAIL</label>
        <input type="email" id="email" v-model="email" placeholder="Inserisci la tua email" required />

        <label for="nickname">NICKNAME</label>
        <input type="text" id="nickname" v-model="nickname" placeholder="Inserisci il tuo nickname" required />
        
        <label for="password">PASSWORD</label>
        <input class="input" type="password" id="password" v-model="password" placeholder="Inserisci la tua password" required />

        <label for="nome">NOME</label>
        <input type="text" id="nome" v-model="nome" placeholder="Inserisci il tuo nome" required />

        <label for="cognome">COGNOME</label>
        <input type="text" id="cognome" v-model="cognome" placeholder="Inserisci il tuo cognome" required />
        
        <button type="submit" class="btn-register">REGISTRATI</button>

        <p class="separator mt-4">Oppure</p>

        <div class="text-center">
          <router-link to="/login">
            <button type="button" class="btn btn-lg btnback">Torna indietro</button>
          </router-link>
        </div>
      </form>
    </div>
  `,

  data() { //variabili vuote
    return {
      email: '',
      nickname: '',
      password: '',
      nome: '',
      cognome: ''
    };
  },

  methods: {
    async registerUser() {
      try {
        const response = await axios.post('http://localhost:3000/api/users', { //chiamata con axios all'api nel 'index.js che collega alla rotta e poi al controller
          email: this.email,
          nickname: this.nickname,
          password: this.password,
          nome: this.nome,
          cognome: this.cognome //dati passati
        });
        alert('Registrazione avvenuta con successo!');
        this.$router.push('/login'); //sposta in pagina di login
      } catch (error) {
        console.error(error);
        alert('Errore durante la registrazione. Riprova!');
      }
    }
  }
};