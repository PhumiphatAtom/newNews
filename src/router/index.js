import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

import {BootstrapVue , IconsPlugin} from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import News from "../components/News.vue"
import Sport from "../components/Sport.vue"

import axios from "axios"
import Vueaxios from 'vue-axios'

Vue.use(VueRouter)
Vue.use(IconsPlugin)
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(axios, Vueaxios)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/',
    name: 'News',
    component: News
  },
  {
    path: '/sport',
    name: 'Sport',
    component: Sport
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
