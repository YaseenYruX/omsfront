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
    class="d-flex pb-0"
    cols="12"
    sm="6"
  >
    <v-select
      v-model="leads"
      :items="all_leads"
      :rules="[rules.required]"
      item-text="email"
      item-value="id"
      label="Leads"
      v-on:change="get_data(`${leads.id}`)"
      outlined
      clearable
      :disabled="parseInt($route.params.id)>0"
      return-object
    ></v-select>
  </v-col>
  <v-col
  cols="12"
  sm="6"
  class="pb-0"
>
  <v-text-field
    v-model="company"
    label="Company"
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
  cols="12"
  sm="6"
  class="pb-0"
>
  <v-text-field
    v-model="owner"
    :rules="[rules.email]"
    label="Lead Assigned To"
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
    v-model="mobile"
    label="Mobile"
    outlined
    clearable
  ></v-text-field>
    <h2>Address</h2>
</v-col>

<v-col
  cols="12"
  sm="6"
  class="pb-0"
>
  <v-text-field
    v-model="street"
    label="Street"
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
    v-model="city"
    label="City"
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
    v-model="state"
    label="State"
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
    v-model="zip_code"
    label="Zip Code"
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
    v-model="country"
    label="Country"
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
    v-model="description"
    label="Description"
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
    v-model="currency"
    label="Currency"
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
    v-model="shipping"
    label="Shipping"
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
    v-model="vat"
    label="VAT"
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
      v-model="quote_status"
      :items="status"
      :rules="[rules.required]"
      label="Status"
      item-value="id"
      item-text="name"
      outlined
      clearable
      return-object
    ></v-select>
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
        Condition
      </th>
      <th class="text-left">
        Qty
      </th>
      
      <th class="text-left">
        Target Price
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
v-model="item.conditions"
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
import usersservice from '@/api/auth/admin/quotes';
export default {
  name: 'auth.quote.add',
  components: {
    //HelloWorld
  },
  mounted(){
    this.getleads();
    if(this.$route.params.id && this.$route.params.id>0)
    {
      this.isDisabled(this.$route.params.id);
      this.get_data(this.$route.params.id);
    }
    else
    {
      this.isDisabled(0);

    }
  },
  methods:{
    isDisabled(id)
    {
      var re = id>0?true:false;
      return re;
    },
    getleads: async function()
    {
      this.all_leads =await usersservice.allleads();
      this.all_leads = this.all_leads.data;

    },
    get_data: async function(id)
    {
      var data = await usersservice.getlead(id);
      this.company=data.company;
      this.first=data.firstname;
      this.last=data.lastname;
      this.email=data.email;
      this.mobile=data.mobile;
      this.street=data.street;
      this.city=data.city;
      this.state=data.state;
      this.zip_code=data.zip_code;
      this.country=data.country;
      this.owner=data.sales.email;
      this.owner_id= data.sales.id;
      this.leads=data.id;
      this.quote_status=data.quote_status;
      
        console.log(data);
    }, 
deleterow(itemk){
	this.desserts.splice(itemk, 1);
},
addrow(){
this.desserts.push({
id:0,
item:'',
sku:'',
conditions:'',
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
        formdata.append("company", this.company);
        formdata.append("owner", this.owner_id);
        formdata.append("lead_id", this.leads);
        formdata.append("mobile", this.mobile);
        formdata.append("street", this.street);
        formdata.append("city", this.city);
        formdata.append("state", this.state);
        formdata.append("zip_code", this.zip_code);
        formdata.append("country", this.country);
        formdata.append("currency", this.currency);
        formdata.append("shipping", this.shipping);
        formdata.append("vat", this.vat);
        formdata.append("quote_status",this.quote_status.id);
        formdata.append("description", this.description);
        for(var i=0;i<this.desserts.length;i++){
	formdata.append("items["+i+"][id]", this.desserts[i].id);
	formdata.append("items["+i+"][item]", this.desserts[i].item);
	formdata.append("items["+i+"][sku]", this.desserts[i].sku);
  formdata.append("items["+i+"][conditions]", this.desserts[i].conditions);
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
conditions:'',
qty:0,
price:0
}
],
showid:0,
owner_id:'',
term_id:'',
shipping:'',
vat:'',
description:'',
leads:'',
mobile:'',
company:'',
street:'',
currency:'',
city:'',
state:'',
country:'',
zip_code:'',
owner:'',
first:'',
last:'',
email:'',
quote_status:1,

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

      status: [{id:1,name:'Open'},{id:2,name:'Close'},{id:3,name:'Pending'}],//{1:'Open',2:'Close',3:'Pending'},
      all_leads:[],
    }
  },
}
</script>
