export default {
    template: `
   <div class=" container container-fluid containeradmin">
        <h1 class="text-center text-light">Salve Admin</h1>
        <h4 class="text-center text-light">Apportare delle modifiche?</h4>
        <div class="text-center">
            <router-link to="/login">
                <button type="button" class="btn btn-lg btnlogout">Logout</button>
                    
                <div class="text-center mx-2">
                    <button @click="showAddForm = true" class="btn btn-success btn-lg">Aggiungi Vinile</button>
                </div>
            </router-link>
        </div>

        <!-- Modulo di modifica vinile -->
        <div v-if="showEditForm" class="modal-overlay text-light">
            <div class="modal-container">
                <h3>Modifica Vinile</h3>
                <form @submit.prevent="updateVinyl">
                    <div class="form-group">
                        <label for="vinyl_name">Nome Vinile</label>
                        <input type="text" id="vinyl_name" v-model="editVinylData.vinyl_name" class="form-control" required />
                    </div>
                    <div class="form-group">
                        <label for="artist">Artista</label>
                        <input type="text" id="artist" v-model="editVinylData.artist" class="form-control" required />
                    </div>
                    <div class="form-group">
                        <label for="price">Prezzo (€)</label>
                        <input type="number" id="price" v-model="editVinylData.price" class="form-control" required />
                    </div>
                    <div class="form-group">
                        <label for="year">Anno</label>
                        <input type="number" id="year" v-model="editVinylData.year" class="form-control" required />
                    </div>
                    <div class="form-group">
                        <label for="category">Categoria</label>
                        <select v-model="editVinylData.category_id" class="form-control">
                            <option v-for="category in categories" :key="category.id_category" :value="category.id_category">
                                {{ category.category_name }}
                            </option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="image_url">URL Immagine</label>
                        <input type="text" id="image_url" v-model="editVinylData.image_url" class="form-control" />
                    </div>
                    <button type="submit" class="btn btn-primary">Salva Modifiche</button>
                    <button type="button" class="btn btn-secondary" @click="closeEditForm">Annulla</button>
                </form>
            </div>
        </div>

        <!-- Modulo di aggiunta vinile -->
        <div v-if="showAddForm" class="modal-overlay text-light">
            <div class="modal-container">
                <h3>Aggiungi Nuovo Vinile</h3>
                <form @submit.prevent="addVinyl">
                    <div class="form-group">
                        <label for="id_vinyl">ID Vinile</label>
                        <input type="number" id="id_vinyl" v-model="newVinyl.id_vinyl" class="form-control" required />
                    </div>
                    <div class="form-group">
                        <label for="vinyl_name">Nome Vinile</label>
                        <input type="text" id="vinyl_name" v-model="newVinyl.vinyl_name" class="form-control" required />
                    </div>
                    <div class="form-group">
                        <label for="artist">Artista</label>
                        <input type="text" id="artist" v-model="newVinyl.artist" class="form-control" required />
                    </div>
                    <div class="form-group">
                        <label for="price">Prezzo (€)</label>
                        <input type="number" id="price" v-model="newVinyl.price" class="form-control" required />
                    </div>
                    <div class="form-group">
                        <label for="year">Anno</label>
                        <input type="number" id="year" v-model="newVinyl.year" class="form-control" required />
                    </div>
                    <div class="form-group">
                        <label for="category">Categoria</label>
                        <select v-model="newVinyl.category_id" class="form-control">
                            <option v-for="category in categories" :key="category.id_category" :value="category.id_category">
                                {{ category.category_name }}
                            </option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="image_url">URL Immagine</label>
                        <input type="text" id="image_url" v-model="newVinyl.image_url" class="form-control" />
                    </div>
                    <button type="submit" class="btn btn-primary">Aggiungi Vinile</button>
                    <button type="button" class="btn btn-secondary" @click="closeAddForm">Annulla</button>
                </form>
                <p v-if="errorMessage" class="text-danger mt-2">{{ errorMessage }}</p>
            </div>
        </div>

        <!-- Lista dei vinili -->
        <div class="container my-4">
            <h3 class="text-center text-light">Ecco il listino attuale</h3>
            <div v-if="vinyls.length > 0" class="row">
                <div v-for="vinyl in vinyls" :key="vinyl.id_vinyl" class="col-md-4 my-3">
                    <div class="card">
                        <img :src="'/media/' + vinyl.image_url" class="card-img-top" alt="Immagine Vinile"> 
                        <div class="card-body">
                            <h5 class="card-title">{{ vinyl.vinyl_name }}</h5>
                            <p class="card-text">Artista: {{ vinyl.artist }}</p>
                            <p class="card-text">Anno: {{ vinyl.year }}</p>
                            <p class="card-text">Prezzo: €{{ vinyl.price }}</p>
                            <p class="card-text">Genere: {{ vinyl.category_name }}</p>
                            <button @click="editVinyl(vinyl)" class="btn modifica mx-2">Modifica</button>
                            <button @click="deleteVinyl(vinyl.id_vinyl)" class="btn elimina">Elimina</button>
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
            showEditForm: false, // Mostra il modulo di modifica
            showAddForm: false, // Mostra il modulo di aggiunta
            editVinylData: { // Dati del vinile da modificare
                id_vinyl: null,
                vinyl_name: '',
                artist: '',
                price: 0,
                year: 0,
                category_id: null,
                image_url: ''
            },
            newVinyl: { // Dati del nuovo vinile
                id_vinyl: null, // Aggiunta dell'ID al nuovo vinile
                vinyl_name: '',
                artist: '',
                price: 0,
                year: 0,
                category_id: null,
                image_url: ''
            },
            categories: [] // Contiene le categorie dei vinili
        };
    },
    created() {
        // Recupera i dati dal server per i vinili
        axios.get('http://localhost:3000/api/vinyls')
            .then(response => {
                this.vinyls = response.data;
            })
            .catch(error => {
                console.error('Errore nel recupero dei vinili:', error);
            });
    
        // Recupera le categorie dal server
        axios.get('http://localhost:3000/api/categories')
            .then(response => {
                this.categories = response.data;
            })
            .catch(error => {
                console.error('Errore nel recupero delle categorie:', error);
            });
    },
    methods: {
        // Mostra il modulo di modifica con i dati del vinile selezionato
        editVinyl(vinyl) {
            this.editVinylData = { ...vinyl };
            this.showEditForm = true;
        },
    
        // Chiude il modulo di modifica senza salvare
        closeEditForm() {
            this.showEditForm = false;
            this.editVinylData = { // Reset dei dati
                id_vinyl: null,
                vinyl_name: '',
                artist: '',
                price: 0,
                year: 0,
                category_id: null,
                image_url: ''
            };
        },
    
        // Modifica il vinile nel database
        updateVinyl() {
            const updatedVinyl = { ...this.editVinylData };
    
            axios.put(`http://localhost:3000/api/vinyls/${updatedVinyl.id_vinyl}`, updatedVinyl)
                .then(response => {
                    // Aggiorna il vinile nella lista
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
    
        // Elimina un vinile
        deleteVinyl(id) {
            const confirmDelete = confirm('Sei sicuro di voler eliminare questo vinile?');
            if (confirmDelete) {
                axios.delete(`http://localhost:3000/api/vinyls/${id}`)
                    .then(response => {
                        // Rimuovi il vinile dalla lista
                        this.vinyls = this.vinyls.filter(v => v.id_vinyl !== id);
                        alert('Vinile eliminato con successo');
                    })
                    .catch(error => {
                        console.error('Errore nella rimozione del vinile:', error);
                        alert('Errore nell\'eliminazione del vinile');
                    });
            }
        },
    
        // Aggiungi un nuovo vinile con controllo sull'unicità dell'ID
        addVinyl() {
            // Controlla se l'ID è già esistente
            if (this.vinyls.some(v => v.id_vinyl === this.newVinyl.id_vinyl)) {
                alert('Errore: L\'ID del vinile esiste già!');
                return;
            }
    
            axios.post('http://localhost:3000/api/vinyls', this.newVinyl)
                .then(response => {
                    this.vinyls.push(response.data); // Aggiungi il nuovo vinile alla lista
                    this.showAddForm = false; // Chiudi il modulo di aggiunta
                    alert('Vinile aggiunto con successo');
                    this.newVinyl = { // Reset dei dati
                        id_vinyl: null,
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
    
        // Chiude il modulo di aggiunta senza salvare
        closeAddForm() {
            this.showAddForm = false;
            this.newVinyl = { // Reset dei dati
                id_vinyl: null,
                vinyl_name: '',
                artist: '',
                price: 0,
                year: 0,
                category_id: null,
                image_url: ''
            };
        }
    }
    };
    