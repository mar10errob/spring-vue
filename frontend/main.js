import Vue from 'vue'
import App from '@/App.vue'
import VueRouter from 'vue-router'
import routes from '@/routes'
import bootstrap from 'bootstrap-sass'
import dashboard from '@/vendor/light-bootstrap-dashboard'

Vue.use(VueRouter)

const router = new VueRouter({
    routes
})

new Vue({
    el: '#app',
    render: h => h(App),
    router
})