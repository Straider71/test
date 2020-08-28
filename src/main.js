import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueToastr from '@deveodk/vue-toastr';
import '@deveodk/vue-toastr/dist/@deveodk/vue-toastr.css';
import 'nprogress/nprogress.css';

Vue.use(VueToastr, {
  defaultPosition: 'toast-bottom-right',
  defaultType: 'info',
  defaultTimeout: 1000,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  // created() {
  //   const userString = localStorage.getItem('user');
  //   if (userString) {
  //     const userData = JSON.parse(userString);
  //     this.$store.commit('SET_USER_DATA', userData);
  //   }
  //   axios.interceptors.response.use(
  //     response => response,
  //     error => {
  //       if (error.response.status === 401) {
  //         this.$store.dispatch('logout');
  //       }
  //       return Promise.reject(error);
  //     }
  //   );
  // },
  render: h => h(App),
}).$mount('#app');
