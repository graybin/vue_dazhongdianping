import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import City from './views/City.vue'
import CitySearch from '@/components/City/CitySearch.vue'

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
      component:  CitySearch
    }
  ]
})
