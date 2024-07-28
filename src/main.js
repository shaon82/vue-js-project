import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const testApp = createApp(App).use(router).mount('#app');
