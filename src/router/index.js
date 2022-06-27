import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import menuView from "../views/menu.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    direct: menuView,
    children: [
      {
        path: "/menu",
        name: "menuView",
        component: menuView,
      }
    ]
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
