<template>
<div>
<v-breadcrumbs :items="bread">
<template v-slot:divider>
<v-icon>mdi-forward</v-icon>
</template>
</v-breadcrumbs>
<v-row no-gutters  class="grey lighten-5 pa-10 rounded elevation-10">
<v-col
cols="12"
sm="12"
>
<v-form
ref="form"
v-model="loading"
lazy-validation
>

<v-row>
<v-col
  cols="12"
  sm="12"
  class="pb-0"
>
  <v-text-field
    v-model="name"
    :rules="[rules.required]"
    label="Name"
    outlined
  ></v-text-field>
</v-col>
<v-col
  cols="12"
  sm="12"
  class="pb-0"
>
  <v-text-field
    v-model="email"
    :rules="[rules.required,rules.email]"
    label="email"
    outlined
    clearable
  ></v-text-field>
</v-col>

<v-col
  cols="12"
  sm="12"
  class="pb-0"
>
  <v-text-field
              :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required]"
              :type="show3 ? 'text' : 'password'"
              name="input-10-2"
              label="Password"
              value=""
              v-model="password"
              class="input-group--focused"
              @click:append="show3 = !show3"
              clearable outlined
            ></v-text-field>
</v-col>

<v-col
  cols="12"
  sm="12"
  class="pb-0 d-none"
>
  <v-text-field
    v-model="user_type"
    :rules="[rules.required]"
    label="Type"
    outlined
  ></v-text-field>
</v-col>
 <v-col
  cols="12"
  sm="12"
  class="pb-0"
>
<v-btn
    color="secondary"
    elevation="1"
    large
    raised
    @click="adduser"
    :loading="btnloading"
    :disabled="btnloading"
  >Save</v-btn>
</v-col>

</v-row>

</v-form>
</v-col>
</v-row>
<v-snackbar
  v-model="snackbar"
>
  <p :key="errork" v-for="(error,errork) in errors" v-html="error.join('</br>')"></p>

  <template v-slot:action="{ attrs }">
    <v-btn
      color="pink"
      text
      v-bind="attrs"
      @click="snackbar = false"
    >
      Close
    </v-btn>
  </template>
</v-snackbar>
</div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import usersservice from '@/api/auth/admin/users';
export default {
  name: 'auth.admin.users.add',
  watch:{
    $route() {
      this.$nextTick(function () {
        this.user_type=this.$route.params.usertype;
        var all_type = ['Admin','BUH','Purchaser','Sales'];
        this.bread[1].text = all_type[this.user_type-1];
      });
    },
  },
  mounted: function () {
  this.$nextTick(function () {
    var all_type = ['Admin','BUH','Purchaser','Sales'];
    this.bread[1].text = all_type[this.user_type-1];
  })
},
  methods:{
    adduser: async function(){
      if(this.$refs.form.validate()){
        this.btnloading=true;
        var token = localStorage.getItem('bsdapitoken');
        const {status,msgs} = await  usersservice.adduser(token,{
          name:this.name,
          email:this.email,
          password:this.password,
          user_type:this.user_type
        }).then(function(e){
          return {status:e.status,msgs:e.data};
        }).catch(function(e){
          return {status:2,msgs:e.response.data.errors};
        });
        this.btnloading=false;
        this.errors={};
        if(status==1){
          /*user created*/
          this.$router.push({name:'auth.admin.users.list',param:{
            userttype:this.user_type
          }});
        }else if(status==0){
          /*personal error*/
          this.errors['common']=[msgs];
          this.snackbar=true;
        }else if(status==2){
          /*validation error*/
          this.errors=msgs;
          this.snackbar=true;
        }
      }
    }
  },
  data () {
    return {
name:'',
email:'',
password:'',
user_type:this.$route.params.usertype,
snackbar:false,
errors:{},
show3: false,
bread: [
{
text: 'Dashboard',
to: {name:'Home'},
disabled:false,
exact:true,
},
{
text: 'Admin',
to: {name:'auth.admin.users.list',params:{usertype:this.$route.params.usertype}},
disabled:false,
exact:true,
},
{
text: 'Add',
to: {name:'auth.admin.users.add',params:{usertype:this.$route.params.usertype}},
disabled:false,
exact:true,
},
],
loading: false,
btnloading: false,
rules: {
        required: value => !!value || 'Required.',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        }
      },

}
},  
}
</script>
