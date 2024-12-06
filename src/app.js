import Index from './pagine/index.js';
import faq from './pagine/faq.js';
import login from './pagine/login.js';
import listino from './pagine/listino.js';
import Carrello from './pagine/carrello.js';


window.onload = function () {

    const routes = [
        { path: '/', component: Index },
        { path: '/faq', component: faq },
        { path: '/login', component: login },
        { path: '/listino', component: listino },
        { path: '/carrello', component: Carrello }
    ];

    const router = VueRouter.createRouter({
        history: VueRouter.createWebHashHistory(),
        routes
    });

    const app = Vue.createApp();

    app.use(router);
    app.mount('#app');
};