import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import menuView from "../views/menu.vue"
import formView from "../views/form.vue"
import tableView from "../views/table.vue"
import datePicker from "../views/datePicker.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: 'menu',
    children: [
      {
        path: "/menu",
        name: "menuView",
        component: menuView,
      },
      {
        path: "/form",
        name: "formView",
        component: formView,
      },
      {
        path: "/table",
        name: "tableView",
        component: tableView,
      },
      {
        path: "/datePicker",
        name: "datePicker",
        component: datePicker,
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
