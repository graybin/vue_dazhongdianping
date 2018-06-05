import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import City from './views/City.vue'
import CitySearch from './views/CitySearch.vue'
import PhoneLogin from './views/User/PhoneLogin.vue'
import NumberLogin from './views/User/NumberLogin.vue'
import FindPassword from './components/User/FindPassword.vue'
import CheckPassword from './components/User/CheckPassword.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/city',
      name: 'city',
      component: City
    },
    {
      path: '/citysearch',
      name: 'citysearch',
      component: CitySearch
    },
    {
      path: '/phonelogin',
      name: 'PhoneLogin',
      component: PhoneLogin
    },
    {
      path: '/numberlogin',
      name: 'NumberLogin',
      component: NumberLogin
    },
    {
      path: '/findpassword',
      name: 'FindPassword',
      component: FindPassword
    },
    {
      path: '/checkpassword',
      name: 'CheckPassword',
      component: CheckPassword
    }
  ]
})
