import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

const appInstance = createApp(App);
appInstance.use(router);
appInstance.mount("#app");
