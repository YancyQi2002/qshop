// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'//路由

//import iView from 'iview'; //iView框架
//import 'iview/dist/styles/iview.css'; //iView框架样式

import Vant from 'vant';  //vant, 布局与组件库
import 'vant/lib/index.css';

import axios from 'axios';
import VueAxios from 'vue-axios';//ajax请求

import Mock from './mock/mock.js' //mock，模拟后台数据

import store from './store/index.js'   //Vuex状态管理

Vue.config.productionTip = false;

//Vue.use(iView);
Vue.use(VueAxios, axios);
Vue.use(Vant);

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})
