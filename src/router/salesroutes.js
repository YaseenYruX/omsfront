export default [
	{
		path: '/sales',
		name: 'auth.sales.main',
		component: () => import('../views/Sales/Main.vue'),
		children:[
			{
				path: '',
				name: 'auth.sales.dashboard',
				component: () => import('../views/Sales/Dashboard.vue')
			},
			{
				path: 'leads',
				name: 'auth.sales.leads.main',
				component: () => import('../views/Sales/Leads/Main.vue'),
				children:[
					{
						path: 'list',
						name: 'auth.sales.leads.list',
						component: () => import('../views/Sales/Leads/List.vue'),
					},
					{
						path: 'add',
						name: 'auth.sales.leads.add',
						component: () => import('../views/Sales/Leads/Add.vue'),
					},
					{
						path: 'edit/:id',
						name: 'auth.sales.leads.edit',
						component: () => import('../views/Sales/Leads/Edit.vue'),
					},
				],
			},
			{
				path: 'quotes',
				name: 'auth.sales.quotes.main',
				component: () => import('../views/Sales/Quotes/Main.vue'),
				children:[
					{
						path: 'list',
						name: 'auth.sales.quotes.list',
						component: () => import('../views/Sales/Quotes/List.vue'),
					},
					{
						path: 'add/:id',
						name: 'auth.sales.quotes.add',
						component: () => import('../views/Sales/Quotes/Add.vue'),
					},
					{
						path: 'edit/:id',
						name: 'auth.sales.quotes.edit',
						component: () => import('../views/Sales/Quotes/Edit.vue'),
					},
				],
			},
		]
	},
];