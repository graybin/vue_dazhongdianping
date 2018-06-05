import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './registerServiceWorker'
import './assets/scss/reset.css'
import './assets/scss/iconfont.css'
import 'swiper/dist/css/swiper.css'
import './assets/script/key'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
