import Vue from 'vue'; 
import App from './App.vue';
import router from './router'; //import router

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({ //instance Vue
  router, //import router instance vue
  render: h => h(App),
}).$mount('#app'); //lien avec sélecteur index.html