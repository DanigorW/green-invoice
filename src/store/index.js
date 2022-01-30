import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login/login'
import logout from './modules/logout/logout'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        login,
        logout
    }
})