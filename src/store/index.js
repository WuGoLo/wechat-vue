import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import auth from './modules/auth'
import wxSign from './modules/wxSign'
import common from './modules/common'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true, // process.env.NODE_ENV !== 'development',
  modules: {
    user,
    auth,
    wxSign,
    common
  },
  mutations: {}
})

export default store