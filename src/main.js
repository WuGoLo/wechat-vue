import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import app from './utils/app'
import './utils/rem';
import '@/assets/css/global.scss';
import 'normalize.css';

import 'babel-polyfill';
// 获取路由导航中meta的参数
import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)
// 解决点击300ms延迟问题
import FastClick from 'fastclick'
FastClick.attach(document.body)
// 星星评价组件
import StarRating from 'vue-star-rating'
Vue.component('star-rating', StarRating)
// vue手指滑动组件
// import VueTouch from 'vue-touch';
// Vue.use(VueTouch, { name: 'v-touch' })

//vue懒加载插件，这里只做通用逻辑，如需使用请查阅插件官方文档自行更改
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: '',//加载错误图片地址
  loading: '',//加载中图片地址
  attempt: 5//加载错误后最大尝试次数
})

Vue.config.productionTip = false;

// 初始化浏览器类型，设置系统、平台类型参数
// store.dispatch('initSystemType')
// 执行全局初始化（APP等）
Vue.prototype.$app = app
app.init()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
