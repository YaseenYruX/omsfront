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
<template v-slot:item.user_type="{ item }">
<v-chip
  color="red"
  v-if="item.user_type==1"
>Admin</v-chip>
<v-chip
  color="orange"
  v-if="item.user_type==2"
>BUH</v-chip>
<v-chip
  color="yellow"
  v-if="item.user_type==3"
>Purchaser</v-chip>
<v-chip
  color="blue"
  v-if="item.user_type==4"
>Sales</v-chip>
</template>
<template v-slot:item.actions="{ item }">
<!-- <v-btn
  dark
  x-small
  icon
  color="primary"
  :to="{ name:'auth.brands.update' ,params:{id:item.id}}"
>
  <v-icon dark>
    mdi-pencil-plus
  </v-icon>
</v-btn> -->
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
:to="{name:'auth.admin.users.add',params:{usertype:this.$route.params.usertype}}"
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
import usersservice from '@/api/auth/admin/users';
export default {
name: 'auth.admin.users.list',
components: {
//HelloWorld
},
data () {
return {
curtype:{1:'Admin',2:'BUH',3:'Purchaser',4:'Sales'},
curtypeselected:1,
bread: [
{
text: 'Dashboard',
to: {name:'Home'},
disabled:false,
exact:true,
},
{
text: 'Users',
to: {name:'auth.admin.users.list'},
disabled:false,
exact:true,
}
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
text: 'Name',
align: 'center',
sortable: true,
value: 'name',
},
{
text: 'Email',
align: 'center',
sortable: true,
value: 'email',
},
{
text: 'Type',
align: 'center',
sortable: true,
value: 'user_type',
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
$route() {
  this.getDataFromApi();
},
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
    var token = localStorage.getItem('bsdapitoken');
    await  usersservice.deleteuser({
      id:id,
      query:`?api_token=${token}`
    });
    Swal.fire(
      'Deleted!',
      'Your record has been deleted.',
      'success'
    );
    this.$emit('refreshusercount',true);
    this.getDataFromApi();
  }
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
  var token = localStorage.getItem('bsdapitoken');
  let usertype = this.$route.params.usertype;
  return usersservice.getlist(`?api_token=${token}&usertype=${usertype}&page=${this.page}&perpage=${this.perpage}${_sortstr}`);
},
handlePageChange(value){
  this.page = value;
  this.getDataFromApi();
}
},
}
</script>
