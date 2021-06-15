import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faSortUp);

const emitter = mitt();
const app = createApp(App);


app.config.globalProperties.emitter = emitter;
import './assets/global.css'
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app');
