import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '广州',
    cityList: [],
    phone: ''
  },
  mutations: {
    changeCity (state, city) {
      state.city = city
    },
    changeCityList (state, cityList) {
      state.cityList = cityList
    }
  },
  actions: {
    changeCity (mtx, city) {
      mtx.commit('changeCity', city)
    }
  }
})
