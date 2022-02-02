import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import ItemList from '@/views/ItemList.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/:status?',
    name: 'item-list',
    component: ItemList
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/router1',
    name: 'Router1',
    component: () => import(/* webpackChunkName: "router1" */ '../views/Router1.vue')
  },
  {
    path: '/router2',
    name: 'Router2',
    component: () => import(/* webpackChunkName: "router2" */ '../views/Router2.vue')
  },
  {
    path: '/mix-in',
    name: 'MixIn',
    component: () => import(/* webpackChunkName: "MixIn" */ '../views/MixIn.vue')
  },
  {
    path: '/counter',
    name: 'Counter',
    component: () => import(/* webpackChunkName: "Counter" */ '../views/Counter.vue')
  },
  {
    path: '/module-store',
    name: 'ModuleStore',
    component: () => import(/* webpackChunkName: "ModuleStore" */ '../views/ModuleStore.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
