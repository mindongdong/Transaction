import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

createApp(App).use(store).use(router).mount('#app')
