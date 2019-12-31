import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import pub from '../common/public'
import {NavBar,Button,Swipe,SwipeItem,Tab,Tabs,Card,Tag,List,Rate} from 'vant'
import './assets/css/reset.css'

Vue.use(NavBar)
.use(Button).use(Swipe).use(SwipeItem).use(Card).use(Tag).use(List).use(Rate)
.use(Tabs).use(Tab)
Vue.prototype.axios=axios
Vue.prototype.pub=pub
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
