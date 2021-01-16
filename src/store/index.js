import Vue from 'vue'
import Vuex from 'vuex'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import packageModule from './modules/package';

Vue.use(Vuex, IconsPlugin, BootstrapVue);

const store = new Vuex.Store({
  modules: {
    package: packageModule,
  },
});

export default store;
