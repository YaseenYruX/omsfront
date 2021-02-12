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
      label="Status"
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
<v-simple-table
fixed-header
height="300px"
>
<template v-slot:default>
  <thead>
    <tr>
      <th class="text-left">
        Item
      </th>
      <th class="text-left">
        SKU
      </th>
      <th class="text-left">
        Qty
      </th>
      <th class="text-left">
        Price
      </th>
      <th class="text-left">
        Total
      </th>
      <th class="text-left">
        Action
      </th>
    </tr>
  </thead>
  <tbody>
    <tr
      v-for="(item,itemk) in desserts"
      :key="itemk"
    >
<td>
<v-text-field
v-model="item.item"
:rules="[rules.required]"
></v-text-field>
</td>
<td>
<v-text-field
v-model="item.sku"
:rules="[rules.required]"
></v-text-field>
</td>
<td>
<v-text-field
v-model="item.qty"
:rules="[rules.required]"
></v-text-field>
</td>
<td>
<v-text-field
v-model="item.price"
:rules="[rules.required]"
></v-text-field>
</td>
      <td>{{ parseFloat(item.qty*item.price).toFixed(2) }}</td>
<td>
<v-btn
dark
x-small
icon
color="error"
@click="deleterow(itemk)"
>
<v-icon dark>
mdi-delete-outline
</v-icon>
</v-btn>
</td>
    </tr>
  </tbody>
</template>
</v-simple-table>
</v-col>
<v-col
  cols="12"
  sm="12"
  class="pb-0"
>
<v-btn
    color="info"
    elevation="1"
    large
    raised
    class="float-right"
    @click="addrow"
  >Add Row</v-btn>
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
    @click="addquote"
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
export default {
  name: 'auth.quote.add',
  components: {
    //HelloWorld
  },
  methods:{
deleterow(itemk){
	this.desserts.splice(itemk, 1);
},
addrow(){
this.desserts.push({
id:0,
item:'',
sku:'',
qty:0,
price:0
});
},
    addquote: async function(){
      if(this.$refs.form.validate()){
        this.btnloading=true;
        var formdata = new FormData();
        formdata.append("firstname", this.first);
        formdata.append("lastname", this.last);
        formdata.append("email", this.email);
        formdata.append("website", this.website);
        formdata.append("qoute_status", this.tag);
        for(var i=0;i<this.desserts.length;i++){
	formdata.append("items["+i+"][id]", this.desserts[i].id);
	formdata.append("items["+i+"][item]", this.desserts[i].item);
	formdata.append("items["+i+"][sku]", this.desserts[i].sku);
	formdata.append("items["+i+"][qty]", this.desserts[i].qty);
	formdata.append("items["+i+"][price]", this.desserts[i].price);
        }
        var requestOptions = {
          method: 'POST',
          body: formdata,
          redirect: 'follow',
          //mode: 'no-cors',
        };
        fetch(`${this.$parent.apipath}quotes/create-update`, requestOptions)
          .then(response => response.json())
          .then(result => {
            if(result.status){
              this.$router.push({name:'auth.quote.listing'});
            }
          })
          //.catch(error => console.log('error', error));
      }
    }
  },
  data () {
    return {
desserts: [
{
id:0,
item:'',
sku:'',
qty:0,
price:0
}
],
first:'',
last:'',
email:'',
tag:'Open',
website:'',
bread: [
{
text: 'Dashboard',
to: {name:'Home'},
disabled:false,
exact:true,
},
{
text: 'Quotes',
to: {name:'auth.quote.listing'},
disabled:false,
exact:true,
},
{
text: 'Add',
to: {name:'auth.quote.add'},
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

      items: ['Open', 'CLose'],
    }
  },
}
</script>
