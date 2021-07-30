import { createStore } from 'vuex'

export const store = createStore({
  state: () => ({
    width: window.innerWidth,
    widthType: null
  }),

  mutations: {
    SET_WIDTH (state, width) {
      state.width = width
    },
    SET_WIDTH_TYPE (state, width) {
      console.log('width==>>', width)
      state.width = width
    }
  },

  actions: {
    setWidth ({ commit }, width) {
      commit('SET_WIDTH', width)
    },
    setWidthStatus ({ commit }, widthType) {
      commit('SET_WIDTH_TYPE', widthType)
    }
  }
})
