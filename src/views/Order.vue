<script setup>
import { useInventoryStore } from "../stores/Inventory.js";
const store = useInventoryStore();
</script>
<template>
  <table>
    <thead>
      <tr>
        <th>product code</th>
        <th>productnaam</th>
        <th>aantal aanwezig</th>
        <th>aantal vereist</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="inventoryItem in store.inventory">
        <tr v-if="inventoryItem.actualAmount < inventoryItem.minimumAmount">
          <td>{{ inventoryItem.productCode }}</td>
          <td>{{ inventoryItem.name }}</td>
          <td>{{ inventoryItem.actualAmount }}</td>
          <td>{{ inventoryItem.minimumAmount }}</td>
        </tr>
      </template>
    </tbody>
  </table>
</template>
<style scoped>
th {
  padding-bottom: 15px;
}
td {
  padding: 0 20px 5px;
}
</style>
