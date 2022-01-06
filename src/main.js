import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import 'assets/style/index.scss';
import 'utils/rem.js';

const app = createApp(App);

app.use(router).mount('#app');
