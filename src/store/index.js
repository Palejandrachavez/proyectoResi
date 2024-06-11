import { createStore } from 'vuex'

export default createStore({
  state: {
   currentComponent: 'LoginView'
  },
  getters: {
  },
  mutations: {  
    setCurrentComponent(state, component) {
      state.currentComponent = component
    }
  },
  actions: {
  },
  modules: {
  }
})
