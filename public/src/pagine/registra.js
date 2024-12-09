export default {
    template: `
  
      <div class="login-container container-fluid mt-5">
      <form class="login-form">

       <label for="email">USERNAME</label>
        <input type="email" id="email" placeholder="Inserisci la tua email" required />

        <label for="email">EMAIL</label>
        <input type="email" id="email" placeholder="Inserisci la tua email" required />
        
        <label for="password">PASSWORD</label>
        <input class="input" type="password" id="password" placeholder="Inserisci la tua password" required />
        
        
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
    
    data() {
      return {
        
      };
    },
  
  
    created() {
      
    },
  
    
  
    methods: {}
  };
  