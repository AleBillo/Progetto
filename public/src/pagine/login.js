export default {
  template: `

    <div class="login-container container-fluid mt-5">
    <form class="login-form">
      <label for="email">EMAIL</label>
      <input type="email" id="email" placeholder="Inserisci la tua email" required />
      
      <label for="password">PASSWORD</label>
      <input class="input" type="password" id="password" placeholder="Inserisci la tua password" required />
      
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
      
    };
  },


  created() {
    
  },

  

  methods: {}
};
