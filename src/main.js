import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import './assets/css/globalInit.scss'

import navMenu from './components/menu/index'
import subMenu from '@/components/menu/components/subMenu'
import menuItem from '@/components/menu/components/menuItem'

Vue.component('navMenu', navMenu)
Vue.component('subMenu', subMenu)
Vue.component('menuItem', menuItem)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
