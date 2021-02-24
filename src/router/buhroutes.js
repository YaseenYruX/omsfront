export default [
	{
		path: '/buh',
		name: 'auth.buh.main',
		component: () => import('../views/Buh/Main.vue'),
		children:[
			{
				path: '',
				name: 'auth.buh.dashboard',
				component: () => import('../views/Buh/Dashboard.vue')
			},
			{
				path: 'quotes/:brandid',
				name: 'auth.buh.quotes.listing',
				component: () => import('../views/Buh/Quotes/List.vue'),
			},
			{
				path: 'quote-detail/:quoteid',
				name: 'auth.buh.quotes.detail',
				component: () => import('../views/Buh/Quotes/Detail.vue'),
			},
			// {
			// 	path: 'giveprice/:id',
			// 	name: 'auth.purchaser.quotes.giveprice',
			// 	component: () => import('../views/Purchaser/Quotes/GivePrice.vue'),
			// },
			// {
			// 	path: 'quotes/update/:id',
			// 	name: 'auth.purchaser.quotes.update',
			// 	component: () => import('../views/Purchaser/Quotes/Answered.vue'),
			// },
		]
	},
];