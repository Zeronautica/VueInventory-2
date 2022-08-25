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
      <tr v-for="inventoryItem in store.inventory">
        <td>{{ inventoryItem.productCode }}</td>
        <td>{{ inventoryItem.name }}</td>
        <td><input type="number" v-model="inventoryItem.actualAmount" /></td>
        <td>{{ inventoryItem.minimumAmount }}</td>
        <RouterLink :to="{ name: 'edit', params: { id: inventoryItem.id } }"
          >Edit</RouterLink
        >
      </tr>
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
