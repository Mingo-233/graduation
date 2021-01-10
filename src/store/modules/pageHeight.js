const pageHeight = {
  state: {
    pageHeight: ''
  },
  mutations: {
    SET_HEIGHT: (state, pageHeight) => {
      state.pageHeight = pageHeight
    }
  },
  actions: {
    heightAuto({ commit }, pageHeight) {
      commit('SET_HEIGHT', pageHeight)
    },
  }
}
export default pageHeight
