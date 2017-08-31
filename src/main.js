import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import global from './Global'

Vue.prototype.global=global

Vue.config.productionTip=false;
Vue.use(ElementUI);
Vue.use(VueRouter)
/*



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
*/

new Vue({
  el:'#app',
  router,
  template:'<App/>',
  components:{App}
});
/*
router.push('/home');
let indexScrollTop = 0;
router.beforeEach((to, from, next) => {
  if (from.path === '/home') {
    indexScrollTop = document.body.scrollTop;
  }
  if (to.path === '/home') {
    window.scrollTo(0, indexScrollTop);
  }
  next();
});
*/
