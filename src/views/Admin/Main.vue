<template>
  <v-container
  class="mt-5"
  >
	<router-view></router-view>
  </v-container>
</template>

<script>
export default {
  name: 'auth.admin.main',
  components: {
  },
  data () {
	return {
		apipath:process.env.VUE_APP_APIPATH,
    storagepath:process.env.VUE_APP_STORAGE,
	}
},
}
</script>
