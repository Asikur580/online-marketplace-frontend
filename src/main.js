import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';

// Import the FontAwesome library
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Import specific icons
import { fas } from '@fortawesome/free-solid-svg-icons';

// Add the icons to the library
library.add(fas);

// Register the FontAwesomeIcon component globally
const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

// Mount the app
app.mount('#app');