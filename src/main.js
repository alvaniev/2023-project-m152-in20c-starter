// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
//Vuetify experimental
import { VDataTable } from "vuetify/labs/VDataTable";

const vuetify = createVuetify({
  components: {...components, VDataTable},
  directives,
});


const app = createApp(App)

app.use(createPinia())
app.use(router)

// Vuetify
app.use(vuetify);

app.mount('#app')
