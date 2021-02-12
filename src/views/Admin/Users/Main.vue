<template>
	<v-row>
		<v-col cols="3">
			<v-skeleton-loader
			class="mx-auto"
			type="card"
			v-if="!usercounts[1]"
			></v-skeleton-loader>
			<v-card
			v-if="usercounts[1]"
			class="mx-auto"
			>
			
			<v-icon class="text-center d-block pt-3" size="80" color="red">{{'mdi-shield-account-outline'}}
			</v-icon>
		
			<v-card-title>
			<v-badge
        :content="usercounts[1]"
        :value="usercounts[1]!=0"
        color="green"
        
      >
			Admins
		</v-badge>
			</v-card-title>
			<v-card-actions>
			<v-btn
			color="red lighten-2"
			text
			link
			:to="{name:'auth.admin.users.list',params:{usertype:1}}"
			>
			List
			</v-btn>
			</v-card-actions>
			</v-card>
		</v-col>
		<v-col cols="3">
			<v-skeleton-loader
			class="mx-auto"
			type="card"
			v-if="!usercounts[2]"
			></v-skeleton-loader>
			<v-card
			v-if="usercounts[2]"
			class="mx-auto"
			>
			<v-icon class="text-center d-block pt-3" size="80" color="blue">{{'mdi-head-cog'}}</v-icon>
			<v-card-title>
			<v-badge
        :content="usercounts[2]"
        :value="usercounts[2]!=0"
        color="green"
        
      >
			Business Unit Head
		</v-badge>
			</v-card-title>
			<v-card-actions>
			<v-btn
			color="red lighten-2"
			text
			link
			:to="{name:'auth.admin.users.list',params:{usertype:2}}"
			>
			List
			</v-btn>
			</v-card-actions>
			</v-card>
		</v-col>
		<v-col cols="3">
			<v-skeleton-loader
			class="mx-auto"
			type="card"
			v-if="!usercounts[3]"
			></v-skeleton-loader>
			<v-card
			v-if="usercounts[3]"
			class="mx-auto"
			>
			<v-icon class="text-center d-block pt-3" size="80" color="orange">{{'mdi-cart-plus'}}</v-icon>
			<v-card-title>
				<v-badge
        :content="usercounts[3]"
        :value="usercounts[3]!=0"
        color="green"
        
      >
			Purchasers</v-badge>
			</v-card-title>
			<v-card-actions>
			<v-btn
			color="red lighten-2"
			text
			link
			:to="{name:'auth.admin.users.list',params:{usertype:3}}"
			>
			List
			</v-btn>
			</v-card-actions>
			</v-card>
		</v-col>
		<v-col cols="3">
			<v-skeleton-loader
			class="mx-auto"
			type="card"
			v-if="!usercounts[4]"
			></v-skeleton-loader>
			<v-card
			v-if="usercounts[4]"
			class="mx-auto"
			>
			<v-icon class="text-center d-block pt-3" size="80" color="green">{{'mdi-currency-twd'}}</v-icon>
			<v-card-title>
			<v-badge
        :content="usercounts[4]"
        :value="usercounts[4]!=0"
        color="green"
        
      >Sales Person</v-badge>
			</v-card-title>
			<v-card-actions>
			<v-btn
			color="red lighten-2"
			text
			link
			:to="{name:'auth.admin.users.list',params:{usertype:4}}"
			>
			List
			</v-btn>
			</v-card-actions>
			</v-card>
		</v-col>
		<v-col cols="12">
			<router-view @refreshusercount="refreshuser"></router-view>
		</v-col>
	</v-row>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import usersservice from '@/api/auth/admin/users';
export default {
name: 'auth.admin.users.main',
components: {
//HelloWorld
},
mounted: async function(){
	this.refreshuser()
},
data () {
return {
	usercounts:{},
}
},
methods:{
	refreshuser: async function(){
		this.usercounts={};
		var token = localStorage.getItem('bsdapitoken');
		this.usercounts = await usersservice.getsummary(`?api_token=${token}`);
	}
}
}
</script>
