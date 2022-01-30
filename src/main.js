import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import globalResetAndFonts from './globalCss/globalResetAndFonts.scss'
import animations from './globalCss/animations.scss'
import containers from './globalCss/containers.scss'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
    animations,
    globalResetAndFonts,
    containers,
    router,
    store,
    render: h => h(App)
}).$mount('#app')