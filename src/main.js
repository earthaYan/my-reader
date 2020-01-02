import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import pub from '../common/public'
import {NavBar,Button,Swipe,SwipeItem,Tab,Tabs,Card,Tag,List,Rate,Field,CellGroup,Notify} from 'vant'

Vue.use(NavBar)
.use(Button).use(Swipe).use(SwipeItem).use(Card).use(Tag).use(List).use(Rate)
.use(Tabs).use(Tab).use(Field).use(CellGroup).use(Notify)
Vue.prototype.axios=axios
Vue.prototype.pub=pub
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
// 请求拦截器
axios.interceptors.request.use(config=>{
  config.params = config.params || {}
  config.params.token=window.token||pub.getCookie('token')
  return config
},error=>{
  return Promise.reject(error)
})
// 响应拦截器,token失效拦截
axios.interceptors.response.use(response=>{
  if(response.data.code==100){
    pub.delCookie('user')
    pub.delCookie('token')
    if(location.href.indexOf("/login")==-1)
    {
      router.replace({
        path: '/login',
        query: {
          referrer: router.currentRoute.fullPath
        }
      })
    }
  }
  return response
},error=>{
  return Promise.reject(error)
})