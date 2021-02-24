<template>
<tr>
<td></td>
<td colspan="6">
<h4 class="red--text" v-if="itemprices.length==0">No Price Quotes</h4>
<v-simple-table v-else dense elevation="3">
<template v-slot:default>
<thead>
<tr>
<th class="text-left">Brand</th>
<th>Item</th>
<th>Description</th>
<th>Condition</th>
<th>Supplier</th>
<th>Quantity</th>
<th>Target Price</th>
<th>Total</th>
</tr>
</thead>
<tbody>
<tr
v-for="itemprice in itemprices" 
:key="itemprice.id"
>
<td>{{ itemprice.brand.flag_value }}</td>
<td>{{ itemprice.item }}</td>
<td>{{ itemprice.description }}</td>
<td>{{ itemprice.condition.flag_value }}</td>
<td>{{ itemprice.supplier_name }}</td>
<td>{{ itemprice.qty }}</td>
<td>{{ itemprice.price }}</td>
<td>{{ itemprice.total }}</td>
</tr>
</tbody>
</template>
</v-simple-table>
</td>
</tr>
</template>
<script>
export default {
name: 'auth.buh.quotes.showpurchaserpricetable',
props:['itemprices'],
components: {
},
}
</script>