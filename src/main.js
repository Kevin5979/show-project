import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'
import { Message, Tabs, TabPane, Menu, MenuItem, Submenu, Avatar, Button, MessageBox, Backtop } from 'element-ui';

Vue.component(Message)
Vue.component(MessageBox)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Avatar)
Vue.use(Button)
Vue.use(Backtop)
Vue.prototype.$message = Message
Vue.prototype.$alert = MessageBox.alert

Vue.use(VueLazyload, {
  loading: require("assets/image/loading.gif"),
  error: require("assets/image/error.jpeg"),
})

import 'assets/scss/style.css'

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
