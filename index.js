import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const FirstPage = { template: '<div>I am the first page of your app!</div>' }
const SecondPage = { template: '<div>I am the second page</div>' } 

const routes = [
    {path:'/first', component: FirstPage},
    {path:'/second',component: SecondPage}
]

const router = new VueRouter({ routes })

const app = new Vue({router}).$mount('#app')