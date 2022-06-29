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
import selfInput from '@/components/input/index'
import selfSelect from '@/components/select/index'
import selectOption from '@/components/select/components/option'
import selfSwitch from '@/components/switch/index'
import selfCheckbox from '@/components/checkbox/index'
import checkboxGroup from '@/components/checkbox/components/checkboxGroup'
import selfRadio from '@/components/radio/index'
import radioGroup from '@/components/radio/components/radioGroup'
import selfButton from '@/components/button/index'


Vue.component('navMenu', navMenu)
Vue.component('subMenu', subMenu)
Vue.component('menuItem', menuItem)
Vue.component('popper', popper)
Vue.component('selfTable', selfTable)
Vue.component('tableColumn', tableColumn)
Vue.component('selfForm', selfForm)
Vue.component('formItem', formItem)
Vue.component('datePicker', datePicker)
Vue.component('selfInput', selfInput)
Vue.component('selfSelect', selfSelect)
Vue.component('selectOption', selectOption)
Vue.component('selfSwitch', selfSwitch)
Vue.component('selfCheckbox', selfCheckbox)
Vue.component('checkboxGroup', checkboxGroup)
Vue.component('selfRadio', selfRadio)
Vue.component('radioGroup', radioGroup)
Vue.component('selfButton', selfButton)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
