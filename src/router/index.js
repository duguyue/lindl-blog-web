import Vue from 'vue'
import Router from 'vue-router'
import element from '@/components/element'
import index from '@/components/index'
import info from '@/components/info'
import sidebar from '@/components/sidebar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/element',
      name:'Element',
      component:element
    },
    {
      path:'/index',
      name:'index',
      component:index
    },
    {
      path:'/info',
      name:'info',
      component:info
    },
    {
      path:'/sidebar',
      name:'sidebar',
      component:sidebar
    }
  ]
})
