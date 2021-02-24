<template>
<v-row>
<v-col
cols="6"
>
<v-card
elevation="3"
class="info mx-auto pa-6 lighten-2"
>
<h2 class="white--text pb-5">Customer Information</h2>
<p>
<v-chip
  class="ma-1"
  color="white"
  label
>
  User Name
  <v-icon right>
    mdi-account-outline
  </v-icon>
</v-chip>
<v-icon
  right
>
  mdi-arrow-right
</v-icon>
<v-chip
  class="ma-1"
  color="white"
  label
>
{{quotedata.firstname}} {{quotedata.lastname}}
</v-chip>

</p>
<p>
<v-chip
  class="ma-1"
  color="white"
  label
>
  Company
  <v-icon right>
    mdi-domain
  </v-icon>
</v-chip>
<v-icon
  right
>
  mdi-arrow-right
</v-icon>
<v-chip
  class="ma-1"
  color="white"
  label
>
{{!quotedata.company?'N/A':quotedata.company}}
</v-chip>

</p>
<p>
<v-chip
  class="ma-1"
  color="white"
  label
>
  Email
  <v-icon right>
    mdi-at
  </v-icon>
</v-chip>
<v-icon
  right
>
  mdi-arrow-right
</v-icon>
<v-chip
  class="ma-1"
  color="white"
  label
>
{{!quotedata.email?'N/A':quotedata.email}}
</v-chip>

</p>
<p>
<v-chip
  class="ma-1"
  color="white"
  label
>
  Phone
  <v-icon right>
    mdi-cellphone
  </v-icon>
</v-chip>
<v-icon
  right
>
  mdi-arrow-right
</v-icon>
<v-chip
  class="ma-1"
  color="white"
  label
>
{{!quotedata.phone?'N/A':quotedata.phone}}
</v-chip>

</p>
</v-card>
</v-col>
<v-col
cols="6"
>
<v-card
elevation="3"
class="info mx-auto pa-6 lighten-2"
>

</v-card>
</v-col>
<v-col
cols="12"
>
<h3 class="teal text-center accent-3">Quote Items</h3>
<v-simple-table dense elevation="3">
<template v-slot:default>
<thead>
<tr>
<th class="text-left">Brand</th>
<th>Item</th>
<th>Description</th>
<th>Condition</th>
<th>Quantity</th>
<th>Target Price</th>
<th>Total</th>
</tr>
</thead>
<tbody>
<tr
v-for="item in quotedata.items"
:key="item.id"
>
<td>{{ item.brands.flag_value }}</td>
<td>{{ item.item }}</td>
<td>{{ item.description }}</td>
<td>{{ item.condition.flag_value }}</td>
<td>{{ item.qty }}</td>
<td>{{ item.price }}</td>
<td>{{ item.amount }}</td>
</tr>
</tbody>
</template>
</v-simple-table>
</v-col>
<showpurchasers :purchaserquotes="quotedata.purchaserquotes" />
</v-row>
</template>
<script>
import quotesservice from '@/api/auth/buh/quotesservice';
import showpurchasers from '@/views/Buh/Quotes/showpurchasers'
export default {
name: 'auth.buh.quotes.detail',
components: {
showpurchasers
},
data () {
return {
  quotedata:{},
}
},
watch: {

},
mounted: async function () {
this.quotedata = await quotesservice.getquote(this.$route.params.quoteid)
},
methods: {
},
}
</script>
