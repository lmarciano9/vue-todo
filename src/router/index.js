import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

import TarefaCreate from '../views/TarefaCreate.vue'
import TarefaList from "../views/TarefaList.vue"

import Login from "../views/Login.vue"
import Signup from "../views/Signup.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/task',
    name: 'TarefaCreate',
    meta: { requiresAuth: true },
    component: TarefaCreate
  },
  {
    path: '/task/:id',
    name: 'TarefaEdit',
    meta: { requiresAuth: true },
    component: TarefaCreate
  },
  {
    path: '/tasks',
    name: 'TarefaList',
    meta: { requiresAuth: true },
    component: TarefaList
  },
  {
    path: '/login',
    name: 'Login',
    meta: { requiresAuth: false },
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    meta: { requiresAuth: false },
    component: Signup
  },
  {
    path: '*',
    name: 'Any'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, _, next) => {
  const authenticated = store.getters.authenticated

  /* Caso: não autenticado */
  if (!authenticated) {
    if (to.meta.requiresAuth === true || to.name === 'Any') {
      next({ name: 'Login' })
    } else {
      next()
    }
  }

  /* Caso: autenticado */
  else {
    if (!to.meta.requiresAuth || to.name === 'Any') {
      next({ name: 'TarefaList' })
    } else {
      next()
    }
  }

})

export default router
