export default [
	{
		path: '/purchaser',
		name: 'auth.purchaser.main',
		component: () => import('../views/Purchaser/Main.vue'),
		children:[
			{
				path: '',
				name: 'auth.purchaser.dashboard',
				component: () => import('../views/Purchaser/Dashboard.vue')
			},
			{
				path: 'quotes/unanswered',
				name: 'auth.purchaser.quotes.unanswered',
				component: () => import('../views/Purchaser/Quotes/Unanswered.vue'),
			},
			{
				path: 'giveprice/:id',
				name: 'auth.purchaser.quotes.giveprice',
				component: () => import('../views/Purchaser/Quotes/GivePrice.vue'),
			},
			// {
			// 	path: 'quotes/update/:id',
			// 	name: 'auth.purchaser.quotes.update',
			// 	component: () => import('../views/Purchaser/Quotes/Answered.vue'),
			// },
		]
	},
];