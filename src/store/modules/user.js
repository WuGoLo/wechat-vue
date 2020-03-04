
const state = {
  nickName: null,
  imgUrl: null
}

// getters
const getters = {
  getImgUrl: state => state.imgUrl,
  getNickName: state => state.nickName
}

// actions
const actions = {
  setThirdInfo ({ commit }, nickName, imgUrl) {
    commit('SET_THIRD_INFO', { nickName, imgUrl })
  }
}

// mutations
const mutations = {
  SET_THIRD_INFO (state, { nickName, imgUrl }) {
    state.nickName = nickName
    state.imgUrl = imgUrl
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
