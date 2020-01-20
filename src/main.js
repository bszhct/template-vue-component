import Vue from 'vue'
import Antd from 'ant-design-vue'
import axios from 'axios'
import App from '@/app.vue'
import router from '@/router'
import UiKit from '@/components'
import LayoutCard from '@/components/layout-card'

Vue.config.productionTip = false
Vue.use(Antd)
Vue.use(UiKit)

Vue.component('layout-card', LayoutCard)

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
