/*
 * @Author: zhangjian
 * @Date: 2022-03-29 11:47:19
 * @LastEditTime: 2022-05-25 15:12:02
 * @LastEditors: zhangjian
 * @Description: 描述
 */
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

import MyButton from './components/MyButton/Button.vue'

export {
  MyButton,
}

export default {
  install: Vue => {
    Vue.use(MyButton);
  }
}


   
// import Vue from "vue";
// import App from "./App.vue";

// Vue.config.productionTip = false;

// new Vue({
//   render: h => h(App)
// }).$mount("#app");