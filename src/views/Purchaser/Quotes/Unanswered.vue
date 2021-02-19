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
<template v-slot:item.actions="{ item }">
<v-btn
  dark
  x-small
  icon
  color="primary"
  :to="{ name:'auth.purchaser.quotes.giveprice' ,params:{id:item.id}}"
>
  <v-icon dark>
    mdi-pencil-plus
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
</v-col>
</v-row>
</template>
<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
//import Swal from 'sweetalert2'
import purchaserservice from '@/api/auth/purchaser/quoteservice';
export default {
name: 'auth.purchaser.quotes.unanswered',
components: {
//HelloWorld
},
data () {
return {
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
  let token = localStorage.getItem('bsdapitoken');
  return purchaserservice.getunasweredquotes(`?api_token=${token}&page=${this.page}&perpage=${this.perpage}${_sortstr}`);
  // return fetch(`${this.$parent.apipath}purchaser/quotes/unanswered?page=${this.page}&perpage=${this.perpage}${_sortstr}`).then(function(e){
  //   return e.json();
  // })
},
handlePageChange(value){
  this.page = value;
  this.getDataFromApi();
}
},
}
</script>
