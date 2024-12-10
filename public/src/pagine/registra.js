export default {
    template: `
  
      <div class="login-container container-fluid mt-4 mb-4">
      <form class="login-form">

       <label for="email">EMAIL</label>
        <input type="email" id="email" placeholder="Inserisci la tua email" required />

       <label for="email">NICKNAME</label>
        <input type="nickname" id="nickname" placeholder="Inserisci il tuo nickname" required />
        
        <label for="password">PASSWORD</label>
        <input class="input" type="password" id="password" placeholder="Inserisci la tua password" required />

        <label for="email">NOME</label>
        <input type="nome" id="nome" placeholder="Inserisci il tuo nome" required />

        <label for="email">COGNOME</label>
        <input type="cognome" id="cognome" placeholder="Inserisci il tuo cognome" required />
        
        
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
  