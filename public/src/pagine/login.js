export default {
  template: `
    <div class="login-container container-fluid mt-5">
      <form class="login-form" @submit.prevent="loginUser">
        <label for="email">EMAIL</label>
        <input type="email" id="email" v-model="email" placeholder="Inserisci la tua email" required />
        
        <label for="password">PASSWORD</label>
        <input class="input" type="password" id="password" v-model="password" placeholder="Inserisci la tua password" required />
        
        <button type="submit" class="btn-login">ACCEDI</button>
        
        <p class="separator">Oppure</p>
        
        <div class="text-center">
          <router-link to="/registra">
            <button type="button" class="btn btn-lg mt-3 btn-register">REGISTRATI</button>
          </router-link>
        </div>
      </form>
    </div>
  `,
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    loginUser() {
      axios.post('http://localhost:3000/api/login', {
        email: this.email,
        password: this.password
      })
      .then(response => {
        if (response.data.success) {
          const nickname = response.data.nickname;
          const role = response.data.role;
          localStorage.setItem('nickname', nickname);
          localStorage.setItem('role', role);
          this.$router.push(role === 'admin' ? '/admin' : '/utente');
        } else {
          alert(response.data.message);
        }
      })
      .catch(error => {
        console.error('Errore durante il login:', error);
        alert('Email o Password errata');
      });
    }
    
  }
};
