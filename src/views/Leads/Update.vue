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
      v-model="brand"
      :items="brands"
      :rules="[rules.required]"
      item-text="name"
      item-value="id"
      label="Brand"
      outlined
      clearable
      return-object
    ></v-select>
  </v-col>
  <v-col
  cols="12"
  sm="6"
  class="pb-0"
>
  <v-select
      v-model="assigned_to"
      :items="assigned_to_sales"
      :rules="[rules.required]"
      item-text="email"
      item-value="id"
      label="Assigned to"
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
  <v-text-field
    v-model="title"
    label="Title"
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
    v-model="mobile"
    label="Mobile"
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
      v-model="lead_source"
      :items="lead_source_opt"
      label="Lead Source"
      outlined
      clearable
    ></v-select>
  </v-col>
  <v-col
    class="d-flex pb-0"
    cols="12"
    sm="6"
  >
    <v-select
      v-model="lead_status"
      :items="lead_status_opt"
      label="Lead Status"
      outlined
      clearable
    ></v-select>
  </v-col>
  <v-col
    class="d-flex pb-0"
    cols="12"
    sm="6"
  >
    <v-select
      v-model="Industry"
      :items="Industry_opt"
      label="Industry"
      outlined
      clearable
    ></v-select>
  </v-col>
  <v-col
    class="d-flex pb-0"
    cols="12"
    sm="6"
  >
    <v-select
      v-model="ratings"
      :items="ratings_opt"
      label="Ratings"
      outlined
      clearable
    ></v-select>
  </v-col>
  <v-col
  cols="12"
  sm="6"
  class="pb-0"
>
  <v-text-field
    v-model="total_employees"
    label="Total Employees"
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
    v-model="annual_revenue"
    label="Annual Revenue"
    outlined
    clearable
  ></v-text-field>
</v-col>
<v-col
  cols="12"
  sm="12"
  class="pb-0"
>
<h2>Social</h2>
</v-col>
<v-col
cols="12"
sm="6"
class="pb-0"
>
<v-text-field
  v-model="website"
  label="Website"
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
    v-model="skype_id"
    label="Skype Id"
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
    v-model="twitter"
    label="Twitter"
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
    v-model="secondary_email"
    label="Secondary Email"
    outlined
    clearable
  ></v-text-field>
</v-col>
<v-col
  cols="12"
  sm="12"
  class="pb-0"
>
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
    v-model="currency"
    label="Currency"
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
    v-model="description"
    label="Description"
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
  cols="12"
  sm="12"
  class="pb-0"
>
<v-btn
    color="secondary"
    elevation="1"
    large
    raised
    @click="addmylead"
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
import usersservice from '@/api/auth/admin/lead';
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
    this.getbrands();
        this.id=ff.id;
        this.brand=ff.brand_id;
        this.assigned_to=ff.assigned_id;
        this.last=ff.lastname;
        this.first=ff.firstname;
        this.email=ff.email;
        this.title=ff.title;
        this.company=ff.company;
        this.mobile=ff.mobile;
        this.website=ff.website;
        this.lead_status=ff.lead_status;
        this.Industry=ff.Industry;
        this.total_employees=ff.total_employees;
        this.annual_revenue=ff.annual_revenue;
        this.ratings=ff.ratings;
        this.skype_id=ff.skype_id;
        this.twitter=ff.twitter;
        this.secondary_email=ff.secondary_email;
        this.street=ff.street;
        this.city=ff.city;
        this.state=ff.state;
        this.zip_code=ff.zip_code;
        this.country=ff.country;
        this.currency=ff.currency;
        this.description=ff.description;
        this.lead_source=ff.lead_source;
        this.additional_details=ff.additional_details;
  },
  watch:{
    brand:async function(){
      this.assigned_to_sales = await usersservice.getsalesperson();
    }
  },
  methods:{
    getbrands: async function(){
      this.brands =await usersservice.getbrands();
    },
    addmylead: async function(){
     
      if(this.$refs.form.validate()){
        this.btnloading=true;
        var token = localStorage.getItem('bsdapitoken');
        const {status,msgs} = await  usersservice.updatelead(token,this.id,{
          brand_id:(this.brand.id)?this.brand.id:this.brand,
          assigned_id : this.assigned_to,
          lastname:this.last,
          firstname:this.first,
          email:this.email,
          title:this.title,
          company:this.company,
          mobile:this.mobile,
          website:this.website,
          lead_status:this.lead_status,
          industry:this.Industry,
          total_employees:this.total_employees,
          annual_revenue:this.annual_revenue,
          ratings:this.ratings,
          skype_id:this.skype_id,
          twitter:this.twitter,
          secondary_email:this.secondary_email,
          street:this.street,
          city:this.city,
          state:this.state,
          zip_code:this.zip_code,
          country:this.country,
          currency:this.currency,
          description:this.description,
          additional_details:this.additional_details,
          lead_source:this.lead_source
        }).then(function(e){

          return {status:e.status,msgs:e.data};
        }).catch(function(e){
          return {status:2,msgs:e.response.data.errors};
        });
        this.btnloading=false;
        this.errors={};
        if(status==1){
          /*user created*/
          this.$router.push({name:'auth.leads.listing'});
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
    },
  },
  data () {
    return {
id:'',
additional_details:'',
first:'',
last:'',
email:'',
mobile:'',
company:'',
title:'',
brand:'',
assigned_to:'',
lead_source:'',
lead_status:'',
website:'',
Industry:'',
ratings:'',
total_employees:'',
annual_revenue:'',
skype_id:'',
twitter:'',
secondary_email:'',
street:'',
city:'',
state:'',
zip_code:'',
country:'',
currency:'',
description:'',
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

     lead_source_opt: ['Advertisement','Cold Call','Employee Referal','External Referal','Online Store','Twitter','Facebook','Google+','Public Relations','Sales Email Alias','Seminar Partner','Internal Seminar','Trade Show','Web Downloads','Web Research','Chat','BrokerBin'],
      lead_status_opt:['Attempted to Contact','Contacted','Contact in Future','Junk Lead','Lost Lead','Not Contacted','Pre-Qualified','Not Qualified'],
      Industry_opt:['ASP(Application Service Provider)','Data/Telecom OEM','ERP (Enterprise Resource Planning)','Government/Military','Large Enterprise','ManagementISV','MSP (Management Service Provider)','Network Equipment Enterprise','ReSeller','Integrator','End-User'],
      ratings_opt:['Accuqired','Active','Market Failed','Project Cancelled','Shut Down'],
      brands:[],
      assigned_to_sales:[],
    }
  },
}
</script>
