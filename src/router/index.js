import Vue from 'vue'
import VueRouter from 'vue-router'
import adminroutes from '@/router/adminroutes.js'
import baseroutes from '@/router/baseroutes.js'
import salesroutes from '@/router/salesroutes.js'
import purchaserroutes from '@/router/purchaserroutes.js'

Vue.use(VueRouter)

const routes = [
  ...baseroutes,
  ...adminroutes,
  ...salesroutes,
  ...purchaserroutes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
