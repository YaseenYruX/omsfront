<template>
  <v-row>
    {{alluserbrands}}
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
