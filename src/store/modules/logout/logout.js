import router from '@/router'
export default {
    state: {},

    mutations: {
        LOGOUT(state) {
            state.isLoading = false;
            localStorage.clear()
            router.push('/')
        }
    },
    actions: {},
    getters: {}
}