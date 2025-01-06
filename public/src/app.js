import Home from './pagine/Home.js';
import faq from './pagine/faq.js';
import login from './pagine/login.js';
import listino from './pagine/listino.js';
import Carrello from './pagine/carrello.js';
import Registra from './pagine/registra.js';
import Admin from './pagine/admin.js';
import Utente from './pagine/utente.js';

const auth = {
    isLoggedIn: () => !!localStorage.getItem('nickname'),
    userRole: () => localStorage.getItem('role'), 
}; //valori per computed 

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

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
});

const app = Vue.createApp({
    data() {
      return {};
    },
    computed: {
      isLoggedIn() {
        return auth.isLoggedIn();
      },
      userRole() {
        return auth.userRole();
      }
    }
 });
  
  app.use(router);
  app.mount('#app');
  