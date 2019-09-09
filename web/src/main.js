import Vue from 'vue'
import App from './App.vue'
// require styles
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'


Vue.use(VueAwesomeSwiper, /* { default global options } */)


Vue.config.productionTip = false

<<<<<<< HEAD
import './assets/scss/style.scss'
import router from './router'
=======
import './style.scss'  
>>>>>>> 548db64ba66b64eafedfc1073c23623a10e4c2de

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
