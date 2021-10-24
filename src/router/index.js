import Vue from "vue";
import VueRouter from "vue-router";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import News from "../components/News.vue";
import Category from "../components/Category.vue";

import axios from "axios";
import Vueaxios from "vue-axios";

Vue.use(VueRouter);
Vue.use(IconsPlugin);
Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(axios, Vueaxios);

const routes = [
  {
    path: "/",
    name: "News",
    component: News,
  },
  {
    path: "/:category",
    name: "Category",
    component: Category,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
