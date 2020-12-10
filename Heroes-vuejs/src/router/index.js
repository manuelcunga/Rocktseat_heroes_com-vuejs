import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Perfil from '../views/perfile.vue'
import Acidente from '../views/acidente.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/registrer',
    name: 'registrer',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/registrer.vue')
  },
  {
    path: '/perfile',
    name: 'perfile',
    component: Perfil
  },
  {
    path: '/acidente',
    name: 'acidente',
    component: Acidente
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
