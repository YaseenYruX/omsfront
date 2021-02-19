<template>
  <v-app>
    <adminbar @logoutauthparent="logoutauth" v-if="loggedin&&loggedindetail.user_type==1" :loggedindetail="loggedindetail" />
    <salesbar @logoutauthparent="logoutauth" v-if="loggedin&&loggedindetail.user_type==4" :loggedindetail="loggedindetail" />
    <v-main>
      <router-view @logineventsuccess="testlogin"/>
    </v-main>
  </v-app>
</template>
<script>
import adminbar from '@/views/Sidebars/adminbar.vue'
import salesbar from '@/views/Sidebars/salesbar.vue'
import authservice from '@/api/auth/login';
export default {
  name: 'App',

  components: {
    adminbar,
    salesbar
  },

  data: () => ({
    loggedin:false,
    loggedindetail:{},
    apitoken:'',
    drawer:false,
    mini: true,
  }),
  mounted: async function(){
    this.$nextTick(async function(){
      if(!localStorage.getItem('bsdapitoken')){
        if(!this.loggedin){
          this.$router.push({name:'auth.login'})
        }
      }else{
        this.apitoken=localStorage.getItem('bsdapitoken');
        this.loggedin=true;
        /*fetch user detail against api token here*/
        this.loggedindetail = await authservice.getuser(this.apitoken);
        //this.loggedindetail={};
        /*fetch user detail against api token here end*/
      }
    })
  },
  methods:{
    testlogin:function(rep){
      this.loggedindetail=rep.details;
      this.loggedin=true;
      this.apitoken=rep.apitoken;
    },
    logoutauth:function(){
      this.loggedin=false;
      this.apitoken='';
      this.loggedindetail={};
      this.drawer=false;
      this.$nextTick(function(){
        localStorage.removeItem('bsdapitoken');
        this.$router.push({name:'auth.login'})
      })
    }
  },
  watch:{
    apitoken:function(val){
      localStorage.setItem('bsdapitoken',val);
    }
  }
};
</script>
