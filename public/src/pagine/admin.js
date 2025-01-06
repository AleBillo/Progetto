export default {
    template: `
  <div class="container container-fluid containeradmin my-4">
  <h1 class="text-center text-light">
    Salve, admin <span class="nickname">{{ nickname }}</span>
  </h1>
  <h4 class="text-center text-light">Apportare delle modifiche?</h4>
  
  <div class="text-center my-4">
    <button 
      @click="showAddForm = true" 
      class="btn btn-lg btnbuy mx-2">
      Aggiungi Vinile
    </button>
    <router-link to="/login">
      <button 
        type="button" 
        class="btn btn-lg btnlogout mx-2" 
        @click="logout">
        Logout
      </button>
    </router-link>
  </div>
  
  
  <div v-if="showEditForm" class="modal-overlay d-flex align-items-center justify-content-center">
    <div class="modal-container bg-light p-4 rounded shadow-lg">
      <h3 class="mb-3">Modifica Vinile</h3>
      <form @submit.prevent="updateVinyl">
        <div class="form-group mb-3">
          <label for="vinyl_name" class="form-label">Nome Vinile</label>
          <input type="text" id="vinyl_name" v-model="editVinylData.vinyl_name" class="form-control" required />
        </div>
        <div class="form-group mb-3">
          <label for="artist" class="form-label">Artista</label>
          <input type="text" id="artist" v-model="editVinylData.artist" class="form-control" required />
        </div>
        <div class="form-group mb-3">
        <label for="price" class="form-label">Prezzo (€)</label>
             <input 
            type="number" 
            id="price" 
            v-model="editVinylData.price" 
            class="form-control" 
            step="0.01" 
            required />
        </div>

        <div class="form-group mb-3">
          <label for="year" class="form-label">Anno</label>
          <input type="number" id="year" v-model="editVinylData.year" class="form-control" required />
        </div>
        <div class="form-group mb-3">
          <label for="category" class="form-label">Categoria</label>
          <select v-model="editVinylData.category_id" class="form-control">
            <option v-for="category in categories" :key="category.id_category" :value="category.id_category">
              {{ category.category_name }}
            </option>
          </select>
        </div>
        <div class="form-group mb-3">
          <label for="image_url" class="form-label">URL Immagine</label>
          <input type="text" id="image_url" v-model="editVinylData.image_url" class="form-control" />
        </div>
        <div class="d-flex justify-content-between">
          <button type="submit" class="btn btn-primary">Salva Modifiche</button>
          <button type="button" class="btn btn-secondary" @click="closeEditForm">Annulla</button>
        </div>
      </form>
    </div>
  </div>
  
 
  <div v-if="showAddForm" class="modal-overlay d-flex align-items-center justify-content-center">
    <div class="modal-container bg-light p-4 rounded shadow-lg">
      <h3 class="mb-3">Aggiungi Nuovo Vinile</h3>
      <form @submit.prevent="addVinyl">
        
        <div class="form-group mb-3">
          <label for="vinyl_name" class="form-label">Nome Vinile</label>
          <input type="text" id="vinyl_name" v-model="newVinyl.vinyl_name" class="form-control" required />
        </div>
        <div class="form-group mb-3">
          <label for="artist" class="form-label">Artista</label>
          <input type="text" id="artist" v-model="newVinyl.artist" class="form-control" required />
        </div>
        <div class="form-group mb-3">
        <label for="price" class="form-label">Prezzo (€)</label>
        <input 
            type="number" 
            id="price" 
            v-model="newVinyl.price" 
            class="form-control" 
            step="0.01" 
            required />
        </div>

        <div class="form-group mb-3">
          <label for="year" class="form-label">Anno</label>
          <input type="number" id="year" v-model="newVinyl.year" class="form-control" required />
        </div>
        <div class="form-group mb-3">
          <label for="category" class="form-label">Categoria</label>
          <select v-model="newVinyl.category_id" class="form-control">
            <option v-for="category in categories" :key="category.id_category" :value="category.id_category">
              {{ category.category_name }}
            </option>
          </select>
        </div>
        <div class="form-group mb-3">
          <label for="image_url" class="form-label">URL Immagine</label>
          <input type="text" id="image_url" v-model="newVinyl.image_url" class="form-control" />
        </div>
        <div class="d-flex justify-content-between">
          <button type="submit" class="btn btn-primary">Aggiungi Vinile</button>
          <button type="button" class="btn btn-secondary" @click="closeAddForm">Annulla</button>
        </div>
      </form>
      <p v-if="errorMessage" class="text-danger mt-2">{{ errorMessage }}</p>
    </div>
  </div>
  
  

<div class="container my-4">
  <h3 class="text-center text-light">Ecco il listino attuale</h3>
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
          <p class="card-text">
            <strong>Genere:</strong> 
            {{ getCategoryName(vinyl.category_id) }}
          </p>
        </div>
        <div class="card-footer bg-light d-flex justify-content-between">
          <button 
            @click="editVinyl(vinyl)" 
            class="btn btn-sm btn-warning">
            Modifica
          </button>
          <button 
            @click="deleteVinyl(vinyl.id_vinyl)" 
            class="btn btn-sm btn-danger">
            Elimina
          </button>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="text-center">
    <p class="text-light">Nessun vinile trovato!</p>
  </div>
</div>

</div>

    `,
    data() {
        return {
            vinyls: [], 
            showEditForm: false, 
            showAddForm: false, 
            editVinylData: { 
                id_vinyl: null,
                vinyl_name: '',
                artist: '',
                price: 0,
                year: 0,
                category_id: null,
                image_url: ''
            },
            newVinyl: { 
                
                vinyl_name: '',
                artist: '',
                price: 0,
                year: 0,
                category_id: null,
                image_url: ''
            },
            categories: [], 
            nickname: '' 
        };
    },
    created() {
        
        axios.get('http://localhost:3000/api/vinyls')
            .then(response => {
                this.vinyls = response.data;
            })
            .catch(error => {
                console.error('Errore nel recupero dei vinili:', error);
            });
    
        
        axios.get('http://localhost:3000/api/categories')
            .then(response => {
                this.categories = response.data;
            })
            .catch(error => {
                console.error('Errore nel recupero delle categorie:', error);
            });

            this.nickname = localStorage.getItem('nickname') || 'Utente';
    },
    methods: {

        getCategoryName(categoryId) {
            const category = this.categories.find(cat => cat.id_category === categoryId);
            return category ? category.category_name : 'Sconosciuto';
        },

        
        
        editVinyl(vinyl) {
            this.editVinylData = { ...vinyl };
            this.showEditForm = true;
        },
    
        
        closeEditForm() {
            this.showEditForm = false;
            this.editVinylData = { 
                id_vinyl: null,
                vinyl_name: '',
                artist: '',
                price: 0,
                year: 0,
                category_id: null,
                image_url: ''
            };
        },
    
        
        updateVinyl() {
            const updatedVinyl = { ...this.editVinylData };
    
            axios.put(`http://localhost:3000/api/vinyls/${updatedVinyl.id_vinyl}`, updatedVinyl)
                .then(response => {
                    
                    const index = this.vinyls.findIndex(v => v.id_vinyl === updatedVinyl.id_vinyl);
                    if (index !== -1) {
                        this.vinyls[index] = { ...this.vinyls[index], ...updatedVinyl };
                    }
                    this.showEditForm = false;
                    alert('Vinile aggiornato con successo');
                })
                .catch(error => {
                    console.error('Errore nella modifica del vinile:', error);
                    alert('Errore nell\'aggiornamento del vinile');
                });
        },
    
       
        deleteVinyl(id) {
            const confirmDelete = confirm('Sei sicuro di voler eliminare questo vinile?');
            if (confirmDelete) {
                axios.delete(`http://localhost:3000/api/vinyls/${id}`)
                    .then(response => {
                        
                        this.vinyls = this.vinyls.filter(v => v.id_vinyl !== id);
                        alert('Vinile eliminato con successo');
                    })
                    .catch(error => {
                        console.error('Errore nella rimozione del vinile:', error);
                        alert('Errore nell\'eliminazione del vinile');
                    });
            }
        },
    
        
        addVinyl() {
            
            axios.post('http://localhost:3000/api/vinyls', this.newVinyl)
                .then(response => {
                    this.vinyls.push(response.data); 
                    this.showAddForm = false; 
                    alert('Vinile aggiunto con successo');
                    this.newVinyl = { 
                        
                        vinyl_name: '',
                        artist: '',
                        price: 0,
                        year: 0,
                        category_id: null,
                        image_url: ''
                    };
                })
                .catch(error => {
                    console.error('Errore nell\'aggiungere il vinile:', error);
                    alert('Errore nell\'aggiungere il vinile');
                });
        },
    
        closeAddForm() {
            this.showAddForm = false;
            this.newVinyl = { 
                id_vinyl: null,
                vinyl_name: '',
                artist: '',
                price: 0,
                year: 0,
                category_id: null,
                image_url: ''
            };
        },

        

        logout() {
            localStorage.removeItem('nickname');
            localStorage.removeItem('role');
            localStorage.removeItem('carrello'); 
            alert('Logout effettuato con successo!');
            this.$router.push('/login'); 
            
          }
          
            
        
    }
    };
    