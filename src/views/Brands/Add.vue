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
    v-model="brandname"
    :rules="[rules.required]"
    label="Brand Name"
    outlined
  ></v-text-field>
</v-col>
<v-col
  cols="12"
  sm="12"
  class="pb-0"
>
  <v-file-input
    show-size
    v-model="image"
    accept="image/png, image/jpeg, image/bmp"
    label="Title Image"
    :rules="[rules.required]"
    truncate-length="15"
  ></v-file-input>
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
    @click="addbrand"
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
  name: 'auth.brands.add',
  methods:{
    addbrand: async function(){
      if(this.$refs.form.validate()){
        this.btnloading=true;
        var formdata = new FormData();
        formdata.append("name", this.brandname);
        formdata.append("image", this.image);
        var requestOptions = {
          method: 'POST',
          body: formdata,
          redirect: 'follow',
          //mode: 'no-cors',
        };
        fetch(`${this.$parent.apipath}brands/create-update`, requestOptions)
          .then(response => response.json())
          .then(result => {
            if(result.status){
              this.$router.push({name:'auth.brands.listing'});
            }
          })
          //.catch(error => console.log('error', error));
      }
    }
  },
  data () {
    return {
brandname:'',
image:{},
bread: [
{
text: 'Dashboard',
to: {name:'Home'},
disabled:false,
exact:true,
},
{
text: 'Brands',
to: {name:'auth.brands.listing'},
disabled:false,
exact:true,
},
{
text: 'Add',
to: {name:'auth.brands.add'},
disabled:false,
exact:true,
},
],
loading: false,
btnloading: false,
rules: {
required: value => !!value || 'Required.',
},
}
},  
}
</script>
