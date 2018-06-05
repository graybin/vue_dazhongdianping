import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import City from './views/City.vue'
import CitySearch from './views/CitySearch.vue'
import User from './views/User.vue'
import NumberLogin from './components/User/NumberLogin.vue'

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
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/numberlogin',
      name: 'NumberLogin',
      component: NumberLogin
    }
  ]
})
