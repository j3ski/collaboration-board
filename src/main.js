import Vue from 'vue';
import App from './App';
import router from './router/router';

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
