import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import users from './modules/users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart,
    users
  }
})
