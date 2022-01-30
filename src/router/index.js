import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        name: 'HomePage',
        component: () =>
            import( /* webpackChunkName: "HomePage" */ '../views/HomePage.vue')
    },

    {
        path: '/welcome',
        name: 'Welcome',
        component: () =>
            import( /* webpackChunkName: "Welcome" */ '../views/Welcome.vue'),
        beforeEnter: (to, from, next) => {
            if (to.path == '/welcome' && localStorage.getItem("id") !== null) next()
            else next('/')

        }
    },
    {
        path: '/info',
        name: 'UserInfo',
        component: () =>
            import( /* webpackChunkName: "UserInfo" */ '../views/UserInfo.vue'),
        beforeEnter: (to, from, next) => {
            if (to.path == '/info' && localStorage.getItem("id") !== null) next()
            else next('/')

        }
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})



export default router