export default [
	{
		path: '/admin',
		name: 'auth.admin.main',
		component: () => import('../views/Admin/Main.vue'),
		children:[
			{
				path: 'users',
				name: 'auth.admin.users.main',
				component: () => import('../views/Admin/Users/Main.vue'),
				children:[
					{
						path: 'list/:usertype',
						name: 'auth.admin.users.list',
						component: () => import('../views/Admin/Users/List.vue'),
					},
					{
						path: 'add/:usertype',
						name: 'auth.admin.users.add',
						component: () => import('../views/Admin/Users/Add.vue'),
					},
					{
						path: 'edit/:usertype/:id',
						name: 'auth.admin.users.edit',
						component: () => import('../views/Admin/Users/Edit.vue'),
					},
				],
			},
		]
	},
];