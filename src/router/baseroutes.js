import Home from '../views/Home.vue'
export default [
{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/auth/login',
    name: 'auth.login',
    component: () => import('../views/Auth/Login.vue'),
    props:{ routerClass : 'loginpage' }
  },
  {
    path: '/leads',
    name: 'auth.leads.main',
    component: () => import('../views/Leads/Main.vue'),
    children:[
      {
        path: '',
        name: 'auth.leads.listing',
        component: () => import('../views/Leads/Index.vue'),
      },
      {
        path: 'add',
        component: () => import('../views/Leads/Add.vue'),
        name: 'auth.leads.add',
      },
      {
        path: 'update/:id',
        component: () => import('../views/Leads/Update.vue'),
        name: 'auth.leads.update',
      },
    ]
  },
  {
    path: '/brands',
    name: 'auth.brands.main',
    component: () => import('../views/Brands/Main.vue'),
    children:[
      {
        path: '',
        name: 'auth.brands.listing',
        component: () => import('../views/Brands/Index.vue'),
      },
      {
        path: 'add',
        component: () => import('../views/Brands/Add.vue'),
        name: 'auth.brands.add',
      },
      {
        path: 'update/:id',
        component: () => import('../views/Brands/Update.vue'),
        name: 'auth.brands.update',
      },
    ]
  },
  {
    path: '/quote',
    name: 'auth.quote.main',
    component: () => import('../views/Quotes/Main.vue'),
    children:[
      {
        path: '',
        name: 'auth.quote.listing',
        component: () => import('../views/Quotes/Index.vue'),
      },
      {
        path: 'add/:id',
        component: () => import('../views/Quotes/Add.vue'),
        name: 'auth.quote.add',
      },
      {
        path: 'update/:id',
        component: () => import('../views/Quotes/Update.vue'),
        name: 'auth.quote.update',
      },

    ]
  },
  {
    path: '/purchaser',
    name: 'auth.purchaser.main',
    component: () => import('../views/Purchaser/Main.vue'),
    children:[
      // {
      //   path: 'unanswered',
      //   name: 'auth.purchaser.unanswered',
      //   component: () => import('../views/Purchaser/Unanswered.vue'),
      // },
      // {
      //   path: 'giveprice/:id',
      //   name: 'auth.purchaser.unanswered.giveprice',
      //   component: () => import('../views/Purchaser/GivePrice.vue'),
      // },
      {
        path: '',
        name: 'auth.purchaser.listing',
        component: () => import('../views/Purchaser/index.vue'),
      },
    ]
  },
]