import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from '@/router';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const app = createApp(App);

app.use(router);
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.mount('#app');
