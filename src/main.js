import Vue from 'vue'
import Antd from 'ant-design-vue'
import axios from 'axios'
import App from '@/app'
import router from '@/router'
import store from './store'
import UiKit from '@/components'
import LayoutBox from '@/components/layout-box'

import 'ant-design-vue/dist/antd.min.css'

Vue.config.productionTip = false
Vue.use(Antd)
Vue.use(UiKit)
Vue.component('layout-box', LayoutBox)

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
