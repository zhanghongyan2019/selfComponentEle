import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import './assets/css/globalInit.scss'

import navMenu from './components/menu/index'
import subMenu from '@/components/menu/components/subMenu'
import menuItem from '@/components/menu/components/menuItem'
import popper from '@/components/popper/index'
import selfTable from '@/components/table/index'
import tableColumn from '@/components/table/components/tableColumn'
import selfForm from '@/components/form/index'
import formItem from '@/components/form/components/formItem'
import datePicker from '@/components/datePicker/index'

Vue.component('navMenu', navMenu)
Vue.component('subMenu', subMenu)
Vue.component('menuItem', menuItem)
Vue.component('popper', popper)
Vue.component('selfTable', selfTable)
Vue.component('tableColumn', tableColumn)
Vue.component('selfForm', selfForm)
Vue.component('formItem', formItem)
Vue.component('datePicker', datePicker)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
