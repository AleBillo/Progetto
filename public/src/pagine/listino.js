export default {
    
  template: `
   
  <div class="container my-4">
      <h1 class="text-center text-light">Il nostro listino dei vinili</h1>
      <div v-if="vinyls.length > 0" class="row">
          <div v-for="vinyl in vinyls" :key="vinyl.id_vinyl" class="col-md-4 my-3">
              <div class="card">
              <img :src="' /media/' + vinyl.image_url" class="card-img-top" alt="Immagine Vinile"> 
                  <div class="card-body">
                      <h5 class="card-title">{{ vinyl.vinyl_name }}</h5>
                      <p class="card-text">Artista: {{ vinyl.artist }}</p>
                      <p class="card-text">Anno: {{ vinyl.year }}</p>
                      <p class="card-text">Prezzo: €{{ vinyl.price }}</p>
                       <button 
                           class = "btn btn-sm"
                          :class ="{'btn-success': isInCart(vinyl), 'btn-primary': !isInCart(vinyl)}"
                          @click="addToCart(vinyl)">
                          {{ isInCart(vinyl) ?'Aggiunto' : 'Aggiungi al Carrello'}}
                       </button>
                  </div>
              </div>
          </div>
      </div>
      <div v-else class="text-center">
          <p>Nessun vinile trovato!</p>
      </div>
  </div>
  `,
  data() {
      return {
          vinyls: [], // Contiene i vinili
          carrello: [] //contiene i prodotti selezionati
      };
  },
  created() {
      // Recupera i dati dal server
      axios.get('http://localhost:3000/api/vinyls')
          .then(response => {
              this.vinyls = response.data;
          })
          .catch(error => {
              console.error('Errore nel recupero dei vinili:', error);
          });

          this.carrello = JSON.parse(localStorage.getItem('carrello')) || [];
  },

  methods: {
   
    isInCart(vinyl) {
        return this.carrello.some(item => item.id_vinyl === vinyl.id_vinyl);
    },
    
    
    addToCart(vinyl) {
        if(!this.isInCart(vinyl)) {
           this.carrello.push(vinyl) 
            localStorage.setItem(('carrello'), JSON.stringify(this.carrello));  
        }
    }
} 
};
