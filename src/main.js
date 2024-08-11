import './assets/main.css';

import { createApp, markRaw } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import 'bootstrap/dist/css/bootstrap.min.css';




// Import the FontAwesome library
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Import specific icons
import { fas } from '@fortawesome/free-solid-svg-icons';

// Add the icons to the library
library.add(fas);

// pinia
const pinia = createPinia();

pinia.use(({store}) => {
    store.router = markRaw(router)
});

// Register the FontAwesomeIcon component globally
const app = createApp(App);

// vue router
app.use(router);

// pinia
app.use(pinia);

//font awesome
app.component('font-awesome-icon', FontAwesomeIcon);

// Mount the app
app.mount('#app');