// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

import Button from './components/Button.vue'
import Header from './components/Header.vue'
import Page from './components/Page.vue'

export default {
  install: Vue => {
    Vue.use(Button);
    Vue.use(Header);
    Vue.use(Page);
  }
}