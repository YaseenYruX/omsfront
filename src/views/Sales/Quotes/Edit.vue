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
      outlined
      disabled
      clearable
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
    disabled
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
    disabled
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
     <!--  <th class="text-left">
        SKU
      </th> -->
      <th class="text-left">
        Description
      </th>
      <th class="text-left">
        Condition
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
  name: 'auth.sales.quotes.edit',
  components: {
    //HelloWorld
  },
  mounted: async function (){
    this.getconditions();
    this.getleads();
    this.getbrands();
    let id = this.$route.params.id;
    var ff = await quoteservice.getquote(id);
    console.log(ff);
    this.company=ff.company;
    this.first=ff.firstname;
    this.last=ff.lastname;
    this.email=ff.email;
    this.website=ff.website;
    this.city=ff.city;
    this.state=ff.state;
    this.zip_code=ff.zip_code;
    this.country=ff.country;
    this.description=ff.description;
    this.currency=ff.currency;
    this.vat=ff.vat;
    this.shipping=ff.shipping;
    this.desserts=ff.items;
    this.street=ff.street;
    this.mobile=ff.mobile;
    this.lead_time=ff.lead_time;
    // this.owner=ff.lead.sales.email;
    // this.owner_id=ff.lead.sales.id;
    this.leads=ff.lead.id;
    this.additional_details= ff.additional_details;
    this.quote_status= ff.quote_status;
    this.gettotal();
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
        var formdata = new FormData();
        formdata.append("firstname", this.first);
        formdata.append("lastname", this.last);
        formdata.append("email", this.email);
        formdata.append("company", this.company);
        // formdata.append("owner", this.owner_id);
        formdata.append("lead_id", this.leads);
        formdata.append("mobile", this.mobile);
        formdata.append("lead_time",this.lead_time);
        formdata.append("street", this.street);
        formdata.append("city", this.city);
        formdata.append("state", this.state);
        formdata.append("zip_code", this.zip_code);
        formdata.append("country", this.country);
        formdata.append("currency", this.currency);
        formdata.append("shipping", this.shipping);
        formdata.append("vat", this.vat);
        formdata.append("description", this.description);
        formdata.append("quote_status", this.quote_status);
   
        for(var i=0;i<this.desserts.length;i++){
	// formdata.append("items["+i+"][id]", this.desserts[i].id);
  formdata.append("items["+i+"][id]", this.desserts[i].id);
  formdata.append("items["+i+"][brand]", (this.desserts[i].brand.id)?this.desserts[i].brand.id:this.desserts[i].brand);
	formdata.append("items["+i+"][item]", this.desserts[i].item);
	// formdata.append("items["+i+"][sku]", this.desserts[i].sku);
  formdata.append("items["+i+"][description]", this.desserts[i].description);
  formdata.append("items["+i+"][conditions]", (this.desserts[i].conditions.id)?this.desserts[i].conditions.id:this.desserts[i].conditions);
	formdata.append("items["+i+"][qty]", this.desserts[i].qty);
	formdata.append("items["+i+"][price]", this.desserts[i].price);
        }
        var requestOptions = {
          method: 'POST',
          body: formdata,
          redirect: 'follow',
          //mode: 'no-cors',
        };
        let id = this.$route.params.id;
        fetch(`${this.$parent.apipath}auth/sales/quotes/create-update/${id}?api_token=${localStorage.getItem('bsdapitoken')}`, requestOptions)
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
// owner_id:'',
all_total:0,
lead_time:'',
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
last:'',
email:'',
quote_status:1,
website:'',
additional_details:'',
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
text: 'Update',
to: {name:'auth.quote.update'},
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

      status: [{id:1,name:'Open'},{id:2,name:'Close'},{id:3,name:'Pending'}],
      all_leads:[],
      all_conditions:[],
      all_brands:[],
    }
  },
}
</script>
