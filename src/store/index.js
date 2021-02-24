import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    appcls: '',
    userbrands:[],
  },
  mutations: {
    setAppCls (state,cls) {
      state.appcls=cls
    },
    setUserBrands(state,cls){
      state.userbrands=cls;
    }
  },
  getters: {
    appcls (state) {
      return state.appcls
    },
    userbrands(state){
      return state.userbrands;
    }
  }
})