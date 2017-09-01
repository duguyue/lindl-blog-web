import Vue from 'vue'
import Router from 'vue-router'
import element from '@/components/element'
import index from '@/components/index'
import info from '@/components/info'
import homePage from '@/components/HomePage'
import content from '@/components/Content'
import affair from '@/components/Affair'
import affairType from '@/components/AffairType'
import noteBook from '@/components/NoteBook'
import incomeType from '@/components/IncomeType'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'homePage',
      component:homePage,
      children:[
        { path: '', component: index, alias: 'index.html' },
        {
          path:'element',
          name:'Element',
          component:element
        },
        {
          path:'index',
          name:'index',
          component:index
        },
        {
          path:'info',
          name:'info',
          component:info
        },
        {
          path:'content',
          name:'content',
          component:content
        },
        {
          path:'affair',
          name:'affair',
          component:affair
        },
        {
          path:'affair_type',
          name:'affair_type',
          component:affairType
        },
        {
          path:'note_book',
          name:'note_book',
          component:noteBook
        },
        {
          path:'income_type',
          name:'income_type',
          component:incomeType
        }
      ]
    }
  ]
})
