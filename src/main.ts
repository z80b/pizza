import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHashHistory } from 'vue-router';
import { routes } from '~/routes';
import '~/style.css';
import App from '~/App.vue';

const app = createApp(App);
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
app.use(router);
app.use(createPinia());
app.mount('#app');
