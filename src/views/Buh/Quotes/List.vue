<template>
<v-row no-gutters>
<v-breadcrumbs :items="bread">
<template v-slot:divider>
<v-icon>mdi-forward</v-icon>
</template>
</v-breadcrumbs>
<v-col
cols="12"
sm="12"
>
<v-data-table
:headers="headers"
:items="desserts"
disable-pagination
:hide-default-footer="true"
:options.sync="options"
:items-per-page="perpage"
:server-items-length="totalDesserts"
:loading="loading"
class="elevation-1"
>
<!-- <template v-slot:item.lead_tag="{ item }">
<v-chip
  color="green"
  outlined
  v-if="item.lead_tag=='BigFish'"
  v-text="item.lead_tag"
></v-chip>
<v-chip
  color="blue"
  outlined
  v-if="item.lead_tag=='SmallFish'"
  v-text="item.lead_tag"
></v-chip>
<v-chip
  color="purple"
  outlined
  v-if="item.lead_tag=='NoGo'"
  v-text="item.lead_tag"
></v-chip>
</template> -->
<template v-slot:item.actions="{ item }">
<v-btn
  dark
  x-small
  icon
  color="primary"
  :to="{ name:'auth.leads.update' ,params:{id:item.id}}"
>
  <v-icon dark>
    mdi-pencil-plus
  </v-icon>
</v-btn>
<v-btn
  dark
  x-small
  icon
  color="error"
  @click="deletebrand(item.id)"
>
  <v-icon dark>
    mdi-delete-outline
  </v-icon>
</v-btn>
<v-btn
  dark
  x-small
  icon
  color="success"
  link
  :to="{name:'auth.quote.add',params:{id:item.id}}"
>
  <v-icon dark>
    mdi-account-convert
  </v-icon>
</v-btn>
</template>
</v-data-table>
<v-col cols="12" sm="12">
<v-row>
<v-col cols="4" sm="3">
<v-select
v-model="perpage"
:items="pageSizes"
label="Items per Page"
class="pt-0"
></v-select>
</v-col>
<v-col cols="12" sm="9">
<v-pagination
  v-model="page"
  :length="totalpages"
  total-visible="7"
  next-icon="mdi-menu-right"
  prev-icon="mdi-menu-left"
  @input="handlePageChange"
></v-pagination>
</v-col>
</v-row>
</v-col>
<v-btn
fab
color="info"
bottom
right
fixed
link
:to="{name:'auth.leads.add'}"
>
<v-icon>mdi-plus</v-icon>
</v-btn>
</v-col>
</v-row>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Swal from 'sweetalert2'
export default {
name: 'auth.buh.quotes.listing',
components: {
//HelloWorld
},
data () {
return {
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
],
pageSizes:[10,15,20,50,100],
perpage:parseInt(process.env.VUE_APP_ITEMPERPAGE),
page:1,
totalDesserts: 0,
totalpages:0,
desserts: [],
loading: true,
options: {
  //itemsPerPage:parseInt(process.env.VUE_APP_ITEMPERPAGE),
},
headers: [
{
text: 'Id',
align: 'left',
sortable: true,
value: 'id',
},
{
text: 'Full Name',
align: 'center',
sortable: true,
value: 'fullname',
},
{
text: 'Email',
align: 'center',
sortable: true,
value: 'email',
},
{
text: 'Source',
align: 'center',
sortable: true,
value: 'lead_source',
},
{
text: 'Action',
align: 'center',
sortable: false,
value: 'actions',
},
],
}
},
watch: {
perpage(){
this.getDataFromApi();
},
options:{
  handler(){
    this.getDataFromApi();
  },
  deep:true,
}
},
mounted () {
this.getDataFromApi();
},
methods: {
deletebrand: async function (id){
  const isConfirmed = await Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      return true;
    }
  });
  if(isConfirmed){
    await fetch(`${this.$parent.apipath}leads/delete/${id}`).then(function(e){
      return e.json();
    });
    Swal.fire(
      'Deleted!',
      'Your record has been deleted.',
      'success'
    )
    this.getDataFromApi();
  }
},
convert: async function(id)
{
  console.log(id);
},
getDataFromApi () {
this.loading = true
this.fakeApiCall().then(data => {
this.desserts = data.data
this.totalpages = data.last_page
this.totalDesserts = data.total
this.loading = false

})
},
fakeApiCall(){
  var _sortstr = ``;
  if(this.options.sortDesc.length==1){
    _sortstr=`&sortcol=${this.options.sortBy[0]}&sorttype=${this.options.sortDesc[0]===true?'desc':'asc'}`
  }
  return fetch(`${this.$parent.apipath}leads?page=${this.page}&perpage=${this.perpage}${_sortstr}`).then(function(e){
    return e.json();
  })
},
handlePageChange(value){
  this.page = value;
  this.getDataFromApi();
}
},
}
</script>
