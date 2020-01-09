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
    },
    // reduceCartNum(){
    //   this.state.cartNum--;
    // },
    sendValue(state,value){
      // console.log('value====>'+JSON.stringify(value));
    state.cartNum = value.length
    }

  },
  actions: {
  },
  modules: {
  }
})
