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
<!-- <v-col
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
</v-col> -->
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
  cols="12"
  sm="12"
  class="pb-0"
>
  <v-text-field
    v-model="lead_time"
    label="Lead Time"
    outlined
    clearable
  ></v-text-field>
</v-col>  
<v-col
    cols="12"
    md="6"
  >
    <v-textarea
      v-model="additional_details"
      name="additional_details"
      label="Additional Details"
      hint="Additional Details"
    ></v-textarea>
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
        Brand
      </th>
      <th class="text-left">
        Item
      </th>
      <th>
        Description
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
<v-select
      v-model="item.brand"
      :items="all_brands"
      item-text="name"
      item-value="id"
      label="Brand"
      outlined
      clearable
      return-object
    ></v-select>
</td>
<td>
<v-text-field
v-model="item.item"
></v-text-field>
</td>
<!-- <td>
<v-text-field
v-model="item.sku"
></v-text-field>
</td> -->
<td>
<v-text-field
v-model="item.description"
></v-text-field>
</td> 
<td>

<v-select
      v-model="item.conditions"
      :items="all_conditions"
      item-text="flag_value"
      item-value="id"
      label="Condition"
      outlined
      clearable
      return-object
    ></v-select>
</td>
<td>
<v-text-field
v-model="item.qty"
></v-text-field>
</td>
<td>
<v-text-field
v-model="item.price"
v-on:change="gettotal()"
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
   <p class="float-left">Total: ${{this.all_total}}.00</p>
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
import quoteservice from '@/api/auth/sales/quoteservice';
export default {
  name: 'auth.sales.quotes.add',
  components: {
    //HelloWorld
  },
  mounted(){
    this.getleads();
    this.getbrands();
    this.getconditions();
    if(this.$route.params.id && this.$route.params.id>0)
    {
      this.get_data(this.$route.params.id);
    }
  },
  methods:{
    gettotal: async function()
    {
      let alltotal = 0;
      for(var i=0;i<this.desserts.length;i++)
      {  
        alltotal += this.desserts[i].qty*this.desserts[i].price;
      }
     this.all_total = alltotal;
     console.log(this.all_total);
    },
    getbrands: async function ()
    {
      this.all_brands= await quoteservice.getbrands();
      this.all_brands = this.all_brands.data;
    },
    getconditions: async function()
    {
      this.all_conditions= await quoteservice.getconditions();
    },
    getleads: async function()
    {
      this.all_leads =await quoteservice.allleads();
      this.all_leads = this.all_leads.data;

    },
    get_data: async function(id)
    {
      var data = await quoteservice.getlead(id);
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
      // this.owner=data.sales.email;
      // this.owner_id= data.sales.id;
      this.leads=data.id;
      this.currency=data.currency;
      this.description=data.description;
      this.quote_status=data.quote_status;
      this.additional_details=data.additional_details;
      this.lead_time=data.lead_time;
      
     
    }, 
deleterow(itemk){
	this.desserts.splice(itemk, 1);
},
addrow(){
this.desserts.push({
id:0,
brand:'',
item:'',
// sku:'',
description:'',
conditions:'',
qty:0,
price:0
});
},
    addquote: async function(){
    

      if(this.$refs.form.validate()){
        this.btnloading=true;
        var token = localStorage.getItem('bsdapitoken');
        var formdata = new FormData();
        formdata.append("firstname", this.first);
        formdata.append("lastname", this.last);
        formdata.append("email", this.email);
        formdata.append("company", this.company);
        // formdata.append("owner", this.owner_id);
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
        formdata.append("lead_time",this.lead_time);
        formdata.append("description", this.description);
        formdata.append("additional_details", this.additional_details);
        for(var i=0;i<this.desserts.length;i++){
	formdata.append("items["+i+"][id]", this.desserts[i].id);
  formdata.append("items["+i+"][brand]", this.desserts[i].brand.id);
	formdata.append("items["+i+"][item]", this.desserts[i].item);
	// formdata.append("items["+i+"][sku]", this.desserts[i].sku);
  formdata.append("items["+i+"][description]", this.desserts[i].description);
  formdata.append("items["+i+"][conditions]", this.desserts[i].conditions.id);
	formdata.append("items["+i+"][qty]", this.desserts[i].qty);
	formdata.append("items["+i+"][price]", this.desserts[i].price);
        }
        var requestOptions = {
          method: 'POST',
          body: formdata,
          redirect: 'follow',
          //mode: 'no-cors',
        };
        fetch(`${this.$parent.apipath}auth/sales/quotes/create-update?api_token=${token}`, requestOptions)
          .then(response => response.json())
          .then(result => {
            if(result.status){
              this.$router.push({name:'auth.sales.quotes.list'});
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
brand:'',
item:'',
// sku:'',
description:'',
conditions:'',
qty:0,
price:0
}
],
showid:0,
// owner_id:'',
all_total:0,
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
// owner:'',
first:'',
lead_time:'',
last:'',
email:'',
quote_status:1,
additional_details:'',
website:'',
bread: [
{
text: 'Dashboard',
to: {name:'auth.sales.dashboard'},
disabled:false,
exact:true,
},
{
text: 'Quotes',
to: {name:'auth.sales.quotes.list'},
disabled:false,
exact:true,
},
{
text: 'Add',
to: {name:'auth.sales.quotes.add'},
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
      all_conditions:[],
      all_brands:[],
    }
  },
}
</script>
