import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Inicio.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/programas',
    name: 'Programas',
    component: () => import(/* webpackChunkName: "about" */ '../views/Programas.vue')
  },
  {
    path: '/clientes',
    name: 'Clientes',
    component: () => import(/* webpackChunkName: "about" */ '../views/Registro.vue')
  },

  {
    path: '/tabla',
    name: 'Tabla',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tabla.vue')
  },

  {
    path: '/galeria',
    name: 'Galeria',
    component: () => import(/* webpackChunkName: "about" */ '../views/Galeria.vue')
  },

  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contacto.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
