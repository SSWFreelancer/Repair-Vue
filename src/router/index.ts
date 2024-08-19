import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // {
  //   path: "/cart",
  //   name: "cart",
  //   component: () => import("../views/CartView.vue"),
  // },
];
// <nav>
// <router-link to="/">Главная</router-link> |
// <router-link to="/cart">Корзина</router-link>
// </nav>
const router = new VueRouter({
  routes,
});

export default router;
