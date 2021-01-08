import Cookies from 'js-cookie'

const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus'),
      withoutAnimation: false
    },
    device: 'desktop',
    size: Cookies.get('size') || 'medium',
    theme: Cookies.get('theme') || 'default',
    structure: Cookies.get('structure') || 'default',
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
      state.sidebar.opened = !state.sidebar.opened
      state.sidebar.withoutAnimation = false
    },
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
      Cookies.set('sidebarStatus', 1)
      state.sidebar.opened = false
      state.sidebar.withoutAnimation = withoutAnimation
    },
    TOGGLE_DEVICE: (state, device) => {
      state.device = device
    },
    SET_SIZE: (state, size) => {
      state.size = size
      Cookies.set('size', size)
    },
    SET_THEME: (state, theme) => {
      state.theme = theme
      Cookies.set('theme', theme)
    },
    SET_STRUCTURE: (state, structure) => {
      state.structure = structure
      Cookies.set('structure', structure)
    }
  },
  actions: {
    ToggleSideBar: ({ commit }) => {
      console.log('toggle');
      commit('TOGGLE_SIDEBAR')
    },
    CloseSideBar({ commit }, { withoutAnimation }) {
      commit('CLOSE_SIDEBAR', withoutAnimation)
    },
    ToggleDevice({ commit }, device) {
      commit('TOGGLE_DEVICE', device)
    },
    setSize({ commit }, size) {
      commit('SET_SIZE', size)
    },
    setTheme({ commit }, theme) {
      window.document.documentElement.setAttribute("data-theme", theme);
      commit('SET_THEME', theme)
    },
    setStructure({ commit }, structure) {
      commit('SET_STRUCTURE', structure)
    }
  }
}

export default app
