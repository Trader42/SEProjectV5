import Vue from 'vue'
import Router from 'vue-router'
import Overview from '@/components/Overview'
import AddItem from '@/components/AddItem'
import AddMachine from '@/components/AddMachine'
import AddTool from '@/components/AddTool'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Overview',
      component: Overview
    },
    {
      path: '/AddItem',
      name: 'AddItem',
      component: AddItem
    },
    {
      path: '/AddMachine',
      name: 'AddMachine',
      component: AddMachine
    },
    {
      path: '/AddTool',
      name: 'AddTool',
      component: AddTool
    }
  ]
})