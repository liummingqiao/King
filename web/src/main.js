import Vue from 'vue'
import App from './App.vue'
// require styles
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'


Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false

import './assets/scss/style.scss'
import router from './router'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
