import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartNum:0
  },
  mutations: {
    addCartNum(){
      this.state.cartNum++;
    }
  },
  actions: {
  },
  modules: {
  }
})
