// Importa i tuoi componenti
import Home from './pagine/Home.js';
import faq from './pagine/faq.js';
import login from './pagine/login.js';
import listino from './pagine/listino.js';
import Carrello from './pagine/carrello.js';
import Registra from './pagine/registra.js';
import Admin from './pagine/admin.js';
import Utente from './pagine/utente.js';

// Aggiungi la logica per controllare lo stato del login usando i cookie
const auth = {
    isLoggedIn: () => {
        // Controlla se il cookie 'authToken' è presente
        return !!document.cookie.split(';').find(cookie => cookie.trim().startsWith('authToken='));
    },
    getUserRole: () => {
        // Estrai il ruolo dell'utente (se presente nel cookie o in altro modo)
        const token = document.cookie.split(';').find(cookie => cookie.trim().startsWith('authToken='));
        if (token) {
            const payload = JSON.parse(atob(token.split('=')[1].split('.')[1]));
            return payload.role;  // Restituisci il ruolo (assumendo che il JWT contenga il ruolo)
        }
        return null;
    }
};

// Definisci le tue route
const routes = [
    { path: '/', component: Home },
    { path: '/faq', component: faq },
    { path: '/login', component: login },
    { path: '/listino', component: listino },
    { path: '/carrello', component: Carrello },
    { path: '/registra', component: Registra},
    { path: '/admin', component: Admin},
    { path: '/utente', component: Utente}
];

// Crea il router
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
});

// Crea l'app Vue
const app = Vue.createApp({
    data() {
        return {};
    },
    computed: {
        isLoggedIn() {
            return auth.isLoggedIn();
        },
        userRole() {
            return auth.getUserRole();
        }
    }
});

// Usa il router
app.use(router);
app.mount('#app');
  