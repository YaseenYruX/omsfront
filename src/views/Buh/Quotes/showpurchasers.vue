<template>
<v-col
cols="12"
>
<h3 class="teal text-center accent-3">Prices by Purchasers</h3>
<v-card
elevation="3"
class="mx-auto pa-6 mt-5"
v-for="purchaserquote in purchaserquotes"
:key="purchaserquote.id"
>
<h4 class="mb-2">
	{{purchaserquote.purchaser.name}}
<v-tooltip top>
<template v-slot:activator="{ on, attrs }">
<v-btn
class="mx-2"
fab
dark
small
color="success"
title="Accept"
v-bind="attrs"
v-on="on"
>
<v-icon dark>
mdi-check
</v-icon>
</v-btn>
</template>
<span>Accept</span>
</v-tooltip>
<v-tooltip top>
<template v-slot:activator="{ on, attrs }">
<v-btn
class="mx-2"
fab
dark
small
color="warning"
title="Reject"
v-bind="attrs"
v-on="on"
>
<v-icon dark>
mdi-close
</v-icon>
</v-btn>
</template>
<span>Reject</span>
</v-tooltip>
<v-tooltip top>
<template v-slot:activator="{ on, attrs }">
<v-btn
class="mx-2"
fab
dark
small
color="accent"
title="Re Price"
v-bind="attrs"
v-on="on"
>
<v-icon dark>
mdi-keyboard-return
</v-icon>
</v-btn>
</template>
<span>Re Price</span>
</v-tooltip>
</h4>
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
<template
v-for="item in purchaserquote.quoteitems"
>
<tr
v-bind:key="item.id"
>
<td>{{ item.brands.flag_value }}</td>
<td>{{ item.item }}</td>
<td>{{ item.description }}</td>
<td>{{ item.condition.flag_value }}</td>
<td>{{ item.qty }}</td>
<td>{{ item.price }}</td>
<td>{{ item.amount }}</td>
</tr>
<showpurchaserpricetable 
:itemprices="item.prices"
v-bind:key="item.id"
/>
</template>
</tbody>
</template>
</v-simple-table>
</v-card>
</v-col>
</template>
<script>
import showpurchaserpricetable from '@/views/Buh/Quotes/showpurchaserpricetable'
export default {
name: 'auth.buh.quotes.showpurchasers',
props:['purchaserquotes'],
components: {
showpurchaserpricetable
},
data () {
return {
}
},
mounted(){

}
}
</script>