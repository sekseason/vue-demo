import Vue from 'vue';
import VueResource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue';
import Vuelidate from 'vuelidate';

import App from '@/App.vue';
import router from '@/routes';
import interceptors from '@/routes/interceptors';
import store from '@/store';
import filters from '@/filters';

import '@/assets/scss/styles.scss';

Vue.use(VueResource);
Vue.use(interceptors);
Vue.use(Vuelidate);
Vue.use(BootstrapVue);
Vue.use(filters);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
