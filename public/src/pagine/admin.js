export default {
    
    template: `
    <div class="container-fluid containeradmin">
        <h1 class="text-center text-light">Salve Admin</h1>
        <div class="text-center">
        <router-link to="/login">
        <button type="button" class="btn btn-lg btnlogout">Logout</button>
        </router-link>
        </div>
        <div class="container my-4">
            <h3 class="text-center text-light">Ecco il listino attuale</h3>
            <p class="text-center text-light">apportare delle modifiche?</p>
            <div v-if="vinyls.length > 0" class="row">
                <div v-for="vinyl in vinyls" :key="vinyl.id_vinyl" class="col-md-4 my-3">
                    <div class="card">
                    <img :src="' /media/' + vinyl.image_url" class="card-img-top" alt="Immagine Vinile"> 
                        <div class="card-body">
                            <h5 class="card-title">{{ vinyl.vinyl_name }}</h5>
                            <p class="card-text">Artista: {{ vinyl.artist }}</p>
                            <p class="card-text">Anno: {{ vinyl.year }}</p>
                            <p class="card-text">Prezzo: €{{ vinyl.price }}</p>
                            <button class = "btn modifica mx-2">Modifica</button>
                            <button class = "btn elimina">Elimina</button>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="text-center">
                <p>Nessun vinile trovato!</p>
            </div>
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
     
    
  } 
  };
  