import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

Vue.use(VueRouter)

import index from './components/index.vue'
import hello from './components/hello.vue'

const routes=[
  {path:'/',redirect:'/index'},
  {path:'/index',component:resolve=>require(['./components/index.vue'],resolve),
      children:[
        {path:'info',component:resolve=>require(['./components/info.vue'],resolve)}
      ]
  },
  {path:'hello',component:resolve=>require(['./components/hello.vue'],resolve)},
]

const router=new VueRouter({
  routes
})

const app=new Vue({
  router,
  render:h=>h(App)
}).$mount('#app')
