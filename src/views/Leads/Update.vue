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
  sm="6"
  class="pb-0"
>
  <v-text-field
    v-model="first"
    label="First Name"
    outlined
    clearable
    :rules="[rules.required]"
  ></v-text-field>
</v-col>

<v-col
  cols="12"
  sm="6"
  class="pb-0"
>
  <v-text-field
    v-model="last"
    label="Last Name"
    :rules="[rules.required]"
    outlined
    clearable
  ></v-text-field>
</v-col>

<v-col
  cols="12"
  sm="6"
  class="pb-0"
>
  <v-text-field
    v-model="email"
    :rules="[rules.required, rules.email]"
    label="E-mail"
    outlined
    clearable
  ></v-text-field>
</v-col>

<v-col
    class="d-flex pb-0"
    cols="12"
    sm="6"
  >
    <v-select
      v-model="tag"
      :items="items"
      :rules="[rules.required]"
      label="Tag"
      outlined
      clearable
    ></v-select>
  </v-col>

 <v-col
  cols="12"
  sm="12"
  class="pb-0"
>
  <v-text-field
    v-model="website"
    label="Website"
    :rules="[rules.required]"
    outlined
    clearable
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
    @click="addlead"
    :loading="btnloading"
    :disabled="btnloading"
  >Save</v-btn>
</v-col>

</v-row>

</v-form>
</v-col>
</v-row>
</div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'auth.leads.update',
  components: {
    //HelloWorld
  },
  mounted: async function (){
    let id = this.$route.params.id;
    var ff = await fetch(`${this.$parent.apipath}leads/get/${id}`).then(function(e){
      return e.json();
    })
    this.first=ff.firstname;
    this.last=ff.lastname;
    this.email=ff.email;
    this.website=ff.website;
    this.tag=ff.lead_tag;
  },
  methods:{
    addlead: async function(){
      if(this.$refs.form.validate()){
        this.btnloading=true;
        var formdata = new FormData();
        formdata.append("firstname", this.first);
        formdata.append("lastname", this.last);
        formdata.append("email", this.email);
        formdata.append("website", this.website);
        formdata.append("lead_tag", this.tag);
        var requestOptions = {
          method: 'POST',
          body: formdata,
          redirect: 'follow',
          //mode: 'no-cors',
        };
        let id = this.$route.params.id;
        fetch(`${this.$parent.apipath}leads/create-update/${id}`, requestOptions)
          .then(response => response.json())
          .then(result => {
            if(result.status){
              this.$router.push({name:'auth.leads.listing'});
            }
          })
          //.catch(error => console.log('error', error));
      }
    }
  },
  data () {
    return {
first:'',
last:'',
email:'',
tag:'',
website:'',
bread: [
{
text: 'Dashboard',
to: {name:'Home'},
disabled:false,
exact:true,
},
{
text: 'Leads',
to: {name:'auth.leads.listing'},
disabled:false,
exact:true,
},
{
text: 'Update',
to: {name:'auth.leads.update'},
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
        },
      },

      items: ['BigFish', 'SmallFish', 'NoGo'],
    }
  },
}
</script>
