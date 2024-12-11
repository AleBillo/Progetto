export default {
    
  template: `
   
 <div class="container my-4">
  <h1 class="text-center text-light">Il nostro listino dei vinili</h1>
  
  <div v-if="vinyls.length > 0" class="row row-cols-1 row-cols-md-3 g-4">
    <div v-for="vinyl in vinyls" :key="vinyl.id_vinyl" class="col">
      <div class="card h-100 shadow-lg">
        <img 
          :src="'/media/' + vinyl.image_url" 
          class="card-img-top img-fluid" 
          alt="Immagine Vinile" 
          style="object-fit: cover; height: 200px;"
        >
        <div class="card-body">
          <h5 class="card-title text-primary">{{ vinyl.vinyl_name }}</h5>
          <p class="card-text">
            <strong>Artista:</strong> {{ vinyl.artist }}
          </p>
          <p class="card-text">
            <strong>Anno:</strong> {{ vinyl.year }}
          </p>
          <p class="card-text">
            <strong>Prezzo:</strong> €{{ vinyl.price }}
          </p>
        </div>
        <div class="card-footer bg-light d-flex justify-content-between align-items-center">
          <button 
            class="btn btn-sm px-4"
            :class="{ 'btn-success': isInCart(vinyl), 'btn-primary': !isInCart(vinyl) }"
            @click="addToCart(vinyl)"
          >
            {{ isInCart(vinyl) ? 'Aggiunto' : 'Aggiungi al Carrello' }}
          </button>
        </div>
      </div>
    </div>
  </div>
  
  <div v-else class="text-center">
    <p class="text-light">Nessun vinile trovato!</p>
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
