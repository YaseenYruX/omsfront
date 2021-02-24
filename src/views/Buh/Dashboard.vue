<template>
  <v-row>
    <v-col cols="3" v-for="(item,index) in alluserbrands" :key="index">
		
			<v-card
			class="mx-auto"
			>
			
			<v-icon class="text-center d-block pt-3" size="80" color="red">{{'mdi-shield-account-outline'}}
			</v-icon>
		
			<v-card-title>
	
			{{item.brand.name}}
	
			</v-card-title>
			<v-card-actions>
			<v-btn
			color="red lighten-2"
			text
			link
			:to="{name:'auth.buh.quotes.listing',params:{brandid:item.brand.id}}"
			>
			List
			</v-btn>
			</v-card-actions>
			</v-card>
		</v-col>
  </v-row> 
</template>
<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
//import usersservice from '@/api/auth/admin/users';
export default {
name: 'auth.buh.dashboard',
components: {
//HelloWorld
},
mounted: async function(){
  
},
data () {
return {

}
},
methods:{
  
},
computed:{
	alluserbrands(){
		return this.$store.getters.userbrands;
	},
}
}
</script>
