import Vue from 'vue';
import App from './App';
import router from './router';
import Axios from '@/assets/js/axios.js';

// vue-cli生成的项目如果要全局引用css样式，可以直接在main.js中引入
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '@/assets/css/index.css';

Vue.use(Axios);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
