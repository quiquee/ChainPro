import Vue from 'vue'
import Router from 'vue-router'
import ConnDetails from '@/components/ConnDetails'
import cpSheet from '@/components/cpSheet'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/conndetails',
      name: 'Connection Details',
      component: ConnDetails
    },
    {
        path: '/sheet',
        name: 'Worksheet',
        component: cpSheet
      }
  ]
})