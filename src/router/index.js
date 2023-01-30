import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Ex1View from '../views/Ex1View.vue'
import Ex2View from '../views/Ex2View.vue'
import Ex3View from '../views/Ex3View.vue'
import Ex4View from '../views/Ex4View.vue'
import Ex5View from '../views/Ex5View.vue'
import Ex6View from '../views/Ex6View.vue'
import ToDoView from '../views/ToDoView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/todoview',
    name: 'todoview',
    component: ToDoView
  },
  {
    path: '/ex1',
    name: 'ex1view',
    component: Ex1View
  },
  {
    path: '/ex2',
    name: 'ex2view',
    component: Ex2View
  },
  {
    path: '/ex3',
    name: 'ex3view',
    component: Ex3View
  },
  {
    path: '/ex4',
    name: 'ex4view',
    component: Ex4View
  },
  {
    path: '/ex5',
    name: 'ex5view',
    component: Ex5View
  },
  {
    path: '/ex6',
    name: 'ex6view',
    component: Ex6View
  }, 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
