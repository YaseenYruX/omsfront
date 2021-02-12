import Vue from 'vue'
import VueRouter from 'vue-router'
import adminroutes from '@/router/adminroutes.js'
import baseroutes from '@/router/baseroutes.js'

Vue.use(VueRouter)

const routes = [
  ...baseroutes,
  ...adminroutes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
