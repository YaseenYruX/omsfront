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
<v-img
  contain
  max-height="150"
  max-width="250"
  :src="$parent.storagepath+imagepath"
></v-img>
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
    @click="updatebrand"
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
  name: 'auth.brands.update',
  mounted: async function (){
    let id = this.$route.params.id;
    var ff = await fetch(`${this.$parent.apipath}brands/get/${id}`).then(function(e){
      return e.json();
    })
    this.brandname=ff.name;
    this.imagepath=ff.image;
  },
  methods:{
    updatebrand: async function(){
      if(this.$refs.form.validate()){
        this.btnloading=true;
        var formdata = new FormData();
        formdata.append("name", this.brandname);
        formdata.append("image", this.image);
        var requestOptions = {
          method: 'POST',
          body: formdata,
          redirect: 'follow'
        };
        let id = this.$route.params.id;
        fetch(`${this.$parent.apipath}brands/create-update/${id}`, requestOptions)
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
imagepath:'',
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
text: 'Update',
to: {name:'auth.brands.update'},
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
