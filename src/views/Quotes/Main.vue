<template>
  <v-container
  class="mt-5"
  >
	<router-view></router-view>
  </v-container>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
name: 'auth.quote.main',
components: {
//HelloWorld
},
data () {
return {
	apipath:process.env.VUE_APP_APIPATH,
	storagepath:process.env.VUE_APP_STORAGE,
}
},
}
</script>
