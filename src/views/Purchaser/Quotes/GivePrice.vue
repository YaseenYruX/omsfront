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
<v-row>
<v-col
  cols="12"
  sm="6"
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

<!-- <v-col
  cols="12"
  sm="6"
  class="pb-0"
>
  <v-text-field
    v-model="email"
    disabled
    label="E-mail"
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
    v-model="additional_details"
    label="Additional Details"
    outlined
    clearable
  ></v-text-field>
</v-col>
<v-col
  cols="12"
  sm="6"
  class="pb-0"
>
<v-btn
    color="green"
    elevation="1"
    large
    raised
    @click="saveprice()"
  >Save Prices</v-btn>
</v-col>
<v-col
  cols="12"
  sm="12"
  class="pb-0"
>

<v-tabs
dark
background-color="info darken-1"
show-arrows
v-model="tab"
>
<v-tabs-slider color="teal lighten-3"></v-tabs-slider>
<v-tab
v-for="(dessert,dessertk) in desserts"
:key="dessertk"
:href="'#tab-' + dessertk"
>
{{dessert.item}}
</v-tab>
</v-tabs>
<v-tabs-items v-model="tab">
<v-tab-item
v-for="(dessert,dessertk) in desserts"
:key="dessertk"
:value="'tab-' + dessertk"
>
<v-card flat>
<v-card-text>
<v-card
class="mx-auto"
dark
center
max-width="250"
>

<v-card-title class="headline">
  {{dessert.item}}
  <v-chip
  color="green"
  small
>   Quantity - {{dessert.qty}}</v-chip>
<v-chip
  color="green"
  small
>   Brand - {{dessert.brands.flag_value}}</v-chip>
<v-chip
  color="green"
  small
>   Condition - {{dessert.condition.flag_value}}</v-chip>
<v-chip
  color="green"
  small
>   Price - {{dessert.price}}</v-chip>
</v-card-title>

<v-card-subtitle>{{dessert.sku}}</v-card-subtitle>
</v-card>
</v-card-text>
</v-card>
<v-form
:ref="'form'+dessertk"
v-model="loading"
lazy-validation
>
<v-simple-table
fixed-header
dense 
height="200px"
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
      <th class="text-left">
        Description
      </th>
      <th class="text-left">
        Condition
      </th>
      <th class="text-left">
        Quantity
      </th>
      <th class="text-left">
        Price
      </th>
      <th class="text-left">
        Supplier
      </th>
      <th class="text-left">
        
      </th>
    </tr>
  </thead>
  <tbody>
    <tr
      v-for="(pricee,priceek) in dessert.prices"
      :key="priceek"
    >
<td>
<v-select
      v-model="pricee.brand_id"
      :items="abrands"
      item-text="flag_value"
      item-value="id"
      label="Brand"
      outlined
      clearable
      return-object
    ></v-select>
</td>
<td>
<v-text-field dense
v-model="pricee.item"
:rules="[rules.required]"
></v-text-field>
</td>
<td>
<v-text-field dense
v-model="pricee.description"
:rules="[rules.required]"
></v-text-field>
</td>
<td>
<v-select
      v-model="pricee.condition_id"
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
<v-text-field dense
v-model="pricee.qty"
:rules="[rules.required]"
></v-text-field>
</td>
<td>
<v-text-field dense
v-model="pricee.price"
:rules="[rules.required]"
></v-text-field>
</td>
<td>
<v-text-field dense
v-model="pricee.supplier_name"
:rules="[rules.required]"
></v-text-field>
</td>
<td>
<v-btn
dark
x-small
icon
color="error"
@click="dessert.prices.splice(priceek, 1);"
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
<v-btn
color="info"
elevation="1"
large
raised
class="float-right"
@click="dessert.prices.push({brand_id:0,item:'',description:'',condition_id:1,qty:0,price:0,supplier_name:''})"
>Add Row</v-btn>
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
    @click="savepurchaserprice(dessert.prices,dessertk,dessert.id)"
  >Save</v-btn>
</v-col>

</v-form>
</v-tab-item>
</v-tabs-items>
</v-col>
</v-row>
</v-col>
</v-row>
<v-snackbar
v-model="snackbar"
>
Price Updated

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
import purchaserservice from '@/api/auth/purchaser/quoteservice';
export default {
name: 'auth.purchaser.quotes.giveprice',
components: {
//HelloWorld
},
methods:{
  saveprice: async function()
  { 
    let x = this.$route.params.id;
    let token = localStorage.getItem('bsdapitoken');
    let response = await purchaserservice.answered(x,token,{
      lead_time:this.lead_time,
      shipping:this.shipping,
      additional_details:this.additional_details,
    });
    if(response.status==1)
    {
      this.$router.push({name:'auth.purchaser.quotes.unanswered'});
    }
  },
	savepurchaserprice(pricess,dessertk,quoteitemid){
		if(this.$refs['form'+dessertk][0].validate()){
			var formdata = new FormData();
      formdata.append("shipping", this.shipping);
      formdata.append("additional_details", this.additional_details);
      formdata.append("quote_id", this.quote_id);
      formdata.append("lead_time", this.lead_time);
			for(var i=0;i<pricess.length;i++){
				formdata.append("purchaser["+i+"][qty]", pricess[i].qty);
        formdata.append("purchaser["+i+"][item]", pricess[i].item);
        formdata.append("purchaser["+i+"][description]", pricess[i].description);
        formdata.append("purchaser["+i+"][condition_id]", (pricess[i].condition_id.id)?pricess[i].condition_id.id:pricess[i].condition_id);
        formdata.append("purchaser["+i+"][brand_id]", (pricess[i].brand_id.id)?pricess[i].brand_id.id:pricess[i].brand_id);
				formdata.append("purchaser["+i+"][price]", pricess[i].price);
				formdata.append("purchaser["+i+"][supplier_name]", pricess[i].supplier_name);
			}
var requestOptions = {
method: 'POST',
body: formdata,
redirect: 'follow',
};
let id = quoteitemid;
let qid = this.$route.params.id;
let token = localStorage.getItem('bsdapitoken');
fetch(`${this.$parent.apipath}auth/purchaser/quotes/multi/giveprice/${qid}/${id}?api_token=${token}`, requestOptions)
.then(response => response.json())
.then(result => {
if(result.status){
this.snackbar=true;
}
})
		}
	}
},
mounted: async function (){
let id = this.$route.params.id;
// var ff = await fetch(`${this.$parent.apipath}quotes/get/${id}`).then(function(e){
//   return e.json();

// })
let token = localStorage.getItem('bsdapitoken');
this.abrands = await purchaserservice.getitembrand(`?api_token=${token}`);

var ff = await purchaserservice.getquote(id,`?api_token=${token}`);
this.all_conditions = await purchaserservice.getconditions(`?api_token=${token}`);

this.lead_time=ff.lead_time;
this.shipping=ff.shipping;
this.quote_id=ff.id;
// this.email=ff.email;
this.additional_details=ff.description;
this.tag=ff.qoute_status;

this.desserts=ff.quote.items;
console.log(this.desserts);
for(let q=0;q<ff.quote.items.length;q++){
	this.qtytotals[ff.quote.items[q].id]=ff.quote.items[q].qty;
}
},
data () {
    return {
qtytotals:{},
tab:null,
desserts: [

],
lead_time:'',
shipping:'',
// email:'',
tag:'',
additional_details:'',
quote_id:'',
abrands:[],
all_conditions:[],
bread: [
{
text: 'Dashboard',
to: {name:'auth.purchaser.dashboard'},
disabled:false,
exact:true,
},
{
text: 'Unanswered Quotes',
to: {name:'auth.purchaser.quotes.unanswered'},
disabled:false,
exact:true,
},
{
text: 'Give Prices',
to: {name:'auth.purchaser.unanswered.quotes.giveprice'},
disabled:false,
exact:true,
},
],
      loading: false,
      snackbar:false,
      btnloading: false,
      items: ['Open', 'CLose'],
      rules: {
        required: value => !!value || 'Required.',
      },
    }
  },
}
</script>
