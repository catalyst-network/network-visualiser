import Vue from 'vue'
import VueSocketio from 'vue-socket.io-extended';
import io from 'socket.io-client';
import axios from 'axios'
import Vuex from 'vuex'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faHome,
    faBook,
    faPencilAlt,
    faSignInAlt
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(Vuex);

Vue.use(VueSocketio, io('http://visuliser-websocket:8181'));

library.add(faHome, faBook, faPencilAlt, faSignInAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

Vue.prototype.$http = axios

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
