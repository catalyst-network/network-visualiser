import Vue from 'vue';
import Vuex from 'vuex';

import nodePubSub from './modules/nodePubSub';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        nodePubSub
    }
})
