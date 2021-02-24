import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    appcls: '',
  },
  mutations: {
    setAppCls (state,cls) {
      state.appcls=cls
    }
  },
  getters: {
    appcls (state) {
      return state.appcls
    },
  }
})