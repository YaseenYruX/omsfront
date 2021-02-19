<template>
	<v-container>
    
    <v-row no-gutters class="align-center justify-center">
      <v-col
        cols="8"
        sm="8"
      >
        <v-card
          class="pa-10  grey lighten-5"
          outlined
          tile
        >
          <div class="login-form-sec">
            <v-form
              ref="form"
              v-model="loading"
              lazy-validation
            >
              <v-text-field v-model="loggedinemail" :rules="[rules.required, rules.email]" label="Email" clearable outlined></v-text-field>
              <v-text-field
              :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required]"
              :type="show3 ? 'text' : 'password'"
              name="input-10-2"
              label="Password"
              value=""
              v-model="loggedinpassword"
              class="input-group--focused"
              @click:append="show3 = !show3"
              clearable outlined
            ></v-text-field>
              <v-btn
                color="secondary"
                elevation="1"
                large
                raised
                @click="dologin"
                :loading="btnloading"
                :disabled="btnloading"
              >Login</v-btn>
            </v-form>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-snackbar
      v-model="snackbar"
    >
      {{ erorrs.email }}

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
  </v-container>
</template>

<script>
import loginservice from '@/api/auth/login';
export default {
  name: 'Login',
  components: {
    
  },
  data () {
    return {
      loader: null,
      loading: false,
      btnloading: false,
      snackbar:false,
      loggedinemail:'',
      loggedinpassword:'',
      show3: false,
      password: 'Password',
      erorrs:{
        email:'',
        password:'',
      },
      rules: {
        required: value => !!value || 'Required.',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        }
      },
    }
  },
  methods:{
    dologin: async function(){
      if(this.$refs.form.validate()){
        this.btnloading=true;
        var logindetail = await loginservice.dologin(this.loggedinemail,this.loggedinpassword);
        this.btnloading=false;
        if(logindetail.data){
          if(logindetail.status){
            var loggedindetail = {
              apitoken:logindetail.data,
              details:logindetail.user,
            }
            this.$emit("logineventsuccess", loggedindetail);
            if(logindetail.user.user_type==1)
            {
              this.$router.push({name:'auth.admin.users.main'});
            }
            else if(logindetail.user.user_type==4)
            {
              this.$router.push({name:'auth.sales.dashboard'});
            }
          }else{
            this.erorrs.email=logindetail.data;
            this.snackbar = true;
          }
        }
      }
    }
  },
  watch: {
    
  },
}
</script>