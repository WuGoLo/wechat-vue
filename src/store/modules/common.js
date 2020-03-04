const state = {
  globalMaskShow:true //全局遮罩
}

// getters
const getters = {
  getGlobalMaskShow: state => state.globalMaskShow
}

// actions
const actions = {
  
}

// mutations
const mutations = {
  GLOBALMASK_OPEN (state) {
    state.globalMaskShow = true
  },
  GLOBALMASK_CLOSE (state) {
    state.globalMaskShow = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}